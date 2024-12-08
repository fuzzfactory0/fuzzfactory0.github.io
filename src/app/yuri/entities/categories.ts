import { FullSeries } from "./yuriClass";

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface FullCategory extends Category {
  series: FullSeries[];
}

export const COMFY =        { id: 1, name: "Comfy Yuri", description: 'Cute girls being gay and happy. Usually, no drama is present at all.' };
export const IDIOTS =       { id: 2, name: "Idiot Couple Yuri", description: 'Series where the main characters are incredibly dumb, not in the dense way, but in the stupid way.'};
export const ADULT_LIFE =   { id: 3, name: "Adult Life Yuri", description: 'Series centered on adult life. Just having adult characters doesn\t cut it, the story has to be about adult life.' };
export const STOCKHOLM =    { id: 4, name: "Stockholm Syndrome Yuri", description: 'Love that blooms from hate, blackmail, debt, animosity, rivalry or other kinds of unorthodox situations.' };
export const SUBTEXT =      { id: 5, name: "Subtext is Text Yuri", description: 'There\'s no love confession or kiss, but you don\'t need the yuri goggles to see how gay these girls are.' };
export const IDOL =         { id: 6, name: "Idol Yuri", description: 'Yuri centered around idols or idol culture.. Vtubers fall here, unless the focus of the story is the actual activity of vtubing; in that case the "performing arts" category would apply.' };
export const MUSIC =        { id: 7, name: "Music, theatre, and performing arts Yuri", description: 'Combined category because of the depressing lack of manga in these fields. This covers bands, stage, movie and TV actresses, gymnasts, etc.' };
export const MANGAKA =      { id: 8, name: "Mangaka Yuri", description: 'There\'s plenty of yuri manga with a mangaka as the protagonist. I wonder why.' };
export const FANTASY =      { id: 9, name: "Fantasy Yuri", description: 'This category covers from the lowest fantasy (unexplained animal ears in an otherwise normal Japan) to the highest fantasy (full-on Tolkien-esque settings)' };
export const SCIFI =        { id: 10, name: "SciFi Yuri", description: 'I would like to file a complaint with the greater manga industry for the absolute scarcity of science fiction in yuri.' };
export const AGE_GAP =      { id: 11, name: "Age Gap Yuri", description: 'Yuri relationships with a significant age gap, but not too big because I really don\'t like oneeloli.' };
export const DEGEN =        { id: 12, name: "Degenerate Yuri", description: 'Yuri focused on sex, sexuality, prostitution, fetishes, and anything related.' };
export const DEPRESSO =     { id: 13, name: "Depresso Yuri", description: 'Looking to cry?' };
export const TOXIC =        { id: 14, name: "Toxic As Fuck Yuri", description: 'Abusive relationships, physical violence, manipulation, crime, cheating; if you want to punch the MC (or fix her), then it falls in this category.' };
export const DRAMA =        { id: 15, name: "Drama Yuri", description: 'Series with high drama content.' };
export const HORROR =       { id: 16, name: "Horror Yuri", description: 'Rare, but always good.' };
export const WTF =          { id: 17, name: "What The Fuck Am I Reading Yuri", description: 'Special category for strange horror, esoteric narrative, fucked up characters, absurd comedy; basically anything that makes you think "what the fuck am i reading"' };
export const PSYCHO =       { id: 18, name: "Psychological Yuri", description: 'Any in-universe mindfuckery goes in here.' };
export const COHAB =        { id: 19, name: "Cohabitation Yuri", description: 'Yuri focused on two girls who live together and their daily life. Cohabitation has to be a central topic, not just something that happens to be.' };
export const WORK =         { id: 20, name: "Working Yuri", description: 'Stories centered on working women, with work at the center of the story; a normal yuri where the MC just has a job in the background doesn\'t count.' };
export const SCHOOL =       { id: 21, name: "School Life Yuri", description: 'Any yuri between students where the story takes place mostly within a normal japanese school and deals with normal, everyday school life. "Magical academies" from fantasy and isekai don\'t count.' };
export const DATING =       { id: 22, name: "Already Dating Yuri", description: 'Series where either the girls are already dating at the beginning of the story, or start dating in the very first chapter.' };
export const COUNTRY =      { id: 23, name: "Countryside Yuri", description: 'Yuri that takes place mostly in the japanese countryside, where the setting is important to the story.' };
export const CLUB =         { id: 24, name: "Club Activities/Hobby Yuri", description: 'Yuri stories with a strong focus on a specific activity, be it the typical school club or a particular hobby.' };
export const SUPERNATURAL = { id: 25, name: "Supernatural Yuri", description: 'Yuri stories involving spirits, ghosts, youkai, gods, and anything related to the occult.' };
export const FOOD =         { id: 26, name: "Food Yuri", description: 'Stories centered around cooking or eating food. Simple as that.' };
export const ANTHOLOGY =    { id: 27, name: "Anthology Yuri", description: 'Anthologies are collections of one-shots. They come in two flavors: anthologies that collect short stories released over the years by the same author, and anthologies where multiple authors participate to write stories based on a set topic. (As an example, "Yuliqueur" is an anthology focused on yuri and alcohol, "Aatashi to Watashi" is an anthology focused on yuri between gyarus.)' };
export const HISTORY =      { id: 28, name: "Historical Yuri", description: 'Any yuri that is set in the past. Sengoku, Edo, Meiji, Taisho, up to early Showa if set in Japan; Victorian and behind if set in Europe.' };
export const GENDERBEND =   { id: 29, name: "Genderbender Yuri", description: 'Yuri involving men who turned into girls.' };
export const ACTION =       { id: 30, name: "Action/adventure Yuri", description: 'For the rare occurence of yuri in action/adventure series.' };
export const ONESHOT =      { id: 31, name: "Yuri OneShots", description: 'One-shots are everything serializations usually can\'t afford to be: experimental, innovative, daring, not necessarily best sellers but some amazing and unique stories are usually found here.' };
export const OTHER =        { id: 32, name: "Regular yuri that doesn't fit anywhere else", description: 'Some series just don\'t have a particular gimmick or topic but are good reads anyway. This category is for those.' };