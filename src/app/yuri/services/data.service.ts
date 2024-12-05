import { Injectable } from '@angular/core';
import { Category } from '../entities/categories';
import { AnilistData, FullSeries } from '../entities/yuriClass';
import * as raw from '../entities/rawdata';
import * as cat from '../entities/categories';
import { englishOverrides } from '../entities/nameOverrides';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    // Mangadex only series
    this.addSeries(
      {
        id: 1000000001,
        title: {
          romaji: "Nagi no Hate Nite",
          english: "When The Calm Ends"
        },
        anilist: '',
        mal: 'https://myanimelist.net/manga/168753',
        description: 'The same as ever, two childhood friends drift along.\n"Koma-chan, it looks like the world is going to end this day next year"\nPublished in the April 2024 issue of Yuri Hime.',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://mangadex.org/covers/6b84a1a6-0b99-4e20-ae14-9e545b5cbc08/4a087f8c-7ce2-40c3-9cf9-833b8c7a458b.jpg',
          extraLarge: 'https://mangadex.org/covers/6b84a1a6-0b99-4e20-ae14-9e545b5cbc08/4a087f8c-7ce2-40c3-9cf9-833b8c7a458b.jpg',
          large: 'https://mangadex.org/covers/6b84a1a6-0b99-4e20-ae14-9e545b5cbc08/4a087f8c-7ce2-40c3-9cf9-833b8c7a458b.jpg',
          color: '#eeeeee'
        },
        chapters: 1,
        volumes: 0
      },
      [cat.TOXIC, cat.DRAMA, cat.WTF, cat.DEPRESSO],
      'https://mangadex.org/title/6b84a1a6-0b99-4e20-ae14-9e545b5cbc08/when-the-calm-ends',
      '',
      null,
      'Yuri one-shots are a massive rabbit hole of surprises. One moment you\'re reading the comfiest one, the next you\'re reading this',
      true, false, true
    );

    this.addSeries(
      {
        id: 1000000002,
        title: {
          romaji: "Romance Code",
          english: "Romance Code"
        },
        anilist: '',
        mal: 'https://myanimelist.net/manga/172571',
        description: null,
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://mangadex.org/covers/c4d5d4fb-1b7b-4aa7-8be4-727966380960/bcac3c82-4d44-4198-ac76-93d52c35bef0.png',
          extraLarge: 'https://mangadex.org/covers/c4d5d4fb-1b7b-4aa7-8be4-727966380960/bcac3c82-4d44-4198-ac76-93d52c35bef0.png',
          large: 'https://mangadex.org/covers/c4d5d4fb-1b7b-4aa7-8be4-727966380960/bcac3c82-4d44-4198-ac76-93d52c35bef0.png',
          color: '#eeeeee'
        },
        chapters: 1,
        volumes: 0
      },
      [cat.TOXIC, cat.DRAMA, cat.WTF, cat.SCIFI],
      'https://mangadex.org/title/c4d5d4fb-1b7b-4aa7-8be4-727966380960',
      '',
      null,
      'AI is scary, but if AI was a cute girl I wouldn\'t mind.',
      true, false, true
    );

    this.addSeries(
      {
        id: 1000000003,
        title: {
          romaji: "You, My Double",
          english: "You, My Double"
        },
        anilist: '',
        mal: '',
        description: null,
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/I48hWqE.png',
          extraLarge: 'https://i.imgur.com/I48hWqE.png',
          large: 'https://i.imgur.com/I48hWqE.png',
          color: '#eeeeee'
        },
        chapters: 1,
        volumes: 0
      },
      [cat.TOXIC, cat.DRAMA, cat.WTF],
      'https://dynasty-scans.com/chapters/you_my_double#1',
      '',
      null,
      'She needs help',
      true, false, true
    );
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN

    // Anilist series
    this.addSeries(raw.m164581, [cat.COMFY, cat.SCHOOL], 'https://mangadex.org/title/4a89da3a-ebf9-467b-94a1-beeb7d1bd3e8/koi-yori-aoku', 'https://dynasty-scans.com/series/a_love_yet_to_bloom', null, '', false, false);
    this.addSeries(raw.m102549, [cat.COMFY, cat.ADULT_LIFE, cat.COHAB, cat.DATING], 'https://mangadex.org/title/aef191f8-f2ef-432d-9848-37b8f75a9780/dousei-seikatsu', 'https://dynasty-scans.com/series/dousei_seikatsu', null, 'Translator is AWOL.', false, false, true);
    this.addSeries(raw.m108070, [cat.COMFY, cat.COHAB, cat.ADULT_LIFE, cat.DRAMA, cat.IDIOTS], 'https://mangadex.org/title/5412816d-a3c9-4bab-956b-b08d1f8f41f6/fuzoroi-no-renri', 'https://dynasty-scans.com/series/fuzoroi_no_renri', 'https://yenpress.com/titles/9781975348861-assorted-entanglements-vol-1', 'Has a parallel series, both follow the same characters and both are important to understand the story. One is originally a webcomic, one a manga, both are ongoing. Search for "Fuzoroi no Renri - Side Stories" in your favorite manga site.', false, false, true);
    this.addSeries(raw.m110826, [cat.COMFY, cat.COHAB, cat.ADULT_LIFE, cat.WORK], 'https://mangadex.org/title/5199b00b-f55d-43d2-bf36-63873adee286/egao-no-taenai-shokuba-desu', 'https://dynasty-scans.com/series/a_workplace_where_you_cant_help_but_smile', null, '', false, false);
    this.addSeries(raw.m100801, [cat.COMFY, cat.SCHOOL, cat.DATING], 'https://mangadex.org/title/bc86a871-ddc5-4e42-812a-ccd38101d82e/hana-ni-arashi', 'https://dynasty-scans.com/series/hana_ni_arashi', 'https://www.viz.com/rainbows-after-storms', 'One of the best yuri series there is.', true, false, true);
    this.addSeries(raw.m126292, [cat.COMFY, cat.COHAB, cat.ADULT_LIFE, cat.DATING], 'https://mangadex.org/title/bc9ccb3d-bb15-431d-b7ef-35084514df69/onna-tomodachi-to-kekkon-shitemita', 'https://dynasty-scans.com/series/trying_out_marriage_with_my_female_friend', 'https://sevenseasentertainment.com/series/i-married-my-female-friend/', 'A story about cohabitation, the meaning of partnership, and falling in love.', true, false, true);
    this.addSeries(raw.m98777,  [cat.SCHOOL, cat.DRAMA], 'https://mangadex.org/title/79b440bd-4d8a-41d6-b56f-6147d361ca8b/kase-san-and', 'https://dynasty-scans.com/series/kase_san', 'https://sevenseasentertainment.com/series/kase-san-and/', 'Has a longer sequel called "Yamada to Kase-san", both fan translated and officially translated.', true, false, true);
    this.addSeries(raw.m86244,  [cat.COMFY, cat.COHAB, cat.SCHOOL], 'https://mangadex.org/title/a9316e33-94ad-4388-9b30-eaf41990a076/futaribeya', 'https://dynasty-scans.com/series/a_room_for_two', 'https://comics.inkr.com/title/139-futaribeya', 'A story that covers the life of the protagonists from their first year of highschool to their first year of working after graduating university. Very comfy, super gay.', false, false);
    this.addSeries(raw.m161853, [cat.COMFY, cat.SCHOOL, cat.IDIOTS, cat.FOOD], 'https://mangadex.org/title/bd3ee313-500b-4313-944a-86bacf939687/naisho-no-ofutarisama', '', null, '', true, false);
    this.addSeries(raw.m103081, [cat.COMFY, cat.SCHOOL, cat.COUNTRY, cat.OTHER], 'https://mangadex.org/title/b997eeb1-a9a9-4d49-a107-e757a2f5ad90/our-wonderful-days', 'https://dynasty-scans.com/series/tsurezure_biyori', 'https://sevenseasentertainment.com/series/our-wonderful-days/', 'Incredible art. Suffered an early cancellation, but it\'s a good read.', true, false, true);
    this.addSeries(raw.m111229, [cat.CLUB, cat.SCHOOL], 'https://mangadex.org/title/b553b7c3-cee3-4689-aa54-fbc1bc1da71d/pocha-climb', '', null, 'Cancelled too early, the true ending is in a 40-page doujin the author wrote. It\'s not available anywhere online, but the author emailed it to me after I asked if I could buy it, so if you want to read it, hit me up.', true, false);
    this.addSeries(raw.m163249, [cat.CLUB, cat.COMFY], 'https://mangadex.org/title/5665969c-d6d9-49e5-a602-ad8a7fc6eddb/haidou', '', '', 'A manga about two girls exploring the old abandoned roads of Japan. It\'s actually far more engaging (and cuter) than it sounds!', false, false);
    this.addSeries(raw.m124885, [cat.FANTASY, cat.AGE_GAP, cat.COMFY, cat.DRAMA], 'https://mangadex.org/title/6fe56296-e980-4321-8a7b-bc8b4e2750c8/ookami-no-kawa-o-kabutta-hitsujihime', 'https://dynasty-scans.com/series/the_sheep_princess_in_wolfs_clothing', 'https://sevenseasentertainment.com/series/sheep-princess-in-wolfs-clothing/', 'Extremely cute! There\'s an epilogue doujin, so don\'t miss it', true, false);
    this.addSeries(raw.m111464, [cat.SCHOOL, cat.OTHER], 'https://mangadex.org/title/1b46b76c-bd79-4d42-8b21-e199993fee49/houkago', 'https://dynasty-scans.com/series/after_school', null, '', true, true);
    this.addSeries(raw.m99019,  [cat.ADULT_LIFE, cat.WORK, cat.COHAB], 'https://mangadex.org/title/2e71d530-79b7-444d-89c9-29f9534d08d2/my-cute-little-kitten', 'https://dynasty-scans.com/series/my_cute_little_kitten', 'https://sevenseasentertainment.com/series/my-cute-little-kitten/', '', false, false);
    this.addSeries(raw.m120761, [cat.COMFY, cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/ae58deed-2071-4651-aaeb-ab22ce0d48ef/kirakira-study-zettai-goukaku-sengen', 'https://dynasty-scans.com/series/kirakirastudy', null, '4koma', true, false);
    this.addSeries(raw.m136774, [cat.ADULT_LIFE, cat.COUNTRY, cat.DATING, cat.DRAMA], 'https://mangadex.org/title/d006f413-bad9-4f82-a0aa-901ef2d0ece6/throw-away-the-suit-together', 'https://dynasty-scans.com/series/throw_away_the_suit_together', null, 'A great start with a terrible early cancellation, it\'s worth reading even though the ending was clearly rushed. I have no idea why they would axe something this good.', true, false);
    this.addSeries(raw.m148311, [cat.COMFY, cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/4de70c96-566b-4cdb-88f4-6c7fd5184991/doushitara-osananajimi-no-kanojo-ni-naremasu-ka', 'https://dynasty-scans.com/series/how_do_i_get_together_with_my_childhood_friend', 'https://sevenseasentertainment.com/series/how-do-i-turn-my-best-friend-into-my-girlfriend/', 'Extremely cute, very gay, but be warned: We are reaching levels of stretching never thought possible, it\'s got incredibly frustrating so wait until it\'s over if you don\'t want to suffer.', false, false);
    this.addSeries(raw.m104401, [cat.COMFY, cat.IDIOTS], 'https://mangadex.org/title/13e9bb3a-757b-4064-9291-94feecfa8c4d/yuri-moyou', 'https://dynasty-scans.com/series/yuri_moyou', null, 'These are four parallel stories loosely interconnected, with very short chapters.', true, false);
    this.addSeries(raw.m121501, [cat.SCHOOL, cat.CLUB, cat.DRAMA, cat.IDIOTS], 'https://mangadex.org/title/bc8f71a4-49d8-498b-a231-10faa0d53ab6/stardust-telepath', 'https://dynasty-scans.com/series/stardust_telepath', null, '', false, false);
    this.addSeries(raw.m158904, [cat.ADULT_LIFE, cat.COMFY, cat.DATING, cat.COHAB], 'https://mangadex.org/title/d13332db-7b57-4cc4-9e46-802cf52e3b8b/koharu-to-minato-watashi-no-partner-wa-onna-no-ko', '', null, 'Allegedly autobiographical', false, false);
    this.addSeries(raw.m165306, [cat.ADULT_LIFE, cat.WORK, cat.COMFY, cat.IDIOTS], 'https://mangadex.org/title/0c1f898e-1769-44cb-9dbe-7abd11180663/hogushite-yui-san', '', null, 'Where can I get a stress relief huggable coworker gf', true, false);
    this.addSeries(raw.m154072, [cat.WORK, cat.COMFY], 'https://mangadex.org/title/da0f5e67-843b-420c-af19-6655dd338812/yumemiru-maid-no-tea-time', '', null, 'Cancelled early. Still cute, and the art is incredible.', true, false);
    this.addSeries(raw.m176100, [cat.SCHOOL, cat.IDIOTS, cat.DATING], 'https://mangadex.org/title/f7262e67-e7d7-44b5-b39a-96fafef39edf/koi-ni-koi-suru-koibito-kankei', 'https://dynasty-scans.com/series/becoming_her_lover_for_the_sake_of_love', null, 'I LOVE USUI SHIO SO MUCH IT\'S UNREAL', false, false);
    this.addSeries(raw.m180657, [cat.DATING, cat.SCHOOL, cat.DRAMA], 'https://mangadex.org/title/b80ea8bd-7293-4e61-965a-14594059dde1/7-kakan-gentei-kanojo', 'https://dynasty-scans.com/series/girlfriend_limited_to_7_days', null, '', false, true);
    this.addSeries(raw.m81267,  [cat.IDIOTS, cat.SCHOOL, cat.SUBTEXT], 'https://mangadex.org/title/449be401-bcaa-4af7-9a97-44e273a9c371/inugami-san-to-nekoyama-san', 'https://dynasty-scans.com/series/inugami_san_and_nekoyama_san', null, 'Kuzushiro\'s early works are so different in tone from her modern manga it\'s a bit hard to believe they\'re from the same author.', true, false);
    this.addSeries(raw.m120537, [cat.SCHOOL, cat.IDIOTS, cat.OTHER], 'https://mangadex.org/title/5227abca-3d3d-4456-92ff-e67f6e8eb0ee/school-zone', 'https://dynasty-scans.com/series/school_zone', 'https://sevenseasentertainment.com/series/school-zone-girls/', 'Sadly, this one is in an indefinite hiatus. The author cited a lack of motivation as the main reason, so we don\'t really know if it will ever come back.', false, false, true);
    this.addSeries(raw.m139399, [cat.SCHOOL, cat.IDIOTS, cat.COMFY], 'https://mangadex.org/title/020d602f-c43a-4b9f-a4f8-3ac8ddfd99c3/please-spoil-me-hinamori-san', 'https://dynasty-scans.com/series/please_spoil_me_hinamori_san', 'https://kodansha.us/series/spoil-me-plzzz-hinamori-san/', '', false, false, true);
    this.addSeries(raw.m86674,  [cat.SCHOOL, cat.COMFY, cat.IDIOTS], 'https://mangadex.org/title/af6b26ab-b3dd-4e87-8a7a-7fd988482eb2/swap-swap', 'https://dynasty-scans.com/series/swap_swap', null, 'Bitches be kissing several times per chapter. God I wish that was me.', true, false);
    this.addSeries(raw.m112331, [cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/01b6f4b8-a5fe-4f75-a6a4-7707c45e637a/tsun-hime-sama-to-dame-ouji-chan', 'https://dynasty-scans.com/series/tsun_hime_sama_to_dame_ouji_chan', null, 'Translation is dead for now.', false, false);
    this.addSeries(raw.m155072, [cat.ADULT_LIFE, cat.WORK, cat.DATING, cat.IDIOTS], 'https://mangadex.org/title/8ac5934b-041a-4f0a-8716-a9dfde9dff2e/constable-sakuma-and-constable-hanaoka-started-dating', 'https://dynasty-scans.com/series/constable_sakuma_and_constable_hanaoka_started_dating', null, 'Thank god real cops aren\'t this useless. Some of them at least.', true, false);
    this.addSeries(raw.m161772, [cat.COHAB, cat.DEGEN, cat.IDIOTS], 'https://mangadex.org/title/688eee00-d587-4998-a999-652767aac846/convenient-semi-friend', 'https://dynasty-scans.com/series/convenient_semi_friend', null, '', false, false);
    this.addSeries(raw.m169254, [cat.DATING, cat.OTHER, cat.DEGEN], 'https://mangadex.org/title/561cf196-01a3-4c38-a838-5c6bf84ab24d/shino-to-ren', '', null, 'An alternate version of Semi-Friend, where the girls are actually dating.', false, true);
    this.addSeries(raw.m151909, [cat.SCHOOL, cat.DRAMA, cat.IDOL, cat.SUPERNATURAL], 'https://mangadex.org/title/f110d48a-8461-428e-bbcb-5ae3c0d53d25/mietemasu-yo-aizawa-san', 'https://dynasty-scans.com/series/i_see_you_aizawa_san', null, 'Mystery and ghosts in my yuri? Sign me the fuck up', false, false);
    this.addSeries(raw.m156935, [cat.SCHOOL, cat.IDIOTS, cat.DATING], 'https://mangadex.org/title/84cf55e0-b497-4455-8b40-4c5a880de96b/inkya-gyaru-demo-ikigaritai', 'https://dynasty-scans.com/series/even_the_introverted_gals_wanna_get_out_there', null, 'Kuran is literally me', false, false);
    this.addSeries(raw.m174361, [cat.SCHOOL, cat.IDIOTS, cat.COMFY], 'https://mangadex.org/title/9243a9d0-13dc-452d-b123-c6d5c28e46d2/shy-na-ano-ko-ni-natsukaretai', '', null, '', false, false);
    this.addSeries(raw.m163048, [cat.SCHOOL, cat.IDIOTS, cat.FOOD, cat.COMFY], 'https://mangadex.org/title/615123b3-b813-4d7d-8c72-eb5c4146d76e/sugar-meets-girl', 'https://dynasty-scans.com/series/sugar_meets_girl', null, 'Delinquents with a cute side are the peak of manga.', false, false);
    this.addSeries(raw.m114358, [cat.FANTASY, cat.SCHOOL, cat.COMFY, cat.IDIOTS], 'https://mangadex.org/title/2bdbbe03-bf39-4bac-86fe-b91e964f973a/oogami-san-and-cerberus', '', null, '', false, false);
    this.addSeries(raw.m111168, [cat.ADULT_LIFE, cat.DATING, cat.COMFY], 'https://mangadex.org/title/71a515ab-19b6-4839-9089-e4caac1f0628/handsome-girl-and-sheltered-girl', 'https://dynasty-scans.com/series/handsome_girl_and_sheltered_girl', 'https://sevenseasentertainment.com/series/handsome-girl-and-sheltered-girl-the-complete-manga-collection/', 'Another successful case of straight girl correction.', true, false);
    this.addSeries(raw.m184565, [cat.SCHOOL, cat.IDIOTS, cat.DATING], 'https://mangadex.org/title/30c8bf1c-9063-4a22-a845-e2cead50adea/yume-to-koi-dewa-tsuriawanai', 'https://dynasty-scans.com/series/love_and_dreams_dont_mix', null, 'Dear god she really is stupid.', false, false);
    this.addSeries(raw.m108919, [cat.WORK, cat.ADULT_LIFE, cat.COMFY, cat.DRAMA], 'https://mangadex.org/title/051e6a66-7373-4583-98b6-b746153041e9/doughnuts-under-a-crescent-moon', 'https://dynasty-scans.com/series/crescent_moon_and_doughnuts', 'https://sevenseasentertainment.com/series/doughnuts-under-a-crescent-moon/', '', true, false);
    this.addSeries(raw.m87449,  [cat.ADULT_LIFE, cat.MANGAKA, cat.COHAB, cat.DRAMA], 'https://mangadex.org/title/10db587f-a232-485d-b4a8-68ee0cb15e3c/2dk-g-pen-alarm-clock', 'https://dynasty-scans.com/series/2dk_g_pen_alarm_clock', null, 'There\'s an epilogue one-shot. Search for "2DK, G-pen, Aftertime"', true, false);
    this.addSeries(raw.m98533,  [cat.ADULT_LIFE, cat.WORK], 'https://mangadex.org/title/a9927dc3-b703-4ca0-8941-5f7ccbe61886/now-loading', 'https://dynasty-scans.com/series/now_loading', 'http://www.sevenseasentertainment.com/books/now-loading/', '', true, false);
    this.addSeries(raw.m136253, [cat.COMFY, cat.COHAB, cat.IDOL], 'https://mangadex.org/title/bc998000-171b-4fbe-9dd8-570e56c0845d/monthly-in-the-garden-with-my-landlord', 'https://dynasty-scans.com/series/maitsuki_niwatsuki_ooyatsuki', 'https://yenpress.com/series/monthly-in-the-garden-with-my-landlord', 'Where can I rent a cheap house that comes with a qt landlord gf included?', true, false, true);
    this.addSeries(raw.m149755, [cat.IDIOTS, cat.COHAB, cat.SCHOOL, cat.MANGAKA], 'https://mangadex.org/title/784e5923-15ce-470e-ba78-d2bf56252591/kyou-wa-mada-futsuu-ni-narenai', 'https://dynasty-scans.com/series/still_not_normal_today', null, '', true, false);
    this.addSeries(raw.m110194, [cat.ADULT_LIFE, cat.COMFY], 'https://mangadex.org/title/ee62fd10-303a-4a0e-b722-86cf8f7f1fd9/a-timid-woman-longing-for-her-delivery-girl', 'https://dynasty-scans.com/series/a_timid_woman_longing_for_her_delivery_girl', null, 'Very short and sweet', true, false);
    this.addSeries(raw.m139014, [cat.FOOD, cat.COMFY, cat.IDIOTS, cat.SUBTEXT, cat.COHAB], 'https://mangadex.org/title/1d87d7a5-edae-4f0e-a430-8893bb1255b1/take-responsibility-for-my-stomach', 'https://dynasty-scans.com/series/take_responsibility_for_my_stomach', null, '', true, false);
    this.addSeries(raw.m134668, [cat.ADULT_LIFE, cat.CLUB, cat.COUNTRY, cat.COHAB], 'https://mangadex.org/title/380d6b4d-f7e1-4080-98bd-92e0417a280c/tabimiman', '', null, 'Mangas about traveling around Japan are usually my favorites. You get to see places only a native would know, the hidden spots in the japanese countryside. If you like this manga, please check out "Futari Escape"', true, false);
    this.addSeries(raw.m166692, [cat.ADULT_LIFE, cat.FOOD, cat.WORK], 'https://mangadex.org/title/e6ce1458-203c-4ed1-9fce-015b979bb581/3-pun-matte-mugi-senpai', '', null, 'This reads like the most blatant advertisment Big Food could come up with, but there\'s two girls so I\'ll take it.\nRemember kids: cup noodles are bad for you, don\'t eat them regularly.', false, false);
    this.addSeries(raw.m110530, [cat.ADULT_LIFE, cat.STOCKHOLM, cat.COHAB], 'https://mangadex.org/title/5311ac6f-3651-43a8-bb9c-b40dea7ab72d/ichido-dake-demo-koukai-shitemasu', 'https://dynasty-scans.com/series/even_if_it_was_just_once_i_regret_it', 'https://sevenseasentertainment.com/series/i-cant-believe-i-slept-with-you/', 'Where can I rent an apartment that comes with a qt landlord gf that accepts cuddling as a payment for rent?', true, false);
    this.addSeries(raw.m112621, [cat.SCHOOL, cat.COMFY, cat.STOCKHOLM], 'https://mangadex.org/title/d7576e72-0301-4ed3-9137-722ed768bfda/i-can-t-say-no-to-the-lonely-girl', 'https://dynasty-scans.com/series/cant_defy_the_lonely_girl', 'https://kodansha.us/series/i-cant-say-no-to-the-lonely-girl/', 'God bless yuri mangas where every single member of the cast ends up with a girlfriend', true, false);
    this.addSeries(raw.m103845, [cat.SCHOOL, cat.DRAMA, cat.STOCKHOLM], 'https://mangadex.org/title/a44afe37-24fd-44b8-874e-17e8a24ca3ca/dekisokonai-no-himegimi-tachi', 'https://dynasty-scans.com/series/useless_princesses', 'https://sevenseasentertainment.com/series/failed-princesses/', 'If only all bullies were like this', true, false);
    this.addSeries(raw.m108069, [cat.SCHOOL, cat.COMFY, cat.DEGEN, cat.STOCKHOLM], 'https://mangadex.org/title/af737f18-6d40-4537-b0e6-ad32f2054daa/hino-san-no-baka', 'https://dynasty-scans.com/series/hino_san_no_baka', null, '', true, false);
    this.addSeries(raw.m106067, [cat.COHAB, cat.STOCKHOLM, cat.COMFY], 'https://mangadex.org/title/81c8a94f-147c-4357-8713-4992b4202f70/want-to-sell-me-your-body', '', null, 'I\'d willingly get neck deep into debt with the yakuza if this is what happened after.', true, false);
    this.addSeries(raw.m177399, [cat.COMFY, cat.DRAMA, cat.STOCKHOLM, cat.DEGEN], 'https://mangadex.org/title/a72d5653-7238-40ba-8135-c93910a02bc4/shuu-ni-ichido-classmate-wo-kau-hanashi', 'https://dynasty-scans.com/series/a_story_about_buying_a_classmate_once_a_week_5000_yen_for_an_excuse_to_spend_time_together', null, 'The manga is extremely slow, but the web novel is being translated quickly.', false, false);
    this.addSeries(raw.m180856, [cat.COMFY, cat.SCHOOL, cat.STOCKHOLM], 'https://mangadex.org/title/62d99da1-33e7-45cf-98a2-ca4544fc0344/yuri-no-hajimari-wa-dorei-kara', '', null, 'The world record holder in the "Forget about the premise in the title" any% speedrun category.', false, false);
    this.addSeries(raw.m183605, [cat.COMFY, cat.STOCKHOLM, cat.SCHOOL], 'https://mangadex.org/title/d4e21c02-0549-48aa-ab50-5fec2c76f74c/kao-dake-yoi-classmate-ga-yatara-to-guigui-kuru-yuri-no-hanashi', '', null, 'This is the kind of NTR I can get behind', false, false);
    this.addSeries(raw.m120067, [cat.COMFY, cat.MANGAKA, cat.ADULT_LIFE, cat.COHAB], 'https://mangadex.org/title/7daf8dd0-6cc0-4b8f-8af0-a330af9a9bd5/futari-escape', 'https://dynasty-scans.com/series/futari_escape', 'https://sevenseasentertainment.com/series/futari-escape/', 'Where can I get a small fluffy freeloader wife who takes me on trips around Japan?', true, false);
    this.addSeries(raw.m100187, [cat.COMFY, cat.SCHOOL, cat.CLUB, cat.SUBTEXT], 'https://mangadex.org/title/ba64bce2-ccc0-437c-87fc-aea738521e46/nettaigyo-wa-yuki-ni-kogareru', 'https://dynasty-scans.com/series/nettaigyo_wa_yuki_ni_kogareru', 'https://www.viz.com/a-tropical-fish-yearns-for-snow', 'I will forever be angry at the author for not committing to yuri. These girls are so obviously gay.', true, false);
    this.addSeries(raw.m53239,  [cat.COMFY, cat.SCHOOL, cat.SUBTEXT, cat.AGE_GAP], 'https://mangadex.org/title/e02f32f7-66d6-4eda-818e-a7e4e2c198a1/himawari-san', 'https://dynasty-scans.com/series/miss_sunflower', null, 'Super comfy!', true, false, true);
    this.addSeries(raw.m143147, [cat.ADULT_LIFE, cat.WORK, cat.FOOD], 'https://mangadex.org/title/cd8c0cda-debe-40e4-a0ea-462046a97697/kuchibeta-shokudou', 'https://dynasty-scans.com/series/restaurant_of_the_awkward_people', null, 'This is a pixiv series, so updates are very irregualar.', false, false);
    this.addSeries(raw.m138110, [cat.ADULT_LIFE, cat.WORK, cat.FOOD, cat.DRAMA, cat.SUPERNATURAL], 'https://mangadex.org/title/26074407-7b3b-4fc9-8c4b-03747e9380c0/alcohol-and-ogre-girls', 'https://dynasty-scans.com/series/alcohol_and_ogre_girls', null, 'WE ARE JAPANESE GOBURIN', false, false);
    this.addSeries(raw.m163156, [cat.ADULT_LIFE, cat.WORK, cat.SUBTEXT, cat.COHAB], 'https://mangadex.org/title/ff50351b-0f1d-4255-9479-9744f51c2d2c/the-pension-life-vampire', '', 'https://mangaplus.shueisha.co.jp/titles/100235', 'Kind of hard to read this one since it\'s exclusively on mangaplus. Vampires are cute though.', true, false);
    this.addSeries(raw.m70481,  [cat.SCHOOL, cat.COMFY, cat.IDIOTS], 'https://mangadex.org/title/9ad4148b-8c9e-48d5-89ec-e7b98a660e42/oomuro-ke', 'https://dynasty-scans.com/series/yuru_yuri_oomuro_ke', null, 'A Yuru Yuri spinoff full of idiots being idiots and the eternal mystery of who is Nadeshiko\'s girlfriend', false, false);
    this.addSeries(raw.m164704, [cat.COMFY, cat.FOOD, cat.SUBTEXT, cat.FANTASY], 'https://mangadex.org/title/b675f776-0acb-48ec-b86c-595cf757d8cb/okashi-na-elf-to-joshikousei', '', null, '', true, false);
    this.addSeries(raw.m109895, [cat.COMFY, cat.IDIOTS, cat.MANGAKA, cat.IDIOTS], 'https://mangadex.org/title/db28e73e-acc8-478b-8d47-c5dea79ffed2/maya-san-no-yofukashi', '', null, 'This is literally the discord voicechat experience, in yuri manga form.\nIf you enjoy this, check out "Food court de mata ashita"', true, false);
    this.addSeries(raw.m116981, [cat.COMFY, cat.IDIOTS, cat.FOOD], 'https://mangadex.org/title/38f91d2c-b9f2-4a04-bcb5-5e2103f731d1/see-you-tomorrow-at-the-food-court', '', 'https://yenpress.com/titles/9781975342982-see-you-tomorrow-at-the-food-court', 'If you like this, check out "Maya-san no Yofukashi"', false, false);
    this.addSeries(raw.m149760, [cat.COMFY, cat.COHAB, cat.SUPERNATURAL, cat.SCIFI, cat.SUBTEXT], 'https://mangadex.org/title/ca1b75fe-66ed-4e0c-9893-89fffd3f4bef/bunnie-s-quest', '', null, 'bnuuy', true, false);
    this.addSeries(raw.m109651, [cat.DRAMA, cat.IDOL, cat.STOCKHOLM], 'https://mangadex.org/title/7875975e-b88e-4629-9ea2-feb495b73793/your-true-color', 'https://dynasty-scans.com/series/your_true_color', null, 'Probably the best example of drama being handled like human beings', true, false);
    this.addSeries(raw.m133500, [cat.COHAB, cat.IDOL, cat.STOCKHOLM, cat.SUBTEXT], 'https://mangadex.org/title/b6784e2b-f31d-4f29-8dc7-7e2e414bbae1/oshi-ga-imouto-ni-narimashite', 'https://dynasty-scans.com/series/my_favorite_idol_became_my_little_sister', null, 'In hiatus, there is no information why or how long.', false, false);
    this.addSeries(raw.m140060, [cat.COMFY, cat.MANGAKA, cat.IDIOTS, cat.IDOL], 'https://mangadex.org/title/65361a37-9f9a-4f95-92fa-d6810f0fab17/my-best-friend-who-i-love-fell-completely-in-love-with-my-vtuber-self', 'https://dynasty-scans.com/series/my_best_friend_who_i_love_fell_completely_in_love_with_my_vtuber_self', null, 'A pixiv series, expect irregular updates.', false, false);
    this.addSeries(raw.m117639, [cat.WORK, cat.IDOL, cat.SCHOOL, cat.STOCKHOLM, cat.SUBTEXT], 'https://mangadex.org/title/96335764-0c1f-4686-9193-b1c6bb537a71/seiyuu-radio-no-ura-omote', 'https://dynasty-scans.com/series/the_two_sides_of_seiyuu_radio', 'https://global.bookwalker.jp/series/498870/', '', false, false);
    this.addSeries(raw.m107987, [cat.SCHOOL, cat.DRAMA, cat.MUSIC], 'https://mangadex.org/title/0e8fac17-979e-4e37-8f45-2c334b25d6dd/whisper-me-a-love-song', 'https://dynasty-scans.com/series/whispering_you_a_love_song', 'https://kodansha.us/series/whisper-me-a-love-song/', 'Afflicted by the common yuri curse of "side couple is far better than the main couple"', false, false);
    this.addSeries(raw.m178230, [cat.SCHOOL, cat.MUSIC, cat.COMFY], 'https://mangadex.org/title/7e905fc7-d534-479e-9880-f89effbf30e2/kimi-ga-hoeru-tame-no-uta-wo', '', null, 'Officially abreviated as Kimi Hoe, which is extremely unfortunate.', false, false);
    this.addSeries(raw.m156348, [cat.SCHOOL, cat.MUSIC, cat.SUBTEXT], 'https://mangadex.org/title/d1cf91fe-67cb-4ca0-bbba-8b35d896c649/rock-is-a-lady-s-modesty', 'https://dynasty-scans.com/series/rock_is_a_ladys_modesty', null, 'The gap moe of high class ladies violently jamming metal sure is something.', false, false);
    this.addSeries(raw.m161653, [cat.SCHOOL, cat.CLUB, cat.MUSIC, cat.DRAMA], 'https://mangadex.org/title/35afa4a9-0128-4e15-9801-c34d9e1b9f9a/kimi-no-tame-no-curtain-call', 'https://dynasty-scans.com/series/a_curtain_call_for_you', null, '', false, false);
    this.addSeries(raw.m64525,  [cat.COMFY, cat.WORK, cat.MUSIC], 'https://mangadex.org/title/31e57876-6edd-4e5e-8655-1f43b0c275dc/cirque-arachne', 'https://dynasty-scans.com/series/cirque_arachne', null, '', true, true);
    this.addSeries(raw.m130799, [cat.SCHOOL, cat.MUSIC, cat.CLUB, cat.SUBTEXT], 'https://mangadex.org/title/9b8e6611-73cd-4a50-883b-79ba99b7e4b3/finder-goshi-no-ano-ko', 'https://dynasty-scans.com/series/the_girl_through_the_viewfinder', null, '', true, false);
    this.addSeries(raw.m102813, [cat.MANGAKA, cat.COMFY, cat.SCHOOL], 'https://mangadex.org/title/84b201c9-5ce3-4016-964a-63f34cae127a/we-can-t-draw-love', 'https://dynasty-scans.com/series/we_cant_draw_love', null, '', true, false);
    this.addSeries(raw.m106232, [cat.MANGAKA, cat.ADULT_LIFE, cat.WORK, cat.DRAMA], 'https://mangadex.org/title/98c34d01-2f69-41f1-bd54-4e0c7d89ce18/still-sick', 'https://dynasty-scans.com/series/still_sick', 'https://comics.inkr.com/title/31-still-sick?utm_source=mgd', 'Has an epilogue doujin, and the author has been drawing weekly short stories about these two in her fanbox ever since the manga ended.', true, false);
    this.addSeries(raw.m122344, [cat.FANTASY, cat.DRAMA, cat.ACTION], 'https://mangadex.org/title/46596dea-95de-40e8-b2b8-4e63aa6acd1a/the-magical-revolution-of-the-reincarnated-princess-and-the-genius-young-lady', 'https://dynasty-scans.com/series/the_magical_revolution_of_the_reincarnated_princess_and_the_genius_young_lady', 'https://yenpress.com/titles/9781975338688-the-magical-revolution-of-the-reincarnated-princess-and-the-genius-young-lady-vol-1-manga', 'The manga is kinda dead, so read the LN', false, false);
    this.addSeries(raw.m118695, [cat.FANTASY, cat.DRAMA, cat.SCHOOL], 'https://mangadex.org/title/22d6d048-9f9f-4c3a-95c2-3b145f110e20/i-m-in-love-with-the-villainess', 'https://dynasty-scans.com/series/i_favor_the_villainess', 'https://sevenseasentertainment.com/series/im-in-love-with-the-villainess-manga/', '', false, false);
    this.addSeries(raw.m103608, [cat.FANTASY, cat.COMFY, cat.DRAMA], 'https://mangadex.org/title/ece511da-3461-421a-8275-7af48a642aa5/beauty-and-the-beast-girl', 'https://dynasty-scans.com/series/beauty_and_the_beast_girl', 'https://sevenseasentertainment.com/series/beauty-and-the-beast-girl/', 'There are several post-story doujins that expand on the ending.', true, false);
    this.addSeries(raw.m108440, [cat.FANTASY, cat.DEGEN, cat.DRAMA], 'https://mangadex.org/title/c431712b-231c-4d25-85fa-7ca6bf460f15/vampeerz', 'https://dynasty-scans.com/series/vampeerz', 'https://www.denpa.pub/manga/vampeerz-volume-1', 'God I love vampires so much', true, true);
    this.addSeries(raw.m106997, [cat.FANTASY, cat.DRAMA, cat.ACTION], 'https://mangadex.org/title/25e145f0-a74f-48b6-9d89-b715e28f6417/-omae-gotoki-ga-maou-ni-kateru-to-omou-na-to-yuusha-party-wo-tsuihou-sareta-node-outo-de-kimama-ni', '', 'https://sevenseasentertainment.com/series/roll-over-and-die-i-will-fight-for-an-ordinary-life-with-my-love-and-cursed-sword-manga/', 'Do yourself a favor and read the light novel instead, the manga isn\'t terrible but the storytelling was completely butchered.\nThe light novel is amazing.', false, false);
    this.addSeries(raw.m119857, [cat.FANTASY, cat.DRAMA, cat.STOCKHOLM, cat.ACTION], 'https://mangadex.org/title/bed89b51-15d3-44a5-b27a-a13a2f9a6dd8/shokei-shoujo-no-ikiru-michi', 'https://dynasty-scans.com/series/the_executioner_and_her_way_of_life', 'https://yenpress.com/series/the-executioner-and-her-way-of-life-manga', 'Fan translations are dead, and the official translations are ahead, so read that if you can.', false, false);
    this.addSeries(raw.m135169, [cat.FANTASY, cat.SCHOOL], 'https://mangadex.org/title/014cc30b-d045-4f82-8c3e-e54d0fd8c8c0/blue-skin-big-tits-and-a-fucking-loner', 'https://dynasty-scans.com/series/blue_skin_big_tits_and_a_fucking_loner', null, 'In probably permanent hiatus, sadly. Leaving it here just in case, but I can\'t recommend reading it right now.', false, false);
    this.addSeries(raw.m114860, [cat.SCHOOL, cat.SUPERNATURAL, cat.COMFY], 'https://mangadex.org/title/5489ad21-86c7-4be5-be4c-428143b13536/kamitsuki-gakuen', 'https://dynasty-scans.com/series/kamitsuki_academy', null, '', false, false);
    this.addSeries(raw.m99544,  [cat.FANTASY, cat.COMFY, cat.GENDERBEND, cat.ACTION], 'https://mangadex.org/title/5eb1e122-f4bc-4b69-8ab1-906cdfb245a0/tensei-kyuuketsuki-san-wa-ohirune-ga-shitai', '', null, '', false, false);
    this.addSeries(raw.m104988, [cat.FANTASY, cat.OTHER], 'https://mangadex.org/title/5f89a11c-6fe5-43be-85dd-f13c771f0c0b/scarlet', 'https://dynasty-scans.com/series/scarlet', 'https://sevenseasentertainment.com/series/scarlet/', 'Official TLs are complete, fan TLs will probably never bother to finish.', true, true);
    this.addSeries(raw.m175145, [cat.FANTASY, cat.STOCKHOLM, cat.COHAB], 'https://mangadex.org/title/48de4f49-d7f9-4b0c-99f4-0929c2a9910b/gakeppuchi-reijou-wa-kurokishi-sama-o-horesasetai', 'https://dynasty-scans.com/series/i_want_to_make_black_knight_fall_in_love_with_me', null, 'Big woman...', false, false);
    this.addSeries(raw.m148499, [cat.FANTASY, cat.DRAMA, cat.SCIFI, cat.ACTION], 'https://mangadex.org/title/21b848be-1bfe-4f97-b92c-62d319d8a093/onee-sama-to-kyojin-ojou-sama-ga-isekai-tensei', 'https://dynasty-scans.com/series/my_sister_and_giant_a_young_lady_is_reborn_in_another_world', 'https://yenpress.com/titles/9781975378660-sister-and-giant-a-young-lady-is-reborn-in-another-world-vol-1', 'This escalates so quickly I don\'t even know how to keep up with it.', false, false);
    this.addSeries(raw.m181342, [cat.FANTASY, cat.IDIOTS, cat.ACTION], 'https://mangadex.org/title/bf22a4ae-1641-450a-9764-390ed70ff5dd/maides-maid-attacks-in-destiny', '', null, '', false, false);
    this.addSeries(raw.m105808, [cat.SCIFI, cat.STOCKHOLM, cat.COMFY], 'https://mangadex.org/title/098dfe5d-9b82-4d77-9145-a7a4e7b514f3/hero-san-to-moto-onna-kanbu-san', 'https://dynasty-scans.com/series/hero_san_and_former_general_san', 'https://sevenseasentertainment.com/series/superwomen-in-love-honey-trap-and-rapid-rabbit/', 'Proof that the power rangers could be so much better', true, false);
    this.addSeries(raw.m154008, [cat.FANTASY, cat.WORK], 'https://mangadex.org/title/5ec0922a-4869-4e6b-a154-2307945cc406/genkai-ol-san-wa-akuyaku-reijou-sama-ni-tsukaetai', 'https://dynasty-scans.com/series/the_fed_up_office_lady_wants_to_serve_the_villainess', null, '', false, false);
    this.addSeries(raw.m165204, [cat.FANTASY, cat.OTHER], 'https://mangadex.org/title/49496e76-08b8-4d47-aced-a13f2f8d90a4/kiraware-majo-reijou-to-dansou-ouji-no-kon-yaku', '', null, '', false, false);
    this.addSeries(raw.m167017, [cat.DRAMA, cat.ADULT_LIFE, cat.WORK, cat.SCIFI], 'https://mangadex.org/title/b942b354-a7f3-4906-92e5-394949451058/twinstar-cyclone-runaway', 'https://dynasty-scans.com/series/twinstar_cyclone_runaway', null, 'Very strange worldbuidling, but an interesting concept (and there are gay girls)', false, false);
    this.addSeries(raw.m136921, [cat.SUPERNATURAL, cat.DEGEN, cat.COHAB], 'https://mangadex.org/title/f0f4bb91-563d-49cd-b6b4-22de131638dd/okiku-san-wa-ichatsukitai', 'https://dynasty-scans.com/series/okiku_san_wa_ichatsukitai', null, 'Where can I get a horny ghost wife', false, true);
    this.addSeries(raw.m171729, [cat.FANTASY, cat.DRAMA, cat.WORK], 'https://mangadex.org/title/cb1b1da5-9436-49f5-8a6b-a1689fb86d91/love-bullet', 'https://dynasty-scans.com/series/love_bullet', null, '', false, false);
    this.addSeries(raw.m175451, [cat.FANTASY, cat.SCHOOL, cat.OTHER], 'https://mangadex.org/title/8a889112-f43a-4960-8fb8-68bec0bd85cf/gyaru-maid-to-akuyaku-reijou-ojou-sama-no-happy-end-shika-katan', 'https://dynasty-scans.com/series/gal_maid_villainess_only_miladys_happy_end_will_win', null, '', false, false);
    this.addSeries(raw.m178107, [cat.FANTASY, cat.DRAMA, cat.COHAB], 'https://mangadex.org/title/be314f77-95d8-4722-8369-7ae6cb1a536b/muryoku-seijo-to-munou-oujo-maryoku-zero-de-shoukansareta-seijo-no-isekai-kyuukokuki', 'https://dynasty-scans.com/series/the_helpless_saint_and_the_powerless_princess', null, 'The witch is best girl, no contest.', false, false);
    this.addSeries(raw.m151254, [cat.SCIFI, cat.DRAMA, cat.COHAB], 'https://mangadex.org/title/21699dbf-c427-41d8-bbcf-c7cbd1755615/erio-and-the-electric-doll', '', null, 'Quite an interesting postapocalyptic concept', false, false);
    this.addSeries(raw.m183115, [cat.FANTASY, cat.STOCKHOLM, cat.ACTION], 'https://mangadex.org/title/9957c35e-06e1-4b4b-875e-6a3a01e29582/eiyuu-ni-akogareta-shoujo-wa-kyuuketsuki-ni-ochitemo-eiyuu-o-mezasu', '', null, 'GOD I LOVE LESBIAN VAMPIRES SO MUCH IT\'S UNREAL', false, false);
    this.addSeries(raw.m182947, [cat.IDIOTS, cat.SUPERNATURAL, cat.STOCKHOLM], 'https://mangadex.org/title/6f85c1da-c739-4a62-a3eb-53e072ec582e/wicked-spot', 'https://dynasty-scans.com/series/wicked_spot', null, 'These witches aren\'t the cute big hat type, and it makes me sad.', false, false);
    this.addSeries(raw.m134480, [cat.FANTASY, cat.COHAB, cat.STOCKHOLM, cat.TOXIC], 'https://mangadex.org/title/a1123ba9-142e-46be-8612-2caf46c24aa4/you-are-my-angela', 'https://dynasty-scans.com/series/you_are_my_angela', null, 'I want a fluffy angel gf too... it\'s unfair bros...', true, false);
    this.addSeries(raw.m181072, [cat.FANTASY, cat.ACTION], 'https://mangadex.org/title/56504d3e-3ceb-44e5-811c-0293f1919042/suterare-elf-san-wa-sekai-de-ichiban-tsuyokute-kawaii', '', null, 'Is getting a fluffy foxgirl loving wife as easy as asking god for one to your specifications?', false, false);
    this.addSeries(raw.m104641, [cat.AGE_GAP, cat.COMFY], 'https://mangadex.org/title/1e7e58d3-7cea-4aff-918d-62faecd8fe7d/itoshi-koishi', 'https://dynasty-scans.com/series/itoshi_koishi', null, '', true, false);
    this.addSeries(raw.m106785, [cat.AGE_GAP, cat.MANGAKA], 'https://mangadex.org/title/4bc3e522-0301-467e-827c-eb2984ec8a79/kami-eshi-jk-to-ol-fujoshi', 'https://dynasty-scans.com/series/kami_eshi_jk_to_ol_fujoshi', 'https://comics.inkr.com/title/2512-drawn-together', 'Fujos are the absolute worst', true, false, true);
    this.addSeries(raw.m175415, [cat.AGE_GAP, cat.SCHOOL, cat.COMFY], 'https://mangadex.org/title/a6246828-0577-4aaf-9478-371b52e6634d/sabori-nara-hokenshitsu-de-douzo', 'https://dynasty-scans.com/series/wanna_skip_school_in_the_infirmary', null, '', false, false);
    this.addSeries(raw.m146682, [cat.STOCKHOLM, cat.COHAB, cat.TOXIC, cat.AGE_GAP], 'https://mangadex.org/title/e3fa25bc-23eb-46c3-af17-36ec9200456e/keiyaku-shimai', 'https://dynasty-scans.com/series/contract_sisters', null, '', false, false);
    this.addSeries(raw.m178111, [cat.HISTORY, cat.DRAMA, cat.AGE_GAP], 'https://mangadex.org/title/2c09cfd3-060e-4c02-8055-f7c2d51a28de/kanaria-wa-kiraboshi-no-yume-wo-miru', 'https://dynasty-scans.com/series/canaries_dream_of_shining_stars', null, 'There\'s something special about the aesthetics of the Taisho period I can\'t quite describe. And when it comes to yuri, the historical context for lesbian relationships in that era of japan is as interesting as it is fucked up, so google it if you want a small lesson in history and how not to handle your daughter if you want her not to kill herself.', false, false);
    this.addSeries(raw.m121249, [cat.STOCKHOLM, cat.SUBTEXT, cat.DEGEN, cat.SCHOOL], 'https://mangadex.org/title/c16a96d3-75aa-4617-a535-4f0ffe1e95c5/yuugai-shitei-doukyuusei', 'https://dynasty-scans.com/series/yuugai_shitei_doukyuusei', null, '', true, true);
    this.addSeries(raw.m122838, [cat.DEGEN, cat.SCHOOL, cat.SUPERNATURAL], 'https://mangadex.org/title/b33f9172-e4a0-4abf-90a2-16d7bbcd33e9/watashi-wa-succubus-to-kiss-o-shita', 'https://dynasty-scans.com/series/i_kissed_a_succubus', null, 'Content warning: Thristy lolis', true, false);
    this.addSeries(raw.m120112, [cat.COHAB, cat.ADULT_LIFE, cat.DEGEN], 'https://mangadex.org/title/af66b380-623e-4dfc-9fbb-8ca093b9d5a9/asumi-chan-is-interested-in-lesbian-brothels', 'https://dynasty-scans.com/series/asumi_chan_is_interested_in_lesbian_brothels', 'https://sevenseasentertainment.com/series/asumi-chan-is-interested-in-lesbian-brothels/', 'If this isn\'t the peak of yuri then I do not know what is.', false, true);
    this.addSeries(raw.m103310, [cat.DEGEN, cat.SCIFI, cat.SCHOOL], 'https://mangadex.org/title/99293af2-7810-4e30-9a13-d12306b05b91/mimi-mix', 'https://dynasty-scans.com/series/mimi_mix', null, '', true, false);
    this.addSeries(raw.m136739, [cat.DEGEN, cat.ADULT_LIFE, cat.IDIOTS], 'https://mangadex.org/title/34d4ed85-1fe3-4f4f-914d-4bde5217a0f5/a-lonely-female-ceo-falls-for-a-lesbian-prostitute-in-seconds', 'https://dynasty-scans.com/series/a_story_about_a_very_lonely_female_ceo_who_falls_for_a_lesbian_prostitute_in_seconds', null, '', true, false);
    this.addSeries(raw.m134443, [cat.DEGEN, cat.SCIFI, cat.AGE_GAP], 'https://mangadex.org/title/d0a48877-176b-4f60-8f4d-2ae47fbb2e9c/toshishita-no-senpai', 'https://dynasty-scans.com/series/my_younger_senpai', null, '', true, true, true);
    this.addSeries(raw.m152703, [cat.DEGEN, cat.ADULT_LIFE, cat.CLUB, cat.IDIOTS], 'https://mangadex.org/title/73962987-7e02-4126-8405-4d75c2188d7f/tada-de-wa-dakaremasen', 'https://dynasty-scans.com/series/i_wont_sleep_with_you_for_free', null, 'The japanese penal code defines prostitution as the exchange of sex for money between unacquainted individuals, and since everyone makes sure to get acquainted with our MC before doing the deed, we can safely determine no illegal activity is taking place in this manga. Nobody is pimping anyone out either since the supposed pimp isn\'t taking a cut of the payments. See? Only legal, harmless fun in my christian manga.', false, true);
    this.addSeries(raw.m109056, [cat.DEGEN, cat.DRAMA, cat.DEPRESSO, cat.AGE_GAP, cat.TOXIC], 'https://mangadex.org/title/d461ebbe-5043-42bb-8c99-acdea0715be7/warikitta-kankei-desukara', 'https://dynasty-scans.com/series/its_a_detached_relationship', null, '', true, true);
    this.addSeries(raw.m100209, [cat.DEGEN, cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/af906856-ef0c-4c7a-aa61-27edebe9e834/sekai-de-ichiban-oppai-ga-suki', 'https://dynasty-scans.com/series/sekai_de_ichiban_oppai_ga_suki', 'https://yenpress.com/titles/9781975310035-breasts-are-my-favorite-things-in-the-world-vol-1', '', true, true);
    this.addSeries(raw.m109017, [cat.FANTASY, cat.DEGEN, cat.STOCKHOLM, cat.IDIOTS, cat.ACTION], 'https://mangadex.org/title/feff4eaf-01df-4a05-83f4-68bb5cdf4fad/mahou-shoujo-ni-akogarete', 'https://dynasty-scans.com/series/looking_up_to_magical_girls', 'https://j-novel.club/series/gushing-over-magical-girls', 'No comment.', false, true, true);
    this.addSeries(raw.m98892,  [cat.SCHOOL, cat.DEGEN, cat.IDIOTS], 'https://mangadex.org/title/37e6a45f-3eda-4f27-93d0-84ec8e8c34a7/shouraiteki-ni-shinde-kure', 'https://dynasty-scans.com/series/shouraiteki_ni_shindekure', null, '', false, false);
    this.addSeries(raw.m85281,  [cat.ACTION, cat.DEGEN, cat.DRAMA, cat.SCIFI], 'https://mangadex.org/title/cd355881-6f89-4917-9a57-fc9f75377293/murcielago', 'https://dynasty-scans.com/series/murcielago', 'https://yenpress.com/series/murcielago', 'This is just an amazing action packed gore mystery scifi crime mafia supernatural series where the protagonist just so happen to be a lesbian. Official TLs are up to volume 24, so read it from there if you like what you see.', false, true);
    this.addSeries(raw.m110396, [cat.TOXIC, cat.DEGEN, cat.DEPRESSO, cat.STOCKHOLM, cat.PSYCHO], 'https://mangadex.org/title/25632c2e-90d3-4a9f-9cfd-3132d52ca5ee/kitanai-kimi-ga-ichiban-kawaii', 'https://dynasty-scans.com/series/kitanai_kimi_ga_ichiban_kawaii', null, 'This is the most sick and twisted yuri I\'ve ever read and yet I can\'t take my eyes off it. Give it a shot, at your own risk.', true, true, true);
    this.addSeries(raw.m141152, [cat.IDIOTS, cat.SCHOOL, cat.DEGEN, cat.DRAMA], 'https://mangadex.org/title/0e6c8a1b-df05-43b0-8f15-14ef8b41867f/kaguhara-san-s-fetish-notebook', 'https://dynasty-scans.com/series/kaguharas_fetish_notebook', null, 'Read at your own risk, it\'s more funny than anything, but the fetishes in question aren\'t for everybody.', false, true);
    this.addSeries(raw.m165205, [cat.DEGEN, cat.DRAMA, cat.STOCKHOLM, cat.PSYCHO, cat.IDOL], 'https://mangadex.org/title/9f78bb87-b2d9-4e2c-b9fe-7e07b481d8ca/utsushicha-dame-na-kao', 'https://dynasty-scans.com/series/a_face_you_shouldnt_show', null, '', false, true);
    this.addSeries(raw.m136508, [cat.DEGEN, cat.SCIFI, cat.IDIOTS], 'https://mangadex.org/title/143a116f-8e1d-4f9b-9794-9fb8fc8f56dc/android-wa-keiken-ninzuu-ni-hairimasu-ka', 'https://dynasty-scans.com/series/does_it_count_if_your_first_time_is_with_an_android', 'https://sevenseasentertainment.com/series/does-it-count-if-you-lose-your-virginity-to-an-android/', '', false, true);
    this.addSeries(raw.m170101, [cat.DEGEN, cat.PSYCHO, cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/264cb3ba-2d14-45c6-a15a-f6e46c54fe6a/kiyota-san-wa-yogosaretai', '', null, '', false, true);
    this.addSeries(raw.m181042, [cat.DRAMA, cat.DEGEN, cat.CLUB], 'https://mangadex.org/title/6079d103-113b-45b4-a76b-8750842b0770/bokura-no-ai-wa-kimochi-warui', 'https://dynasty-scans.com/series/our_love_is_disgusting', null, 'Remember Usui Shio? The author of the super comfy series? Someone decided that she should write about degenerates with insane fetishes.', false, true);
    this.addSeries(raw.m132041, [cat.SCHOOL, cat.STOCKHOLM, cat.DEGEN], 'https://mangadex.org/title/86d4b7bc-c4eb-4bb6-810e-9e884a41321a/yuri-love-slave-futari-dake-no-houkago', '', null, '', true, true);
    this.addSeries(raw.m130551, [cat.DEGEN, cat.AGE_GAP, cat.DRAMA], 'https://mangadex.org/title/093a607f-5e60-454c-ad23-16797e6bec4b/hitozuma-to-jk', '', null, 'Don\'t fuck your best friend\'s mom, bros.', false, true, true);
    this.addSeries(raw.m97708,  [cat.COHAB, cat.DEPRESSO, cat.AGE_GAP, cat.SUBTEXT], 'https://mangadex.org/title/6204ff54-c3d5-4645-b21f-f83f6fa303d0/ani-no-yome-to-kurashite-imasu', 'https://dynasty-scans.com/series/living_with_my_brothers_wife', 'https://global.manga-up.com/manga/33', 'The official TLs are ahead, and probably will be forever.', false, false);
    this.addSeries(raw.m123777, [cat.DEPRESSO, cat.SCHOOL, cat.SUPERNATURAL, cat.DRAMA], 'https://mangadex.org/title/48863213-086b-4dfb-8103-8e279b8e5f5d/this-monster-wants-to-eat-me', 'https://dynasty-scans.com/series/a_monster_wants_to_eat_me', 'https://yenpress.com/series/this-monster-wants-to-eat-me', '', false, false);
    this.addSeries(raw.m150492, [cat.DEPRESSO, cat.PSYCHO, cat.SUPERNATURAL, cat.DRAMA, cat.WTF], 'https://mangadex.org/title/2b97ff16-1fe0-4382-91aa-956112799e9b/wasureenu-majo-no-monogatari', 'https://dynasty-scans.com/series/the_story_of_unforgettable_witch', null, 'This one is just insanely good, and hard to describe. Give it a read, you won\'t regret it.', false, false);
    this.addSeries(raw.m87256,  [cat.DEPRESSO, cat.PSYCHO], 'https://mangadex.org/title/f61c07a8-f963-49ec-9760-51c8dfeba0ed/dark-forest-white-road', 'https://dynasty-scans.com/series/dark_forest_white_road', null, '', true, false);
    this.addSeries(raw.m161477, [cat.DRAMA, cat.PSYCHO, cat.SCHOOL, cat.STOCKHOLM, cat.DEPRESSO, cat.TOXIC], 'https://mangadex.org/title/eac0159f-2768-49d7-8891-4202f3e9fb8c/zenbu-kowashite-jigoku-de-aishite', '', null, 'Toxic as hell, but not in the way you think at first.', false, false);
    this.addSeries(raw.m135802, [cat.DRAMA, cat.STOCKHOLM, cat.DATING, cat.SCHOOL], 'https://mangadex.org/title/215e3ced-247e-4f34-8e1a-27b60ffef8ac/my-girlfriend-s-not-here-today', 'https://dynasty-scans.com/series/my_girlfriends_not_here_today', 'https://sevenseasentertainment.com/series/my-girlfriends-not-here-today/', 'Probably the only cheating story where you genuinely can\'t decide which one of the three girls is the biggest piece of shit.', false, true);
    this.addSeries(raw.m110670, [cat.DRAMA, cat.TOXIC, cat.ONESHOT], 'https://mangadex.org/title/b5d59d37-2836-4d5c-a094-223ee83c4774/watashi-wo-hitorijime-ni-shite', 'https://dynasty-scans.com/anthologies/watashi_wo_hitorijime_ni_shite', null, '', true, false);
    this.addSeries(raw.m157513, [cat.DRAMA, cat.TOXIC, cat.STOCKHOLM, cat.IDOL, cat.IDIOTS], 'https://mangadex.org/title/c7cc0e57-aa04-42d7-a726-822f66718a35/herami-shimai-wa-docchi-mo-yanderu', '', null, '', false, false);
    this.addSeries(raw.m120054, [cat.PSYCHO, cat.DRAMA, cat.TOXIC, cat.STOCKHOLM, cat.IDOL], 'https://mangadex.org/title/8c975da1-1841-47a8-a89a-33994079137a/kono-ai-wo-owarasete-kurenai-ka', '', null, '', false, false);
    this.addSeries(raw.m155696, [cat.TOXIC, cat.IDOL, cat.DRAMA], 'https://mangadex.org/title/de348b34-9397-42db-9fa4-ac542e7ab9b4/aishita-bundake-aishite-hoshii', 'https://dynasty-scans.com/series/love_me_like_i_do', null, '', false, false);
    this.addSeries(raw.m170798, [cat.TOXIC, cat.DRAMA, cat.PSYCHO, cat.ONESHOT], 'https://mangadex.org/title/fb3fee79-d1fc-4f78-9b99-9685c19b1b86/kedamono-no-uta', '', null, '', true, false);
    this.addSeries(raw.m107614, [cat.TOXIC, cat.DRAMA, cat.PSYCHO, cat.ONESHOT, cat.HORROR], 'https://mangadex.org/title/14c52e83-8922-4910-8131-5fd39739f304/you-are-still-in-a-bird-cage', '', null, 'Waiter! Waiter! More [insane girls] please!', true, false);
    this.addSeries(raw.m106181, [cat.TOXIC, cat.DRAMA, cat.IDIOTS, cat.SCHOOL], 'https://mangadex.org/title/8cc8a484-e0f0-4294-8db3-c02107a09e80/sazi-chan-no-yami-nikki', '', null, 'Mostly a comedy 4koma, except when shit actually hits the fan.', true, false);
    this.addSeries(raw.m136109, [cat.SCHOOL, cat.DRAMA, cat.CLUB, cat.COMFY], 'https://mangadex.org/title/c8a0426d-539b-4f6a-9537-fbccf4962529/the-moon-on-a-rainy-night', 'https://dynasty-scans.com/series/the_moon_on_a_rainy_night', 'https://kodansha.us/series/the-moon-on-a-rainy-night', 'This is one of my all time favorites. There are missing chapters on Mangadex that can only be found in the official release. The official TL is very high quality (surprisingly enough), so if you can, read that.', false, false);
    this.addSeries(raw.m117620, [cat.DEPRESSO, cat.CLUB, cat.DRAMA, cat.DATING], 'https://mangadex.org/title/6ecc62e4-25ad-4102-b0d8-580a8023d2fb/the-summer-you-were-there', 'https://dynasty-scans.com/series/kimi_to_tsuzuru_utakata', 'https://sevenseasentertainment.com/series/the-summer-you-were-there/', 'A beautiful, slow burning tragedy about redemption, acceptance and leaving the past behind.', true, false);
    this.addSeries(raw.m166947, [cat.DRAMA, cat.SUPERNATURAL, cat.DEPRESSO, cat.ADULT_LIFE, cat.COHAB, cat.AGE_GAP], 'https://mangadex.org/title/3f812d80-7eb6-46ea-98e4-77ca4f097727/sankakkei-no-kowashi-kata', 'https://dynasty-scans.com/series/how_to_break_a_triangle', null, '', false, false);
    this.addSeries(raw.m158108, [cat.DRAMA, cat.ADULT_LIFE, cat.WORK], 'https://mangadex.org/title/36bd3ec2-b2a0-4131-8412-82e3e0588134/pinky-candy-kiss', 'https://dynasty-scans.com/series/pinky_candy_kiss', 'https://www.amazon.com/Pink-Candy-Kiss-Vol-1-ebook/dp/B0D61KYKY5', '', false, false);
    this.addSeries(raw.m159925, [cat.DRAMA, cat.MUSIC], 'https://mangadex.org/title/6fc1c54b-7285-4a51-8c8b-22838f04eb26/kono-koi-wo-hoshi-ni-wa-negawanai', 'https://dynasty-scans.com/series/there_is_no_love_wishing_upon_a_star', null, '', false, false);
    this.addSeries(raw.m164970, [cat.DRAMA, cat.HISTORY, cat.ADULT_LIFE, cat.COMFY, cat.DATING, cat.STOCKHOLM], 'https://mangadex.org/title/553e4088-d5e3-44e7-ad71-0c3436409376/itsuwari-no-marigold', 'https://dynasty-scans.com/series/false_marigold', null, '', true, false);
    this.addSeries(raw.m111970, [cat.DRAMA, cat.HISTORY, cat.PSYCHO, cat.COMFY], 'https://mangadex.org/title/3e7cd288-b982-45c5-bcae-f9fa7e902c4d/goodbye-my-rose-garden', '', 'https://sevenseasentertainment.com/series/goodbye-my-rose-garden/', 'Fully translated by fans, but the official release has a far better image quality. Read that one, if you can.', true, false);
    this.addSeries(raw.m172436, [cat.DRAMA, cat.ADULT_LIFE], 'https://mangadex.org/title/2917010b-61f5-4dd0-b861-a10362d8ab9b/my-blue-garnet', 'https://dynasty-scans.com/series/my_blue_garnet', null, '', false, false);
    this.addSeries(raw.m143535, [cat.DRAMA, cat.ADULT_LIFE, cat.WORK], 'https://mangadex.org/title/13ecfc67-9481-4045-974a-292c81288077/brides-of-iberis', 'https://dynasty-scans.com/series/brides_of_iberis', null, '', true, false);
    this.addSeries(raw.m178728, [cat.COMFY, cat.WORK, cat.SCHOOL, cat.FOOD, cat.DRAMA], 'https://mangadex.org/title/cde5424f-02e5-4c90-a433-b92d831d9856/kimi-meku-yoru-ni-kogarete', '', null, 'I don\'t have the words to describe what the atmosphere in this manga transmits. It\'s relaxing, comforting, definitely one of the comfiest mangas I\'ve read.', false, false);
    this.addSeries(raw.m114970, [cat.DRAMA, cat.COMFY, cat.SCHOOL], 'https://mangadex.org/title/e30c2d88-3c91-4166-91be-9ee38bfe94fe/goukaku-no-tame-no-yasashii-sankaku-kankei-nyuumon', 'https://dynasty-scans.com/series/an_easy_introduction_to_love_triangles_to_pass_the_exam', null, 'Maybe poly is good too...', true, false);
    this.addSeries(raw.m116918, [cat.IDIOTS, cat.DATING, cat.SUPERNATURAL], 'https://mangadex.org/title/f98660a1-d2e2-461c-960d-7bd13df8b76d/kanojo-to-himitsu-to-koimoyou', '', null, '', true, false);
    this.addSeries(raw.m127894, [cat.PSYCHO, cat.SCHOOL, cat.DRAMA], 'https://mangadex.org/title/9faba8cf-60df-4894-9370-22571592c8d3/ano-koro-no-aoi-hoshi', 'https://dynasty-scans.com/series/the_blue_star_on_that_day_ano_koro_no_aoi_hoshi', null, 'Self-published, so expect irregular updates and more irregular translations.', false, false);
    this.addSeries(raw.m120968, [cat.SUPERNATURAL, cat.SCHOOL, cat.COMFY], 'https://mangadex.org/title/df715a94-a013-4d5d-a7d5-f7f2f778d09d/moshi-koi-ga-mieta-nara', 'https://dynasty-scans.com/series/if_you_could_see_love', 'https://yenpress.com/series/if-you-could-see-love', '', true, false);
    this.addSeries(raw.m155090, [cat.IDIOTS, cat.SCHOOL, cat.OTHER], 'https://mangadex.org/title/0081e3dd-bf93-4bd4-aa95-3e8c0f1dfa31/snow-thaw-love-letter', 'https://dynasty-scans.com/series/snow_thaw_love_letter', null, '', false, false);
    this.addSeries(raw.m167186, [cat.SCIFI, cat.DRAMA, cat.DEPRESSO, cat.IDIOTS], 'https://mangadex.org/title/a4242f1e-4fae-4dd5-a985-2236e5de0db3/android-wa-jiraikei-no-yume-wo-miru', '', null, 'Jirai kei robot gf... where do I get one...', false, false);
    this.addSeries(raw.m113658, [cat.COMFY, cat.CLUB, cat.DRAMA], 'https://mangadex.org/title/43df19d5-0990-46ec-9367-ea29c502e7bb/ame-demo-hare-demo', 'https://dynasty-scans.com/series/come_rain_or_shine', null, 'I still don\'t understand what the author was trying to do with Nekozaki, but it\'s a cute manga so whatever.', true, false);
    this.addSeries(raw.m69959,  [cat.DEPRESSO, cat.HORROR, cat.SUBTEXT, cat.PSYCHO, cat.WTF], 'https://mangadex.org/title/0717cb7b-b36f-49df-baa5-70a8006099b7/the-bones-of-an-invisible-person', '', null, 'Reflective, introspective; a drama about guilt and paying the just price for one\'s sins.', true, false, true);
    this.addSeries(raw.m139328, [cat.WTF, cat.SCIFI, cat.PSYCHO], 'https://mangadex.org/title/2a9acae2-48f7-42ce-a58d-3a20c8e72ecf/lily-system', 'https://dynasty-scans.com/series/lily_system', null, 'Everything Yoshitomi Akihito writes is esoteric as fuck in one way or another, but this one takes the cake.\nIf you enjoy this, read "School Ningyo", which isn\'t 100% yuri but is one of his best works.', true, false);
    this.addSeries(raw.m140285, [cat.WTF, cat.COMFY, cat.SUPERNATURAL], 'https://mangadex.org/title/e2f337f9-fe7c-4ff8-8d72-839a31d88caa/usagi-no-furafura', 'https://dynasty-scans.com/series/usagi_no_furafura_1', null, 'I wish I could tell you what this manga is about.\nI don\'t think the author herself knows.', true, false);
    this.addSeries(raw.m121550, [cat.HORROR, cat.PSYCHO, cat.SUPERNATURAL, cat.DRAMA], 'https://mangadex.org/title/f48398c1-264f-4b42-82b8-9bb979cf8a7b/kimi-ga-niku-ni-nattemo', '', null, 'As short as it is great.', true, false);
    this.addSeries(raw.m104403, [cat.COUNTRY, cat.SUPERNATURAL, cat.DRAMA], 'https://mangadex.org/title/c014afcd-ec06-4d97-8a9e-c6f3ef9be950/kaijuu-iro-no-shima', 'https://dynasty-scans.com/series/kaijuu_iro_no_shima', null, '', false, false);
    this.addSeries(raw.m112919, [cat.SUPERNATURAL, cat.FANTASY, cat.IDIOTS, cat.ACTION, cat.WTF], 'https://mangadex.org/title/109cf150-2ec3-4e34-9ecf-ce928e484f43/beni-tsubaki', '', null, 'Did you ever want to see every single mythological creature of every culture seduced by a thirsty woman? Wait no more!', false, true);
    this.addSeries(raw.m66267,  [cat.GENDERBEND, cat.PSYCHO, cat.DRAMA, cat.WTF, cat.DEPRESSO], 'https://mangadex.org/title/fdfc9ba2-b21c-4f37-b5bf-4382f3d1318f/inside-mari', '', 'https://denpa.pub/manga/inside-mari-volume-1', 'Unlike the fan TL, the official release is complete.', true, true);
    this.addSeries(raw.m169154, [cat.WTF, cat.SUPERNATURAL, cat.SCHOOL, cat.PSYCHO], 'https://mangadex.org/title/be5a9292-79c6-4db1-8a30-9e5e6b3d8f64/normality-and-monsters', 'https://dynasty-scans.com/series/normality_and_monsters', null, '', false, false);
    this.addSeries(raw.m173281, [cat.WTF, cat.IDIOTS, cat.SCHOOL, cat.STOCKHOLM], 'https://mangadex.org/title/3d287418-9bd7-4bf4-b71b-1c4512812a50/oshi-to-no-yuri-wa-arienai', '', null, 'Everyone in this manga is insane, including the author and editor.', false, false);
    this.addSeries(raw.m178235, [cat.WTF, cat.DRAMA, cat.WORK, cat.HORROR], 'https://mangadex.org/title/b072ab0b-c8cb-40ed-a0d2-bf1169bf14c7/sugar-girl-drip', '', null, 'I wish all maid cafés were like this.', false, false);
    this.addSeries(raw.m157512, [cat.WTF, cat.HORROR, cat.DRAMA, cat.PSYCHO], 'https://mangadex.org/title/56958579-6d1b-4db0-be4f-dd17b828fcf7/in-the-gardens-of-gehenna', 'https://dynasty-scans.com/series/in_the_gardens_of_gehenna', null, 'Read at your own risk, kinda. It\'s a fucked up story.', true, false);
    this.addSeries(raw.m110278, [cat.WTF, cat.COHAB, cat.DRAMA, cat.SCIFI], 'https://mangadex.org/title/b2c9719b-4be0-4bfb-84dc-0cca9b83b3b2/twenty-lillies', '', null, 'Three for the price of one, all of them weird but strangely sweet.', true, false);
    this.addSeries(raw.m164160, [cat.WTF, cat.DRAMA, cat.SCHOOL, cat.PSYCHO, cat.SUPERNATURAL], 'https://mangadex.org/title/02efd1cb-45bc-4fd2-b34b-73e644e7b4f6/outsider-paradise', '', null, 'This is a spinoff of Asobi Asobase, and it requires reading the 15 volumes of that manga in order to being to understand what the hell is going on here. The mindfuckery and weird mystery is completely worth it.', false, false);
    this.addSeries(raw.m138135, [cat.ONESHOT, cat.WTF, cat.PSYCHO, cat.HORROR], 'https://mangadex.org/title/8cd63fa3-b3d9-4f80-a06d-cbd408af3c2d/mugen-tengoku', '', null, 'If you enjoy this masterpiece, make sure to check out the rest of Shino Ura\'s oneshots, collected in two anthologies: "Yuugai Muzai Gangu" and "Gishi Sanjinden". All of them are equally as strange, and all of them are great.', true, false);
    this.addSeries(raw.m110604, [cat.WTF, cat.DRAMA, cat.PSYCHO, cat.HORROR, cat.ONESHOT, cat.ANTHOLOGY], 'https://mangadex.org/title/f656f7e1-78fb-4ff6-a95c-58c68ad1d6a7/kimi-no-kureru-mazui-ame', '', null, 'An anthology of Fuyumushi Kaiko\'s oneshots. Strange and esoteric.', true, false);
    this.addSeries(raw.m172437, [cat.COHAB, cat.SCIFI, cat.AGE_GAP, cat.COMFY], 'https://mangadex.org/title/71d6899a-0e57-4bf5-a78c-9a5372895fec/oshikake-nyobo-kodomo-tsuki', 'https://dynasty-scans.com/series/uninvited_wife_with_child', null, 'Makes you want to have kids until you remember how annoying real kids are.', false, false);
    this.addSeries(raw.m177537, [cat.IDIOTS, cat.SCHOOL, cat.CLUB], 'https://mangadex.org/title/bf40ef65-2212-4778-9667-13033899d6f0/the-main-duties-of-the-vice-president', 'https://dynasty-scans.com/series/the_main_duties_of_the_vice_president', null, 'This is part of an extended universe spanning several short-format pixiv series by the same author. Right now only this one is being translated, but stay tuned for future updates.', false, false);
    this.addSeries(raw.m134562, [cat.PSYCHO, cat.TOXIC, cat.ONESHOT], 'https://mangadex.org/title/c11f5e2f-903a-473e-b683-0acee78bdc4e/the-story-of-you-me-and-her', 'https://dynasty-scans.com/chapters/kimi_to_kanojo_to_watashi_no_hanashi', null, '', true, false);
    this.addSeries(raw.m136807, [cat.MANGAKA, cat.ONESHOT, cat.CLUB, cat.DRAMA, cat.WORK, cat.DEPRESSO], '', '', 'https://www.viz.com/shonenjump/chapters/look-back', 'Only available officially, a masterpiece by Fujimoto. You can also watch the movie, it\'s a extremely good adaptation.', true, false);
    this.addSeries(raw.m173101, [cat.ONESHOT, cat.IDIOTS, cat.ADULT_LIFE], 'https://mangadex.org/title/d0595a5d-6061-47b0-962f-4b120f77abbd/daisuki-desu', 'https://dynasty-scans.com/chapters/i_i_love_love_you_you', null, '', true, false);
    this.addSeries(raw.m115093, [cat.ANTHOLOGY, cat.COMFY, cat.DRAMA, cat.ONESHOT], 'https://mangadex.org/title/cfbdcddc-7013-494b-b2ef-aa7860f5ad60/kimi-no-tame-ni-sekai-wa-aru', 'https://dynasty-scans.com/anthologies/the_world_exists_for_you', null, 'Oneshots by the one and only Usui Shio.', true, false);
    this.addSeries(raw.m114485, [cat.DRAMA, cat.TOXIC, cat.ONESHOT, cat.STOCKHOLM], 'https://mangadex.org/title/dd869385-2ac7-46a8-8559-779fbe861017/houtai-shoujo-kikan', 'https://dynasty-scans.com/chapters/a_period_of_bandaged_girls', null, '', true, false);
    this.addSeries(raw.m106974, [cat.ANTHOLOGY, cat.ONESHOT, cat.COMFY, cat.IDIOTS, cat.SUPERNATURAL, cat.TOXIC], 'https://mangadex.org/title/8fa12678-72bc-4dbd-a2fa-a6f8ab6880ef/i-want-you-to-say-you-love-me', 'https://dynasty-scans.com/anthologies/i_want_you_to_say_you_love_me', null, 'Oneshots by Takeshima Eku, the author of "Whispering You a Love Song"', true, false);
    this.addSeries(raw.m92480,  [cat.TOXIC, cat.DRAMA], 'https://mangadex.org/title/0d59a446-10ab-4444-80be-4e4a391c123b/truth', 'https://dynasty-scans.com/chapters/truth', null, 'When the legend Namori isn\'t writing fluffy comedy in YRYR and OMRK or drawing the cutest fanart you\'ll ever see on twitter, she dedicates her time and energy to write the most toxic yuri on earth. The duality of this woman.', true, false);
    this.addSeries(raw.m107365, [cat.COUNTRY, cat.COHAB, cat.DRAMA, cat.ADULT_LIFE], 'https://mangadex.org/title/22e944a0-f761-4d7a-b6a7-f83a289047ca/umineko-sou-days', 'https://dynasty-scans.com/series/seagull_villa_days', 'https://sevenseasentertainment.com/series/days-of-love-at-seagull-villa/', '', true, false);
    this.addSeries(raw.m181879, [cat.FANTASY, cat.SCIFI, cat.HISTORY, cat.COMFY, cat.FOOD], 'https://mangadex.org/title/88424be3-40a9-4965-8dae-e33bd0a015f5/pest-ga-aketara-asobimashou-chuusei-europa-sekai-to-gendai-bunmei-slow-life', '', null, 'Who doesn\'t want to read about lesbians hanging out in a medieval Germany ravaged by the black plague? I do.', false, false); 
    this.addSeries(raw.m105344, [cat.WTF, cat.FANTASY, cat.DEGEN], 'https://mangadex.org/title/a873026d-2de3-4721-a865-b07b72fd9834/you-still-rely-on-magic', 'https://dynasty-scans.com/series/you_still_rely_on_magic', null, 'I don\'t need to explain myself.', true, true);
    //this.addSeries(raw.)


    this.series.forEach(s => {
      const override = englishOverrides.find(o => o.id == s.id);
      if (override) {
        s.anilistData.title.english = override.english;
      }
    })

    Object.values(raw).forEach(o => {
      if (!this.series.some(s => s.id == o.id)) {
        console.error(o.title.romaji, 'IS MISSING FROM DATASET');
      }
    });
    const ids = this.series.map(s => s.id).filter(i => i < 1000000000);
    if ([...new Set(ids)].length != Object.values(raw).length) {
      console.error('NUMBER OF SERIES DOES NOT MATCH');
    }
    if ([...new Set(ids)].length != this.series.length) {
      console.error('THERE ARE DUPLICATE SERIES IN THE DATASET');
    }
  }

  series: FullSeries[] = [];

  getData() {
    return this.series;
  }

  addSeries(
    anilistData: AnilistData,
    categories: Category[],
    mangadex: string,
    dynasty: string,
    official: string | null,
    comment: string,
    completeTranslation: boolean,
    nsfw: boolean,
    forceJapanese: boolean = false
  ) {
    this.series.push({
      id: anilistData.id,
      anilistData,
      categories,
      mangadex,
      dynasty,
      comment,
      completeTranslation,
      nsfw,
      official,
      forceJapanese
    });
  };
}