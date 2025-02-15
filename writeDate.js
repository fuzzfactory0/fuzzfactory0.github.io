const fs = require('fs');

const date = new Date().toISOString().split('T')[0];
const text = `export const environment = {
  production: true,
  lastUpdated: "${date}"
};`

fs.writeFileSync('./src/environments/environment.ts', text);
console.info('Wrote current date to environment.ts');