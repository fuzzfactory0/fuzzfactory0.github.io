
const raw = require('./input.js');
console.log(raw)

const fs = require('fs')

const graphql = "https://graphql.anilist.co/"

async function get(url) {
  let id = url.match(/[0-9]+/)[0];
  let payload = {
    query: `query singleSeries($mediaId: Int) {
      Media(id: $mediaId) {
        id
        title {
          romaji
          english
        } 
        description 
        format 
        status 
        isAdult
        coverImage {
          extraLarge
          medium,
          large,
          color
        }  
        idMal
        chapters
        volumes
        staff {
          edges {
            node {
              name {
                full
                last
                first
              }
              image {
                medium
              }
            }
            role
          }
        }
      }
    }`, 
    variables: {
      mediaId: id
    },
    operationName: "singleSeries"
  }
  let req = await fetch(graphql, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json"
    }
  });
  let json = await req.json();
  console.log(json.data.Media.title.english || json.data.Media.title.romaji || 'NOT FOUND');
  return json.data.Media;
}

var index = 0;
var all = [];


const NEW_ONLY = process.argv[2];
let rawFiltered;
if (NEW_ONLY == 'update') {
  rawFiltered = [...new Set(raw.map(l => l.match(/^.+[0-9]+\//)[0]))];
} else {
  const existing = JSON.parse(fs.readFileSync('./output.json'));
  rawFiltered = [...new Set(raw.map(l => l.match(/^.+[0-9]+\//)[0]))].filter(m => !existing.some(s => m.includes(s.id)));
  all = existing;
}
console.log('FETCHING', rawFiltered.length, 'SERIES');

let interv = setInterval(() => {
  if (index < rawFiltered.length) {
    get(rawFiltered[index]).then(d => {
      const rawstaff = d.staff.edges.filter(s => s.role.toLowerCase().includes('story') || s.role.toLowerCase().includes('art') || s.role.toLowerCase().includes('character design') || s.role.toLowerCase().includes('illustration'));
      const staff = rawstaff.map(s => {
        const name = (s.node.name.last && s.node.name.first) ? `${s.node.name.last} ${s.node.name.first}` : s.node.name.full;
        return {name, image: s.node.image.medium, role: s.role}
      });
      all.push({
        ...d,
        id: d.id,
        anilist: `https://anilist.co/manga/${d.id}/`,
        mal: 'https://myanimelist.net/manga/'+d.idMal+'/',
        idMal: undefined,
        staff
      });
    }).catch(e => {
      console.log(e);
    });
    index++
  } else {
    clearInterval(interv);
    fs.writeFileSync('./output.json', JSON.stringify(all));

    fs.writeFileSync('./src/app/yuri/entities/rawdata.ts', '// ' + all.length + ' in total\n');
    for (let s of all) {
      fs.appendFileSync('./src/app/yuri/entities/rawdata.ts', 'export const m' + s.id + ' = ' + JSON.stringify(s) + ';\n');
    }
  }
}, 3010);
