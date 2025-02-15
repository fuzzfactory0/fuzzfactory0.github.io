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
    // non-anilist series
    this.addSeries(
      {
        id: 1000000001,
        title: {
          romaji: "Nagi no Hate Nite",
          english: "When The Calm Ends"
        },
        anilist: '',
        mal: 'https://myanimelist.net/manga/168753',
        description: 'The same as ever, two childhood friends drift along.<br>"Koma-chan, it looks like the world is going to end this day next year"<br>Published in the April 2024 issue of Yuri Hime.',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/RF0lSR4.png',
          extraLarge: 'https://i.imgur.com/RF0lSR4.png',
          large: 'https://i.imgur.com/RF0lSR4.png',
          color: '#eeeeee'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Ageharuuu', role: 'Story & Art', image: '', id: 0}
        ]
      },
      [cat.TOXIC, cat.DRAMA, cat.WTF, cat.DEPRESSO, cat.ONESHOT],
      'https://mangadex.org/title/6b84a1a6-0b99-4e20-ae14-9e545b5cbc08/when-the-calm-ends',
      null,
      null,
      'Yuri one-shots are a massive rabbit hole of surprises. One moment you\'re reading the comfiest Yukiko story, the next you\'re reading this',
      true, false
    );

    this.addSeries(
      {
        id: 1000000002,
        title: {
          romaji: "Doppel Anata",
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
        volumes: 0,
        staff: [
          { name: 'Tsutsui Itsuki', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/medium/n126701-jCIY8zgxZOA8.jpg', id: 126701}
        ]
      },
      [cat.TOXIC, cat.DRAMA, cat.WTF, cat.ONESHOT],
      'https://mangadex.org/chapter/a1bef4c6-e660-47ce-b95d-91d67f554910',
      'https://dynasty-scans.com/chapters/you_my_double#1',
      null,
      'You can (not) fix her',
      true, false
    );

    this.addSeries(
      {
        id: 1000000003,
        title: {
          romaji: "Happy Kashiiki",
          english: "Visible Range Of Happiness"
        },
        anilist: '',
        mal: '',
        description: null,
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/q6Qn9De.png',
          extraLarge: 'https://i.imgur.com/q6Qn9De.png',
          large: 'https://i.imgur.com/q6Qn9De.png',
          color: '#F27C7A'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Sorajirou', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n168434-3JbAgG4UAAhe.png', id: 168434}
        ]
      },
      [cat.DRAMA, cat.WTF, cat.DEPRESSO, cat.PSYCHO, cat.ONESHOT],
      'https://mangadex.org/title/8dd0c87c-251a-4fdc-aade-af67178280a9/happy-kashiiki',
      null,
      null,
      'I am not okay bros',
      true, false
    );

    this.addSeries(
      {
        id: 1000000004,
        title: {
          romaji: "Nukumori Blanket",
          english: null
        },
        anilist: '',
        mal: '',
        description: null,
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/rV4WT9g.jpeg',
          extraLarge: 'https://i.imgur.com/rV4WT9g.jpeg',
          large: 'https://i.imgur.com/rV4WT9g.jpeg',
          color: '#89F2B5'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Kumoko', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n345766-nxxdRnI2OJrn.png', id: 345766 }
        ]
      },
      [cat.COMFY, cat.DRAMA, cat.ADULT_LIFE, cat.COHAB, cat.ONESHOT],
      'https://mangadex.org/title/6ade47ff-2f4f-4dae-b747-d2c9b48de4e4/nukumori-blanket',
      'https://dynasty-scans.com/chapters/nukumori_blanket',
      null,
      null,
      true, false
    );

    this.addSeries(
      {
        id: 1000000005,
        title: {
          romaji: "Rapunzel",
          english: null
        },
        anilist: '',
        mal: '',
        description: null,
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/WScql0p.png',
          extraLarge: 'https://i.imgur.com/WScql0p.png',
          large: 'https://i.imgur.com/WScql0p.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Komoda', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg', id: 107233 }
        ]
      },
      [cat.DRAMA, cat.TOXIC, cat.WTF, cat.ONESHOT],
      'https://mangadex.org/title/1a0769f4-ad83-43b2-9d7b-8f346995e2eb/rapunzel',
      null,
      null,
      'Hmm yes, both of those things hold the exact same value. Yep. It\'s exactly the same!',
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000006,
        title: {
          romaji: "Watashi ga Shindara Nakimasu ka",
          english: "Would You Cry If I Died?"
        },
        anilist: '',
        mal: '',
        description: null,
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/ofhbk2o.png',
          extraLarge: 'https://i.imgur.com/ofhbk2o.png',
          large: 'https://i.imgur.com/ofhbk2o.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Akami Sakana', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg', id: 0 }
        ]
      },
      [cat.DRAMA, cat.DEPRESSO, cat.WTF, cat.ONESHOT],
      'https://mangadex.org/title/5d3f99cc-f4eb-4459-8782-1a5ef6e4d4cf/watashi-ga-shindara-nakimasu-ka',
      null,
      null,
      'It would be so much better without the last page!',
      true, false
    );

    this.addSeries(
      {
        id: 1000000007,
        title: {
          romaji: "",
          english: "Watch Out For Drunks!"
        },
        anilist: '',
        mal: '',
        description: 'Nanako is a senpai from work gets really drunk at every party, and Yui is today\'s sacrifice who will be looking after her.',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/t5hwXem.png',
          extraLarge: 'https://i.imgur.com/t5hwXem.png',
          large: 'https://i.imgur.com/t5hwXem.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Minase Ruruu', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/medium/n119405-Hmy7FLkXzM7W.jpg', id: 119405 }
        ]
      },
      [cat.COMFY, cat.IDIOTS, cat.ONESHOT],
      null,
      'https://dynasty-scans.com/chapters/watch_out_for_drunks#1',
      null,
      'I need coworkers like this',
      true, false
    );

    this.addSeries(
      {
        id: 1000000008,
        title: {
          romaji: "Kaze, Sonoatoni",
          english: "A Cold and After That"
        },
        anilist: '',
        mal: '',
        description: 'Naho is having trouble keeping her feelings in check when taking care of her sick friend Mana.',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/3vjBzt6.png',
          extraLarge: 'https://i.imgur.com/3vjBzt6.png',
          large: 'https://i.imgur.com/3vjBzt6.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Minase Ruruu', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/medium/n119405-Hmy7FLkXzM7W.jpg', id: 119405 }
        ]
      },
      [cat.COMFY, cat.IDIOTS, cat.ONESHOT],
      null,
      'https://dynasty-scans.com/chapters/a_cold_and_after_that#1',
      null,
      null,
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000009,
        title: {
          romaji: "Elevator Girl wa Koko ni Iru",
          english: "Elevator Girl"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/kzbHA8F.png',
          extraLarge: 'https://i.imgur.com/kzbHA8F.png',
          large: 'https://i.imgur.com/kzbHA8F.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Okada Kirin', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n330765-krhfTYtJEeDw.jpg', id: 330765 }
        ]
      },
      [cat.DEPRESSO, cat.PSYCHO, cat.SUPERNATURAL, cat.ONESHOT],
      'https://mangadex.org/title/20da8035-dc47-4c50-913c-28f21f057031/elevator-girl',
      null,
      null,
      ':(',
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000010,
        title: {
          romaji: "Ushiro no, senpai",
          english: "The Senpai Behind Me"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/5c1OVkf.png',
          extraLarge: 'https://i.imgur.com/5c1OVkf.png',
          large: 'https://i.imgur.com/5c1OVkf.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Mimoto', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n120762-NduKhf9L1QDu.png', id: 120762 }
        ]
      },
      [cat.DEPRESSO, cat.PSYCHO, cat.WTF, cat.ONESHOT, cat.TOXIC],
      'https://mangadex.org/title/5870dcbb-3b46-49d9-94ee-dddecaa0fb87/the-senpai-behind-me',
      null,
      null,
      'Nothing like a comfy car ride with your cute kouhai who loves you!',
      true, false
    );

    this.addSeries(
      {
        id: 1000000011,
        title: {
          romaji: "Chikakute Tooi",
          english: "Near Yet Far"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/JwwAPKi.png',
          extraLarge: 'https://i.imgur.com/JwwAPKi.png',
          large: 'https://i.imgur.com/JwwAPKi.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: '2C=Galore', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n149861-OY3fcvKVnHqf.png', id: 149861 }
        ]
      },
      [cat.DRAMA, cat.COMFY, cat.ONESHOT],
      null,
      'https://dynasty-scans.com/chapters/near_yet_far',
      null,
      null,
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000012,
        title: {
          romaji: "Ironna Katachi",
          english: "Various Forms"
        },
        anilist: '',
        mal: '',
        description: 'An anthology of one-shots by 2C=Galore.',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/u5spMCA.jpeg',
          extraLarge: 'https://i.imgur.com/u5spMCA.jpeg',
          large: 'https://i.imgur.com/u5spMCA.jpeg',
          color: '#FDA577'
        },
        chapters: 5,
        volumes: 1,
        staff: [
          { name: '2C=Galore', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n149861-OY3fcvKVnHqf.png', id: 149861 }
        ]
      },
      [cat.ANTHOLOGY, cat.COMFY, cat.ONESHOT, cat.DEPRESSO, cat.DRAMA],
      null,
      'https://dynasty-scans.com/anthologies/various_forms',
      null,
      null,
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000013,
        title: {
          romaji: "Senpai to Isshoni WALK",
          english: "A Walk With Senpai"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/NdsXC6j.png',
          extraLarge: 'https://i.imgur.com/NdsXC6j.png',
          large: 'https://i.imgur.com/NdsXC6j.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: '2C=Galore', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n149861-OY3fcvKVnHqf.png', id: 149861 }
        ]
      },
      [cat.COMFY, cat.WORK, cat.ONESHOT],
      null,
      'https://dynasty-scans.com/chapters/walk_with_senpai',
      null,
      null,
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000014,
        title: {
          romaji: "",
          english: "Unfinished Prologue"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/JIzv6T5.png',
          extraLarge: 'https://i.imgur.com/JIzv6T5.png',
          large: 'https://i.imgur.com/JIzv6T5.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Fumio Aya', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/120268-9wpHIfJU5aqT.jpg', id: 120268 }
        ]
      },
      [cat.COMFY, cat.ONESHOT, cat.AGE_GAP],
      null,
      'https://dynasty-scans.com/chapters/unfinished_prologue',
      null,
      'Why must it be just a oneshot',
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000015,
        title: {
          romaji: "Watashi no Waltz",
          english: "My Waltz"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/5AwZr2a.png',
          extraLarge: 'https://i.imgur.com/5AwZr2a.png',
          large: 'https://i.imgur.com/5AwZr2a.png',
          color: '#DB8085'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Shimamizu Eke', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n147131-MB04rcEAqrnb.jpg', id: 147131 }
        ]
      },
      [cat.TOXIC, cat.ONESHOT, cat.SCHOOL, cat.PSYCHO],
      'https://mangadex.org/title/af8d3bfa-cca0-45de-9513-090c9f217714/watashi-no-waltz',
      null,
      null,
      'Translated by yours truly.<br><br><small>...I kinda wish that were me. Which one? I\'ll leave it to your imagination.</small>',
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000016,
        title: {
          romaji: "Kimi to Yuku",
          english: "I'll Go With You"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/8XRUWdq.png',
          extraLarge: 'https://i.imgur.com/8XRUWdq.png',
          large: 'https://i.imgur.com/8XRUWdq.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Shimamizu Eke', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n147131-MB04rcEAqrnb.jpg', id: 147131 }
        ]
      },
      [cat.DRAMA, cat.COMFY, cat.ONESHOT],
      'https://mangadex.org/title/bd4745a4-7907-4663-9994-d76bbbf123ca/kimi-to-yuku',
      'https://dynasty-scans.com/chapters/ill_go_with_you',
      null,
      '14 years old girls with no money on a train, what could possibly go wrong',
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000017,
        title: {
          romaji: "",
          english: "This Is Your Fault, Momo."
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/Co32DQL.png',
          extraLarge: 'https://i.imgur.com/Co32DQL.png',
          large: 'https://i.imgur.com/Co32DQL.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Kawai Rou', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/119555-LrkiNdbN0e2O.jpg', id: 119555 }
        ]
      },
      [cat.DRAMA, cat.TOXIC, cat.ONESHOT, cat.SUPERNATURAL, cat.WTF],
      null,
      'https://dynasty-scans.com/chapters/this_is_your_fault_momo#1',
      null,
      'How to treat a het girl:',
      true, false
    );

    this.addSeries(
      {
        id: 1000000018,
        title: {
          romaji: "Yamerarenai Shitteruyo",
          english: "I Know We Can't Stop."
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/r5wK1Ik.png',
          extraLarge: 'https://i.imgur.com/r5wK1Ik.png',
          large: 'https://i.imgur.com/r5wK1Ik.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Nochimuyu', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n131722-L5nojLYEpUFz.jpg', id: 131722 }
        ]
      },
      [cat.DRAMA, cat.TOXIC, cat.ONESHOT, cat.DEPRESSO],
      'https://mangadex.org/title/35a42a98-5aaa-4518-b1cb-6b89a0ec635f/i-know-you-won-t-stop',
      null,
      null,
      'What a healthy relationship!',
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000019,
        title: {
          romaji: "Issun Saki wa MotoKano",
          english: "Ex-girlfriend Right Ahead"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/dkGPHpU.png',
          extraLarge: 'https://i.imgur.com/dkGPHpU.png',
          large: 'https://i.imgur.com/dkGPHpU.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Harukawa Haru', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/24622-j5sgzKxjXKbc.png', id: 119622 }
        ]
      },
      [cat.IDIOTS, cat.WORK, cat.ONESHOT, cat.COMFY],
      'https://mangadex.org/chapter/972734c2-2953-4f54-9c2a-3075ac966354',
      'https://dynasty-scans.com/chapters/ex_girlfriend_right_ahead#1',
      null,
      null,
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000020,
        title: {
          romaji: "Nakitai Hito wa Doko ni mo Inai",
          english: "There's Nobody Who Wants to Cry"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/qazTSfF.png',
          extraLarge: 'https://i.imgur.com/qazTSfF.png',
          large: 'https://i.imgur.com/qazTSfF.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Yukiko', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/n119228-6x7Uxrxxlwlv.jpg', id: 119228 }
        ]
      },
      [cat.TOXIC, cat.ONESHOT, cat.DATING],
      'https://mangadex.org/chapter/511a8ca3-7a65-4f94-8ae3-416013f1a7eb',
      'https://dynasty-scans.com/chapters/theres_nobody_who_wants_to_cry#1',
      null,
      null,
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000021,
        title: {
          romaji: "Anata no Yoru ga Aketara",
          english: "When Your Night Ends"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/RdQf5Lu.png',
          extraLarge: 'https://i.imgur.com/RdQf5Lu.png',
          large: 'https://i.imgur.com/RdQf5Lu.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Harukawa Haru', role: 'Story & Art', image: 'https://s4.anilist.co/file/anilistcdn/staff/large/24622-j5sgzKxjXKbc.png', id: 119622 }
        ]
      },
      [cat.COMFY, cat.ONESHOT, cat.ADULT_LIFE],
      'https://mangadex.org/chapter/4ee68666-0b66-4c9f-a9b4-e305bec5b81d',
      'https://dynasty-scans.com/chapters/when_your_night_ends#7',
      null,
      null,
      true, false
    );

    this.addSeries(
      {
        id: 1000000022,
        title: {
          romaji: "Aisuru Anata wa Kimera",
          english: "My Beloved, You're a Chimera"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/jnW4FDn.png',
          extraLarge: 'https://i.imgur.com/jnW4FDn.png',
          large: 'https://i.imgur.com/jnW4FDn.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Nekoda Rekura.', role: 'Story & Art', image: 'https://pbs.twimg.com/profile_images/1779499752562044928/BAhjmas__400x400.jpg', id: 0 }
        ]
      },
      [cat.PSYCHO, cat.ONESHOT, cat.SCHOOL, cat.DEPRESSO, cat.DRAMA],
      'https://mangadex.org/title/fda70945-d981-4cfd-9afc-3e81951a40a0/aisuru-anata-wa-kimera',
      null,
      null,
      'I started translating this one before reading all the way through thinking it was a normal drama, worst mistake of my life. So now you get to share my suffering.',
      true, false
    );
    
    this.addSeries(
      {
        id: 1000000023,
        title: {
          romaji: "Inaori Tomodachi",
          english: "Sudden Friendship"
        },
        anilist: '',
        mal: '',
        description: '',
        format: 'MANGA',
        status: 'FINISHED',
        isAdult: false,
        coverImage: {
          medium: 'https://i.imgur.com/SCxicbH.png',
          extraLarge: 'https://i.imgur.com/SCxicbH.png',
          large: 'https://i.imgur.com/SCxicbH.png',
          color: '#dddddd'
        },
        chapters: 1,
        volumes: 0,
        staff: [
          { name: 'Ishii Yuusetsu', role: 'Story & Art', image: '', id: 0 }
        ]
      },
      [cat.PSYCHO, cat.WTF, cat.DEPRESSO, cat.DRAMA],
      null,
      'https://dynasty-scans.com/chapters/sudden_friendship',
      null,
      'Ahhh, yuri. It blooms in the most unexpected of places.',
      true, false
    );
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! NEED TO POPULATE MORE ONE SHOTS AND ANTHOLOGIES NOW THAT I CAN
    //! Eclair, wildrose, etc

    // Anilist series
    this.addSeries(raw.m164581, [cat.COMFY, cat.SCHOOL], 'https://mangadex.org/title/4a89da3a-ebf9-467b-94a1-beeb7d1bd3e8/koi-yori-aoku', 'https://dynasty-scans.com/series/a_love_yet_to_bloom', null, null, false, false);
    this.addSeries(raw.m102549, [cat.COMFY, cat.ADULT_LIFE, cat.COHAB, cat.DATING], 'https://mangadex.org/title/aef191f8-f2ef-432d-9848-37b8f75a9780/dousei-seikatsu', 'https://dynasty-scans.com/series/dousei_seikatsu', null, 'Translator is AWOL.', false, false, true);
    this.addSeries(raw.m108070, [cat.COMFY, cat.COHAB, cat.ADULT_LIFE, cat.DRAMA, cat.IDIOTS, cat.DATING], 'https://mangadex.org/title/5412816d-a3c9-4bab-956b-b08d1f8f41f6/fuzoroi-no-renri', 'https://dynasty-scans.com/series/fuzoroi_no_renri', 'https://yenpress.com/titles/9781975348861-assorted-entanglements-vol-1', 'Has a parallel series, both follow the same characters and both are important to understand the story, since some developments that happen in one will be taken for granted in the other. One is originally a webcomic, one a manga, both are ongoing. Search for "Fuzoroi no Renri - Side Stories" in your favorite manga site. It\'s a bit of a mess, I don\'t remember at which point of the webcomic you should start reading the manga, and I have no idea how the official translation handled this, but it\'s quite a good read.', false, false, true);
    this.addSeries(raw.m110826, [cat.COMFY, cat.COHAB, cat.ADULT_LIFE, cat.WORK], 'https://mangadex.org/title/5199b00b-f55d-43d2-bf36-63873adee286/egao-no-taenai-shokuba-desu', 'https://dynasty-scans.com/series/a_workplace_where_you_cant_help_but_smile', null, 'A modern Kuzushiro manga? With no depression? Must have gotten the wrong person.', false, false);
    this.addSeries(raw.m100801, [cat.COMFY, cat.SCHOOL, cat.DATING], 'https://mangadex.org/title/bc86a871-ddc5-4e42-812a-ccd38101d82e/hana-ni-arashi', 'https://dynasty-scans.com/series/hana_ni_arashi', 'https://www.viz.com/rainbows-after-storms', 'One of the best yuri series there is.', true, false, true);
    this.addSeries(raw.m126292, [cat.COMFY, cat.COHAB, cat.ADULT_LIFE, cat.DATING], 'https://mangadex.org/title/bc9ccb3d-bb15-431d-b7ef-35084514df69/onna-tomodachi-to-kekkon-shitemita', 'https://dynasty-scans.com/series/trying_out_marriage_with_my_female_friend', 'https://sevenseasentertainment.com/series/i-married-my-female-friend/', 'A story about learning to live together, the meaning of partnership, and falling in love.', true, false, true);
    this.addSeries(raw.m98777,  [cat.SCHOOL, cat.DRAMA], 'https://mangadex.org/title/79b440bd-4d8a-41d6-b56f-6147d361ca8b/kase-san-and', 'https://dynasty-scans.com/series/kase_san', 'https://sevenseasentertainment.com/series/kase-san-and/', 'Has a longer sequel called "Yamada to Kase-san", both fan translated and officially translated.', true, false, true);
    this.addSeries(raw.m86244,  [cat.COMFY, cat.COHAB, cat.SCHOOL], 'https://mangadex.org/title/a9316e33-94ad-4388-9b30-eaf41990a076/futaribeya', 'https://dynasty-scans.com/series/a_room_for_two', 'https://comics.inkr.com/title/139-futaribeya', 'A story that covers the life of the protagonists from their first year of highschool to their first year of working after graduating university. Very comfy, super gay.<br><br>The mangadex translation was dropped 3 chapters before the end, but you can read the complete official version.', true, false);
    this.addSeries(raw.m161853, [cat.COMFY, cat.SCHOOL, cat.IDIOTS, cat.FOOD], 'https://mangadex.org/title/bd3ee313-500b-4313-944a-86bacf939687/naisho-no-ofutarisama', null, null, '"Rumored delinquent is actually a super kind and cute girl" might be my favorite yuri trope.', true, false);
    this.addSeries(raw.m103081, [cat.COMFY, cat.SCHOOL, cat.COUNTRY, cat.OTHER], 'https://mangadex.org/title/b997eeb1-a9a9-4d49-a107-e757a2f5ad90/our-wonderful-days', 'https://dynasty-scans.com/series/tsurezure_biyori', 'https://sevenseasentertainment.com/series/our-wonderful-days/', 'Incredible art. Suffered an early cancellation, but it\'s a good read.', true, false, true);
    this.addSeries(raw.m111229, [cat.CLUB, cat.SCHOOL], 'https://mangadex.org/title/b553b7c3-cee3-4689-aa54-fbc1bc1da71d/pocha-climb', null, null, 'Cancelled too early, the true ending is in a 40-page doujin the author wrote. It\'s not available anywhere online, but the author generously emailed it to me after I asked if I could buy it, so if you want to read it, hit me up.', true, false);
    this.addSeries(raw.m163249, [cat.CLUB, cat.COMFY, cat.COUNTRY], 'https://mangadex.org/title/5665969c-d6d9-49e5-a602-ad8a7fc6eddb/haidou', null, null, 'A manga about two girls exploring the old abandoned roads of Japan. It\'s actually far more engaging (and cuter) than it sounds!', false, false);
    this.addSeries(raw.m124885, [cat.FANTASY, cat.AGE_GAP, cat.COMFY, cat.DRAMA], 'https://mangadex.org/title/6fe56296-e980-4321-8a7b-bc8b4e2750c8/ookami-no-kawa-o-kabutta-hitsujihime', 'https://dynasty-scans.com/series/the_sheep_princess_in_wolfs_clothing', 'https://sevenseasentertainment.com/series/sheep-princess-in-wolfs-clothing/', 'Extremely cute! There\'s an epilogue doujin, so don\'t miss it', true, false);
    this.addSeries(raw.m111464, [cat.SCHOOL, cat.OTHER], 'https://mangadex.org/title/1b46b76c-bd79-4d42-8b21-e199993fee49/houkago', 'https://dynasty-scans.com/series/after_school', null, null, true, true);
    this.addSeries(raw.m99019,  [cat.ADULT_LIFE, cat.WORK, cat.COHAB, cat.DATING, cat.DRAMA], 'https://mangadex.org/title/2e71d530-79b7-444d-89c9-29f9534d08d2/my-cute-little-kitten', 'https://dynasty-scans.com/series/my_cute_little_kitten', 'https://sevenseasentertainment.com/series/my-cute-little-kitten/', null, false, true);
    this.addSeries(raw.m120761, [cat.COMFY, cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/ae58deed-2071-4651-aaeb-ab22ce0d48ef/kirakira-study-zettai-goukaku-sengen', 'https://dynasty-scans.com/series/kirakirastudy', null, '4koma isn\'t everybody\'s cup of tea, but this one is very cute and it gets super gay.', true, false);
    this.addSeries(raw.m136774, [cat.ADULT_LIFE, cat.COUNTRY, cat.DATING, cat.DRAMA], 'https://mangadex.org/title/d006f413-bad9-4f82-a0aa-901ef2d0ece6/throw-away-the-suit-together', 'https://dynasty-scans.com/series/throw_away_the_suit_together', null, 'A great start with a terrible early axe, it\'s worth reading even though the ending was clearly rushed. I have no idea why they would cancel something this good.', true, false);
    this.addSeries(raw.m148311, [cat.COMFY, cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/4de70c96-566b-4cdb-88f4-6c7fd5184991/doushitara-osananajimi-no-kanojo-ni-naremasu-ka', 'https://dynasty-scans.com/series/how_do_i_get_together_with_my_childhood_friend', 'https://sevenseasentertainment.com/series/how-do-i-turn-my-best-friend-into-my-girlfriend/', 'Extremely cute, very gay, but be warned: It reaches levels of stretching never thought possible, and gets incredibly frustrating. This is an uncommon case where the story would have actually benefited a lot from getting axed at volume 3 or so.', true, false);
    this.addSeries(raw.m104401, [cat.COMFY, cat.IDIOTS], 'https://mangadex.org/title/13e9bb3a-757b-4064-9291-94feecfa8c4d/yuri-moyou', 'https://dynasty-scans.com/series/yuri_moyou', null, 'These are four parallel stories loosely interconnected, with very short chapters.', true, false);
    this.addSeries(raw.m121501, [cat.SCHOOL, cat.CLUB, cat.DRAMA, cat.IDIOTS], 'https://mangadex.org/title/bc8f71a4-49d8-498b-a231-10faa0d53ab6/stardust-telepath', 'https://dynasty-scans.com/series/stardust_telepath', null, 'Gay aliens and their gay forehead sex', false, false);
    this.addSeries(raw.m158904, [cat.ADULT_LIFE, cat.COMFY, cat.DATING, cat.COHAB], 'https://mangadex.org/title/d13332db-7b57-4cc4-9e46-802cf52e3b8b/koharu-to-minato-watashi-no-partner-wa-onna-no-ko', null, null, 'Allegedly autobiographical. It\'s cute anyway so I don\'t care.', false, false);
    this.addSeries(raw.m165306, [cat.ADULT_LIFE, cat.WORK, cat.COMFY, cat.IDIOTS], 'https://mangadex.org/title/0c1f898e-1769-44cb-9dbe-7abd11180663/hogushite-yui-san', null, null, 'Where can I get a stress relief huggable coworker gf', true, false);
    this.addSeries(raw.m154072, [cat.WORK, cat.COMFY], 'https://mangadex.org/title/da0f5e67-843b-420c-af19-6655dd338812/yumemiru-maid-no-tea-time', null, null, 'Cancelled early. Still cute, and the art is incredible.', true, false);
    this.addSeries(raw.m176100, [cat.SCHOOL, cat.IDIOTS, cat.DATING], 'https://mangadex.org/title/f7262e67-e7d7-44b5-b39a-96fafef39edf/koi-ni-koi-suru-koibito-kankei', 'https://dynasty-scans.com/series/becoming_her_lover_for_the_sake_of_love', null, 'I LOVE USUI SHIO SO MUCH IT\'S UNREAL', false, false);
    this.addSeries(raw.m180657, [cat.DATING, cat.SCHOOL, cat.DRAMA], 'https://mangadex.org/title/b80ea8bd-7293-4e61-965a-14594059dde1/7-kakan-gentei-kanojo', 'https://dynasty-scans.com/series/girlfriend_limited_to_7_days', null, 'How to awaken a lesbian in 1 easy step', false, false);
    this.addSeries(raw.m81267,  [cat.IDIOTS, cat.SCHOOL, cat.SUBTEXT], 'https://mangadex.org/title/449be401-bcaa-4af7-9a97-44e273a9c371/inugami-san-to-nekoyama-san', 'https://dynasty-scans.com/series/inugami_san_and_nekoyama_san', null, 'Kuzushiro\'s early works are so different in tone from her modern manga it\'s a bit hard to believe they\'re from the same author.', true, false);
    this.addSeries(raw.m120537, [cat.SCHOOL, cat.IDIOTS, cat.OTHER], 'https://mangadex.org/title/5227abca-3d3d-4456-92ff-e67f6e8eb0ee/school-zone', 'https://dynasty-scans.com/series/school_zone', 'https://sevenseasentertainment.com/series/school-zone-girls/', 'Sadly, this one is in an indefinite hiatus. The author cited a lack of motivation as the main reason, so we don\'t really know if it will ever come back.', false, false, true);
    this.addSeries(raw.m139399, [cat.SCHOOL, cat.IDIOTS, cat.COMFY], 'https://mangadex.org/title/020d602f-c43a-4b9f-a4f8-3ac8ddfd99c3/please-spoil-me-hinamori-san', 'https://dynasty-scans.com/series/please_spoil_me_hinamori_san', 'https://kodansha.us/series/spoil-me-plzzz-hinamori-san/', null, false, false, true);
    this.addSeries(raw.m86674,  [cat.SCHOOL, cat.COMFY, cat.IDIOTS], 'https://mangadex.org/title/af6b26ab-b3dd-4e87-8a7a-7fd988482eb2/swap-swap', 'https://dynasty-scans.com/series/swap_swap', null, 'Bitches be kissing several times per chapter. God I wish that was me.<br><br>I had a good memory of this one, but when I reread it recently, it was way better than I remembered. Cute yuri about idiots truly is the best.', true, false);
    this.addSeries(raw.m112331, [cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/01b6f4b8-a5fe-4f75-a6a4-7707c45e637a/tsun-hime-sama-to-dame-ouji-chan', 'https://dynasty-scans.com/series/tsun_hime_sama_to_dame_ouji_chan', null, 'Translation is dead for now.', false, false);
    this.addSeries(raw.m155072, [cat.ADULT_LIFE, cat.WORK, cat.DATING, cat.IDIOTS], 'https://mangadex.org/title/8ac5934b-041a-4f0a-8716-a9dfde9dff2e/constable-sakuma-and-constable-hanaoka-started-dating', 'https://dynasty-scans.com/series/constable_sakuma_and_constable_hanaoka_started_dating', null, 'Thank god real cops aren\'t this useless. Some of them at least.', true, false);
    this.addSeries(raw.m161772, [cat.COHAB, cat.DEGEN, cat.IDIOTS], 'https://mangadex.org/title/688eee00-d587-4998-a999-652767aac846/convenient-semi-friend', 'https://dynasty-scans.com/series/convenient_semi_friend', null, 'Slutty tops turning into useless bottoms... erotic...', false, false);
    this.addSeries(raw.m169254, [cat.DATING, cat.COMFY, cat.DEGEN], 'https://mangadex.org/title/561cf196-01a3-4c38-a838-5c6bf84ab24d/shino-to-ren', null, null, 'An alternate version of Semi-Friend, where the girls are actually dating. You could say it\'s a look into the future after Suuna fucks Ruka\'s brains out.', false, true);
    this.addSeries(raw.m151909, [cat.SCHOOL, cat.DRAMA, cat.IDOL, cat.SUPERNATURAL], 'https://mangadex.org/title/f110d48a-8461-428e-bbcb-5ae3c0d53d25/mietemasu-yo-aizawa-san', 'https://dynasty-scans.com/series/i_see_you_aizawa_san', null, 'Mystery and ghosts in my yuri? Sign me the fuck up', false, false);
    this.addSeries(raw.m156935, [cat.SCHOOL, cat.IDIOTS, cat.DATING], 'https://mangadex.org/title/84cf55e0-b497-4455-8b40-4c5a880de96b/inkya-gyaru-demo-ikigaritai', 'https://dynasty-scans.com/series/even_the_introverted_gals_wanna_get_out_there', null, 'Kuran is literally me', false, false);
    this.addSeries(raw.m174361, [cat.SCHOOL, cat.IDIOTS, cat.COMFY], 'https://mangadex.org/title/9243a9d0-13dc-452d-b123-c6d5c28e46d2/shy-na-ano-ko-ni-natsukaretai', null, null, null, false, false);
    this.addSeries(raw.m163048, [cat.SCHOOL, cat.IDIOTS, cat.FOOD, cat.COMFY], 'https://mangadex.org/title/615123b3-b813-4d7d-8c72-eb5c4146d76e/sugar-meets-girl', 'https://dynasty-scans.com/series/sugar_meets_girl', null, 'Delinquents with a cute side are the peak of manga.', false, false);
    this.addSeries(raw.m114358, [cat.FANTASY, cat.SCHOOL, cat.COMFY, cat.IDIOTS], 'https://mangadex.org/title/2bdbbe03-bf39-4bac-86fe-b91e964f973a/oogami-san-and-cerberus', null, null, null, true, false);
    this.addSeries(raw.m111168, [cat.ADULT_LIFE, cat.DATING, cat.COMFY], 'https://mangadex.org/title/71a515ab-19b6-4839-9089-e4caac1f0628/handsome-girl-and-sheltered-girl', 'https://dynasty-scans.com/series/handsome_girl_and_sheltered_girl', 'https://sevenseasentertainment.com/series/handsome-girl-and-sheltered-girl-the-complete-manga-collection/', 'Another successful case of straight girl correction.', true, false);
    this.addSeries(raw.m184565, [cat.SCHOOL, cat.IDIOTS, cat.DATING], 'https://mangadex.org/title/30c8bf1c-9063-4a22-a845-e2cead50adea/yume-to-koi-dewa-tsuriawanai', 'https://dynasty-scans.com/series/love_and_dreams_dont_mix', null, 'Dear god she really is stupid.', false, false);
    this.addSeries(raw.m108919, [cat.WORK, cat.ADULT_LIFE, cat.COMFY, cat.DRAMA], 'https://mangadex.org/title/051e6a66-7373-4583-98b6-b746153041e9/doughnuts-under-a-crescent-moon', 'https://dynasty-scans.com/series/crescent_moon_and_doughnuts', 'https://sevenseasentertainment.com/series/doughnuts-under-a-crescent-moon/', null, true, false);
    this.addSeries(raw.m87449,  [cat.ADULT_LIFE, cat.MANGAKA, cat.COHAB, cat.DRAMA], 'https://mangadex.org/title/10db587f-a232-485d-b4a8-68ee0cb15e3c/2dk-g-pen-alarm-clock', 'https://dynasty-scans.com/series/2dk_g_pen_alarm_clock', null, 'There\'s an epilogue one-shot. Search for "2DK, G-pen, Aftertime"', true, false);
    this.addSeries(raw.m98533,  [cat.ADULT_LIFE, cat.WORK, cat.OTHER], 'https://mangadex.org/title/a9927dc3-b703-4ca0-8941-5f7ccbe61886/now-loading', 'https://dynasty-scans.com/series/now_loading', 'http://www.sevenseasentertainment.com/books/now-loading/', null, true, false);
    this.addSeries(raw.m136253, [cat.COMFY, cat.COHAB, cat.IDOL], 'https://mangadex.org/title/bc998000-171b-4fbe-9dd8-570e56c0845d/monthly-in-the-garden-with-my-landlord', 'https://dynasty-scans.com/series/maitsuki_niwatsuki_ooyatsuki', 'https://yenpress.com/series/monthly-in-the-garden-with-my-landlord', 'Where can I rent a cheap house that comes with a qt landlord gf included?', true, false, true);
    this.addSeries(raw.m149755, [cat.IDIOTS, cat.COHAB, cat.SCHOOL, cat.MANGAKA], 'https://mangadex.org/title/784e5923-15ce-470e-ba78-d2bf56252591/kyou-wa-mada-futsuu-ni-narenai', 'https://dynasty-scans.com/series/still_not_normal_today', null, null, true, false);
    this.addSeries(raw.m110194, [cat.ADULT_LIFE, cat.COMFY], 'https://mangadex.org/title/ee62fd10-303a-4a0e-b722-86cf8f7f1fd9/a-timid-woman-longing-for-her-delivery-girl', 'https://dynasty-scans.com/series/a_timid_woman_longing_for_her_delivery_girl', null, 'Very short and sweet', true, false);
    this.addSeries(raw.m139014, [cat.FOOD, cat.COMFY, cat.IDIOTS, cat.SUBTEXT, cat.COHAB], 'https://mangadex.org/title/1d87d7a5-edae-4f0e-a430-8893bb1255b1/take-responsibility-for-my-stomach', 'https://dynasty-scans.com/series/take_responsibility_for_my_stomach', null, null, true, false);
    this.addSeries(raw.m134668, [cat.ADULT_LIFE, cat.CLUB, cat.COUNTRY, cat.COHAB], 'https://mangadex.org/title/380d6b4d-f7e1-4080-98bd-92e0417a280c/tabimiman', null, null, 'Mangas about traveling around Japan are usually my favorites. You get to see places only a native would know, the hidden spots in the japanese countryside. If you like this manga, please check out <a href="/yuri/series/120067">"Futari Escape"</a>', true, false);
    this.addSeries(raw.m166692, [cat.ADULT_LIFE, cat.FOOD, cat.WORK], 'https://mangadex.org/title/e6ce1458-203c-4ed1-9fce-015b979bb581/3-pun-matte-mugi-senpai', null, null, 'This reads like the most blatant advertisment Big Food could come up with, but there\'s two girls so I\'ll take it.<br>Remember kids: cup noodles are bad for you, don\'t eat them regularly. Don\'t fall for the propaganda even if it comes in cute yuri form.', false, false);
    this.addSeries(raw.m110530, [cat.ADULT_LIFE, cat.STOCKHOLM, cat.COHAB], 'https://mangadex.org/title/5311ac6f-3651-43a8-bb9c-b40dea7ab72d/ichido-dake-demo-koukai-shitemasu', 'https://dynasty-scans.com/series/even_if_it_was_just_once_i_regret_it', 'https://sevenseasentertainment.com/series/i-cant-believe-i-slept-with-you/', 'Where can I rent an apartment that comes with a qt landlord gf who accepts cuddling as payment for rent?', true, false);
    this.addSeries(raw.m112621, [cat.SCHOOL, cat.COMFY, cat.STOCKHOLM], 'https://mangadex.org/title/d7576e72-0301-4ed3-9137-722ed768bfda/i-can-t-say-no-to-the-lonely-girl', 'https://dynasty-scans.com/series/cant_defy_the_lonely_girl', 'https://kodansha.us/series/i-cant-say-no-to-the-lonely-girl/', 'God bless yuri manga where every single member of the cast ends up with a girlfriend.', true, false);
    this.addSeries(raw.m103845, [cat.SCHOOL, cat.DRAMA, cat.STOCKHOLM], 'https://mangadex.org/title/a44afe37-24fd-44b8-874e-17e8a24ca3ca/dekisokonai-no-himegimi-tachi', 'https://dynasty-scans.com/series/useless_princesses', 'https://sevenseasentertainment.com/series/failed-princesses/', 'If only all bullies were like this', true, false);
    this.addSeries(raw.m108069, [cat.SCHOOL, cat.COMFY, cat.DEGEN, cat.STOCKHOLM], 'https://mangadex.org/title/af737f18-6d40-4537-b0e6-ad32f2054daa/hino-san-no-baka', 'https://dynasty-scans.com/series/hino_san_no_baka', null, null, true, false);
    this.addSeries(raw.m106067, [cat.COHAB, cat.STOCKHOLM, cat.COMFY], 'https://mangadex.org/title/81c8a94f-147c-4357-8713-4992b4202f70/want-to-sell-me-your-body', null, null, 'I\'d willingly get neck deep into debt with the yakuza if this is what happened after.', true, false);
    this.addSeries(raw.m177399, [cat.COMFY, cat.DRAMA, cat.STOCKHOLM, cat.DEGEN], 'https://mangadex.org/title/a72d5653-7238-40ba-8135-c93910a02bc4/shuu-ni-ichido-classmate-wo-kau-hanashi', 'https://dynasty-scans.com/series/a_story_about_buying_a_classmate_once_a_week_5000_yen_for_an_excuse_to_spend_time_together', null, 'The manga is extremely slow, but the web novel is being translated quickly.<br><br>Anyway, this is where I\'d say "Where do I find a Sendai-san for myself" but I\'m pretty sure it would be illegal.', false, false);
    this.addSeries(raw.m180856, [cat.IDIOTS, cat.SCHOOL, cat.STOCKHOLM], 'https://mangadex.org/title/62d99da1-33e7-45cf-98a2-ca4544fc0344/yuri-no-hajimari-wa-dorei-kara', null, null, 'The world record holder in the "Forget about the premise in the title" any% speedrun category.', false, false);
    this.addSeries(raw.m183605, [cat.COMFY, cat.STOCKHOLM, cat.SCHOOL], 'https://mangadex.org/title/d4e21c02-0549-48aa-ab50-5fec2c76f74c/kao-dake-yoi-classmate-ga-yatara-to-guigui-kuru-yuri-no-hanashi', null, null, 'This is the kind of NTR I can get behind', false, false);
    this.addSeries(raw.m120067, [cat.COMFY, cat.MANGAKA, cat.ADULT_LIFE, cat.COHAB], 'https://mangadex.org/title/7daf8dd0-6cc0-4b8f-8af0-a330af9a9bd5/futari-escape', 'https://dynasty-scans.com/series/futari_escape', 'https://sevenseasentertainment.com/series/futari-escape/', 'Where can I get a tiny fluffy freeloader gamer wife who takes me on trips around Japan?<br><br>This is one of the comfiest series there is.', true, false);
    this.addSeries(raw.m100187, [cat.COMFY, cat.SCHOOL, cat.CLUB, cat.SUBTEXT, cat.COUNTRY], 'https://mangadex.org/title/ba64bce2-ccc0-437c-87fc-aea738521e46/nettaigyo-wa-yuki-ni-kogareru', 'https://dynasty-scans.com/series/nettaigyo_wa_yuki_ni_kogareru', 'https://www.viz.com/a-tropical-fish-yearns-for-snow', 'I will forever be angry at the author for not committing to yuri. These girls are so obviously gay.', true, false);
    this.addSeries(raw.m53239,  [cat.COMFY, cat.SCHOOL, cat.SUBTEXT, cat.AGE_GAP], 'https://mangadex.org/title/e02f32f7-66d6-4eda-818e-a7e4e2c198a1/himawari-san', 'https://dynasty-scans.com/series/miss_sunflower', null, 'Super comfy!', true, false, true);
    this.addSeries(raw.m143147, [cat.ADULT_LIFE, cat.WORK, cat.FOOD], 'https://mangadex.org/title/cd8c0cda-debe-40e4-a0ea-462046a97697/kuchibeta-shokudou', 'https://dynasty-scans.com/series/restaurant_of_the_awkward_people', null, 'This is a pixiv series, so updates are very irregualar.', false, false);
    this.addSeries(raw.m138110, [cat.ADULT_LIFE, cat.WORK, cat.FOOD, cat.DRAMA, cat.SUPERNATURAL], 'https://mangadex.org/title/26074407-7b3b-4fc9-8c4b-03747e9380c0/alcohol-and-ogre-girls', 'https://dynasty-scans.com/series/alcohol_and_ogre_girls', null, 'WE ARE JAPANESE GOBURIN', false, false);
    this.addSeries(raw.m163156, [cat.ADULT_LIFE, cat.WORK, cat.SUBTEXT, cat.COHAB], 'https://mangadex.org/title/ff50351b-0f1d-4255-9479-9744f51c2d2c/the-pension-life-vampire', null, 'https://mangaplus.shueisha.co.jp/titles/100235', 'Kind of hard to read this one since it\'s exclusively on mangaplus. Vampires are cute though.', true, false);
    this.addSeries(raw.m70481,  [cat.SCHOOL, cat.COMFY, cat.IDIOTS], 'https://mangadex.org/title/9ad4148b-8c9e-48d5-89ec-e7b98a660e42/oomuro-ke', 'https://dynasty-scans.com/series/yuru_yuri_oomuro_ke', null, 'A Yuru Yuri spinoff full of idiots being idiots and the eternal mystery of who is Nadeshiko\'s girlfriend', false, false);
    this.addSeries(raw.m164704, [cat.COMFY, cat.FOOD, cat.SUBTEXT, cat.FANTASY], 'https://mangadex.org/title/b675f776-0acb-48ec-b86c-595cf757d8cb/okashi-na-elf-to-joshikousei', null, null, 'Cooking manga never disappoints.', true, false);
    this.addSeries(raw.m109895, [cat.COMFY, cat.MANGAKA, cat.IDIOTS, cat.SUPERNATURAL], 'https://mangadex.org/title/db28e73e-acc8-478b-8d47-c5dea79ffed2/maya-san-no-yofukashi', null, null, 'This is literally the discord voicechat experience, in yuri manga form.<br>If you enjoy this, check out <a href="/yuri/series/116981">"Food court de mata ashita"</a>', true, false);
    this.addSeries(raw.m116981, [cat.COMFY, cat.IDIOTS, cat.FOOD], 'https://mangadex.org/title/38f91d2c-b9f2-4a04-bcb5-5e2103f731d1/see-you-tomorrow-at-the-food-court', null, 'https://yenpress.com/titles/9781975342982-see-you-tomorrow-at-the-food-court', 'If you like this, check out <a href="/yuri/series/109895">"Maya-san no Yofukashi"</a>', false, false);
    this.addSeries(raw.m149760, [cat.COMFY, cat.COHAB, cat.SCIFI, cat.SUBTEXT], 'https://mangadex.org/title/ca1b75fe-66ed-4e0c-9893-89fffd3f4bef/bunnie-s-quest', null, null, 'bnuuy🐇', true, false);
    this.addSeries(raw.m109651, [cat.DRAMA, cat.IDOL, cat.STOCKHOLM], 'https://mangadex.org/title/7875975e-b88e-4629-9ea2-feb495b73793/your-true-color', 'https://dynasty-scans.com/series/your_true_color', null, 'Probably the best example of characters handlind drama like normal human beings', true, false);
    this.addSeries(raw.m133500, [cat.COHAB, cat.IDOL, cat.STOCKHOLM, cat.SUBTEXT], 'https://mangadex.org/title/b6784e2b-f31d-4f29-8dc7-7e2e414bbae1/oshi-ga-imouto-ni-narimashite', 'https://dynasty-scans.com/series/my_favorite_idol_became_my_little_sister', null, 'In hiatus, there is no information on why or how long.', false, false);
    this.addSeries(raw.m140060, [cat.COMFY, cat.MANGAKA, cat.IDIOTS, cat.IDOL], 'https://mangadex.org/title/65361a37-9f9a-4f95-92fa-d6810f0fab17/my-best-friend-who-i-love-fell-completely-in-love-with-my-vtuber-self', 'https://dynasty-scans.com/series/my_best_friend_who_i_love_fell_completely_in_love_with_my_vtuber_self', null, 'A pixiv series, expect irregular updates.', false, false);
    this.addSeries(raw.m117639, [cat.WORK, cat.IDOL, cat.SCHOOL, cat.STOCKHOLM, cat.SUBTEXT], 'https://mangadex.org/title/96335764-0c1f-4686-9193-b1c6bb537a71/seiyuu-radio-no-ura-omote', 'https://dynasty-scans.com/series/the_two_sides_of_seiyuu_radio', 'https://global.bookwalker.jp/series/498870/', null, false, false);
    this.addSeries(raw.m107987, [cat.SCHOOL, cat.DRAMA, cat.MUSIC], 'https://mangadex.org/title/0e8fac17-979e-4e37-8f45-2c334b25d6dd/whisper-me-a-love-song', 'https://dynasty-scans.com/series/whispering_you_a_love_song', 'https://kodansha.us/series/whisper-me-a-love-song/', 'Afflicted by the common yuri disease of "side couple is far better than the main couple"', false, false);
    this.addSeries(raw.m178230, [cat.SCHOOL, cat.MUSIC, cat.COMFY], 'https://mangadex.org/title/7e905fc7-d534-479e-9880-f89effbf30e2/kimi-ga-hoeru-tame-no-uta-wo', null, null, 'Officially abbreviated as Kimi Hoe, which is extremely unfortunate.', false, false);
    this.addSeries(raw.m156348, [cat.SCHOOL, cat.MUSIC, cat.SUBTEXT], 'https://mangadex.org/title/d1cf91fe-67cb-4ca0-bbba-8b35d896c649/rock-is-a-lady-s-modesty', 'https://dynasty-scans.com/series/rock_is_a_ladys_modesty', null, 'The gap moe of high class ladies violently jamming metal sure is something.', false, false);
    this.addSeries(raw.m161653, [cat.SCHOOL, cat.CLUB, cat.MUSIC, cat.DRAMA], 'https://mangadex.org/title/35afa4a9-0128-4e15-9801-c34d9e1b9f9a/kimi-no-tame-no-curtain-call', 'https://dynasty-scans.com/series/a_curtain_call_for_you', null, null, false, false);
    this.addSeries(raw.m64525,  [cat.COMFY, cat.WORK, cat.MUSIC], 'https://mangadex.org/title/31e57876-6edd-4e5e-8655-1f43b0c275dc/cirque-arachne', 'https://dynasty-scans.com/series/cirque_arachne', null, null, true, true);
    this.addSeries(raw.m130799, [cat.SCHOOL, cat.MUSIC, cat.CLUB, cat.SUBTEXT], 'https://mangadex.org/title/9b8e6611-73cd-4a50-883b-79ba99b7e4b3/finder-goshi-no-ano-ko', 'https://dynasty-scans.com/series/the_girl_through_the_viewfinder', null, null, true, false);
    this.addSeries(raw.m102813, [cat.MANGAKA, cat.COMFY, cat.SCHOOL], 'https://mangadex.org/title/84b201c9-5ce3-4016-964a-63f34cae127a/we-can-t-draw-love', 'https://dynasty-scans.com/series/we_cant_draw_love', null, null, true, false);
    this.addSeries(raw.m106232, [cat.MANGAKA, cat.ADULT_LIFE, cat.WORK, cat.DRAMA], 'https://mangadex.org/title/98c34d01-2f69-41f1-bd54-4e0c7d89ce18/still-sick', 'https://dynasty-scans.com/series/still_sick', 'https://comics.inkr.com/title/31-still-sick', 'Has an epilogue doujin, and the author has been drawing weekly short stories about these two in her fanbox ever since the manga ended. She\'s up to 160+ posts at this point.', true, false);
    this.addSeries(raw.m122344, [cat.FANTASY, cat.DRAMA, cat.ACTION], 'https://mangadex.org/title/46596dea-95de-40e8-b2b8-4e63aa6acd1a/the-magical-revolution-of-the-reincarnated-princess-and-the-genius-young-lady', 'https://dynasty-scans.com/series/the_magical_revolution_of_the_reincarnated_princess_and_the_genius_young_lady', 'https://yenpress.com/titles/9781975338688-the-magical-revolution-of-the-reincarnated-princess-and-the-genius-young-lady-vol-1-manga', 'The manga is kinda dead, so read the LN. The manga faces can\'t be beat though.', false, false);
    this.addSeries(raw.m118695, [cat.FANTASY, cat.DRAMA, cat.SCHOOL], 'https://mangadex.org/title/22d6d048-9f9f-4c3a-95c2-3b145f110e20/i-m-in-love-with-the-villainess', 'https://dynasty-scans.com/series/i_favor_the_villainess', 'https://sevenseasentertainment.com/series/im-in-love-with-the-villainess-manga/', null, false, false);
    this.addSeries(raw.m103608, [cat.FANTASY, cat.COMFY, cat.DRAMA], 'https://mangadex.org/title/ece511da-3461-421a-8275-7af48a642aa5/beauty-and-the-beast-girl', 'https://dynasty-scans.com/series/beauty_and_the_beast_girl', 'https://sevenseasentertainment.com/series/beauty-and-the-beast-girl/', 'There are several post-story doujins that expand on the ending.', true, false);
    this.addSeries(raw.m108440, [cat.FANTASY, cat.DEGEN, cat.DRAMA], 'https://mangadex.org/title/c431712b-231c-4d25-85fa-7ca6bf460f15/vampeerz', 'https://dynasty-scans.com/series/vampeerz', 'https://www.denpa.pub/manga/vampeerz-volume-1', 'God I love vampires so much', true, true);
    this.addSeries(raw.m106997, [cat.FANTASY, cat.DRAMA, cat.ACTION, cat.HORROR], 'https://mangadex.org/title/25e145f0-a74f-48b6-9d89-b715e28f6417/-omae-gotoki-ga-maou-ni-kateru-to-omou-na-to-yuusha-party-wo-tsuihou-sareta-node-outo-de-kimama-ni', null, 'https://sevenseasentertainment.com/series/roll-over-and-die-i-will-fight-for-an-ordinary-life-with-my-love-and-cursed-sword-manga/', 'Do yourself a favor and read the light novel instead, the manga isn\'t terrible but the storytelling was completely butchered.<br>The LN is amazing.', false, false);
    this.addSeries(raw.m119857, [cat.FANTASY, cat.DRAMA, cat.STOCKHOLM, cat.ACTION], 'https://mangadex.org/title/bed89b51-15d3-44a5-b27a-a13a2f9a6dd8/shokei-shoujo-no-ikiru-michi', 'https://dynasty-scans.com/series/the_executioner_and_her_way_of_life', 'https://yenpress.com/series/the-executioner-and-her-way-of-life-manga', 'Fan translations are dead, and the official translations are ahead, so read that if you can.', false, false);
    this.addSeries(raw.m135169, [cat.FANTASY, cat.SCHOOL], 'https://mangadex.org/title/014cc30b-d045-4f82-8c3e-e54d0fd8c8c0/blue-skin-big-tits-and-a-fucking-loner', 'https://dynasty-scans.com/series/blue_skin_big_tits_and_a_fucking_loner', null, 'In probably permanent hiatus, sadly. Leaving it here just in case, but I can\'t recommend reading it right now.', false, false);
    this.addSeries(raw.m114860, [cat.SCHOOL, cat.SUPERNATURAL, cat.COMFY], 'https://mangadex.org/title/5489ad21-86c7-4be5-be4c-428143b13536/kamitsuki-gakuen', 'https://dynasty-scans.com/series/kamitsuki_academy', null, 'That one girl with spiky hair and thick thighs makes me feel things.', false, false);
    this.addSeries(raw.m99544,  [cat.FANTASY, cat.COMFY, cat.GENDERBEND, cat.ACTION], 'https://mangadex.org/title/5eb1e122-f4bc-4b69-8ab1-906cdfb245a0/tensei-kyuuketsuki-san-wa-ohirune-ga-shitai', null, null, null, false, false);
    this.addSeries(raw.m104988, [cat.FANTASY, cat.ACTION], 'https://mangadex.org/title/5f89a11c-6fe5-43be-85dd-f13c771f0c0b/scarlet', 'https://dynasty-scans.com/series/scarlet', 'https://sevenseasentertainment.com/series/scarlet/', 'Official TLs are complete, so fan translators will probably never bother to finish.', true, true);
    this.addSeries(raw.m175145, [cat.FANTASY, cat.STOCKHOLM, cat.COHAB], 'https://mangadex.org/title/48de4f49-d7f9-4b0c-99f4-0929c2a9910b/gakeppuchi-reijou-wa-kurokishi-sama-o-horesasetai', 'https://dynasty-scans.com/series/i_want_to_make_black_knight_fall_in_love_with_me', null, '...big woman...', false, false);
    this.addSeries(raw.m148499, [cat.FANTASY, cat.DRAMA, cat.SCIFI, cat.ACTION], 'https://mangadex.org/title/21b848be-1bfe-4f97-b92c-62d319d8a093/onee-sama-to-kyojin-ojou-sama-ga-isekai-tensei', 'https://dynasty-scans.com/series/my_sister_and_giant_a_young_lady_is_reborn_in_another_world', 'https://yenpress.com/titles/9781975378660-sister-and-giant-a-young-lady-is-reborn-in-another-world-vol-1', 'This escalates so quickly I don\'t even know how to keep up with it. The world is fucking insane. Reminds me a lot of omaegotoki.', false, false);
    this.addSeries(raw.m181342, [cat.FANTASY, cat.IDIOTS, cat.ACTION], 'https://mangadex.org/title/bf22a4ae-1641-450a-9764-390ed70ff5dd/maides-maid-attacks-in-destiny', null, null, 'I\'m pretty sure this girl could summon me without any need to be in danger.', false, false);
    this.addSeries(raw.m105808, [cat.SCIFI, cat.STOCKHOLM, cat.COMFY, cat.COHAB], 'https://mangadex.org/title/098dfe5d-9b82-4d77-9145-a7a4e7b514f3/hero-san-to-moto-onna-kanbu-san', 'https://dynasty-scans.com/series/hero_san_and_former_general_san', 'https://sevenseasentertainment.com/series/superwomen-in-love-honey-trap-and-rapid-rabbit/', 'Undeniable proof that Super Sentai could be so much better', true, false);
    this.addSeries(raw.m154008, [cat.FANTASY, cat.WORK], 'https://mangadex.org/title/5ec0922a-4869-4e6b-a154-2307945cc406/genkai-ol-san-wa-akuyaku-reijou-sama-ni-tsukaetai', 'https://dynasty-scans.com/series/the_fed_up_office_lady_wants_to_serve_the_villainess', null, null, false, false);
    this.addSeries(raw.m165204, [cat.FANTASY, cat.OTHER], 'https://mangadex.org/title/49496e76-08b8-4d47-aced-a13f2f8d90a4/kiraware-majo-reijou-to-dansou-ouji-no-kon-yaku', null, null, null, false, false);
    this.addSeries(raw.m167017, [cat.DRAMA, cat.ADULT_LIFE, cat.WORK, cat.SCIFI], 'https://mangadex.org/title/b942b354-a7f3-4906-92e5-394949451058/twinstar-cyclone-runaway', 'https://dynasty-scans.com/series/twinstar_cyclone_runaway', null, 'Very strange worldbuidling, but an interesting concept (and there are gay girls)', false, false);
    this.addSeries(raw.m136921, [cat.SUPERNATURAL, cat.DEGEN, cat.COHAB], 'https://mangadex.org/title/f0f4bb91-563d-49cd-b6b4-22de131638dd/okiku-san-wa-ichatsukitai', 'https://dynasty-scans.com/series/okiku_san_wa_ichatsukitai', null, 'Where can I get a horny ghost wife', false, true);
    this.addSeries(raw.m171729, [cat.FANTASY, cat.DRAMA, cat.WORK], 'https://mangadex.org/title/cb1b1da5-9436-49f5-8a6b-a1689fb86d91/love-bullet', 'https://dynasty-scans.com/series/love_bullet', null, null, false, false);
    this.addSeries(raw.m175451, [cat.FANTASY, cat.SCHOOL, cat.OTHER], 'https://mangadex.org/title/8a889112-f43a-4960-8fb8-68bec0bd85cf/gyaru-maid-to-akuyaku-reijou-ojou-sama-no-happy-end-shika-katan', 'https://dynasty-scans.com/series/gal_maid_villainess_only_miladys_happy_end_will_win', null, null, false, false);
    this.addSeries(raw.m178107, [cat.FANTASY, cat.DRAMA, cat.COHAB], 'https://mangadex.org/title/be314f77-95d8-4722-8369-7ae6cb1a536b/muryoku-seijo-to-munou-oujo-maryoku-zero-de-shoukansareta-seijo-no-isekai-kyuukokuki', 'https://dynasty-scans.com/series/the_helpless_saint_and_the_powerless_princess', null, 'The witch is best girl by far. No contest.', false, false);
    this.addSeries(raw.m151254, [cat.SCIFI, cat.DRAMA, cat.COHAB], 'https://mangadex.org/title/21699dbf-c427-41d8-bbcf-c7cbd1755615/erio-and-the-electric-doll', null, null, 'Quite an interesting postapocalyptic concept', false, false);
    this.addSeries(raw.m183115, [cat.FANTASY, cat.STOCKHOLM, cat.ACTION], 'https://mangadex.org/title/9957c35e-06e1-4b4b-875e-6a3a01e29582/eiyuu-ni-akogareta-shoujo-wa-kyuuketsuki-ni-ochitemo-eiyuu-o-mezasu', null, null, 'GOD I LOVE LESBIAN VAMPIRES SO MUCH IT\'S UNREAL', false, false);
    this.addSeries(raw.m182947, [cat.IDIOTS, cat.SUPERNATURAL, cat.STOCKHOLM], 'https://mangadex.org/title/6f85c1da-c739-4a62-a3eb-53e072ec582e/wicked-spot', 'https://dynasty-scans.com/series/wicked_spot', null, 'These witches aren\'t the cute big hat type, and it makes me sad.', false, false);
    this.addSeries(raw.m134480, [cat.FANTASY, cat.COHAB, cat.STOCKHOLM, cat.TOXIC], 'https://mangadex.org/title/a1123ba9-142e-46be-8612-2caf46c24aa4/you-are-my-angela', 'https://dynasty-scans.com/series/you_are_my_angela', null, 'I want a fluffy angel gf too... it\'s unfair bros...', true, false);
    this.addSeries(raw.m181072, [cat.FANTASY, cat.ACTION], 'https://mangadex.org/title/56504d3e-3ceb-44e5-811c-0293f1919042/suterare-elf-san-wa-sekai-de-ichiban-tsuyokute-kawaii', null, null, 'Is getting a fluffy foxgirl loving wife as easy as asking god for one to your specifications?', false, false);
    this.addSeries(raw.m104641, [cat.AGE_GAP, cat.COMFY, cat.DATING], 'https://mangadex.org/title/1e7e58d3-7cea-4aff-918d-62faecd8fe7d/itoshi-koishi', 'https://dynasty-scans.com/series/itoshi_koishi', null, null, true, false);
    this.addSeries(raw.m106785, [cat.AGE_GAP, cat.MANGAKA], 'https://mangadex.org/title/4bc3e522-0301-467e-827c-eb2984ec8a79/kami-eshi-jk-to-ol-fujoshi', 'https://dynasty-scans.com/series/kami_eshi_jk_to_ol_fujoshi', 'https://comics.inkr.com/title/2512-drawn-together', 'Fujos are the absolute worst', true, false, true);
    this.addSeries(raw.m175415, [cat.AGE_GAP, cat.SCHOOL, cat.COMFY], 'https://mangadex.org/title/a6246828-0577-4aaf-9478-371b52e6634d/sabori-nara-hokenshitsu-de-douzo', 'https://dynasty-scans.com/series/wanna_skip_school_in_the_infirmary', null, null, false, false);
    this.addSeries(raw.m146682, [cat.STOCKHOLM, cat.COHAB, cat.TOXIC, cat.AGE_GAP], 'https://mangadex.org/title/e3fa25bc-23eb-46c3-af17-36ec9200456e/keiyaku-shimai', 'https://dynasty-scans.com/series/contract_sisters', null, 'Teenage raging lesbians in yuri have one of two origin stories: Either they were groomed by their big sister, or they were groomed by an adult predator in middle school. There\'s literally no middle ground, and it makes me worry about the japanese society.', false, false);
    this.addSeries(raw.m178111, [cat.HISTORY, cat.DRAMA, cat.AGE_GAP], 'https://mangadex.org/title/2c09cfd3-060e-4c02-8055-f7c2d51a28de/kanaria-wa-kiraboshi-no-yume-wo-miru', 'https://dynasty-scans.com/series/canaries_dream_of_shining_stars', null, 'There\'s something special about the aesthetics of the Taisho period I can\'t quite describe. And when it comes to yuri, the historical context for lesbian relationships in that era of japan is as interesting as it is fucked up, so google it if you want a small lesson in history and how not to handle your daughter if you want her not to kill herself.', false, false);
    this.addSeries(raw.m121249, [cat.STOCKHOLM, cat.SUBTEXT, cat.DEGEN, cat.SCHOOL], 'https://mangadex.org/title/c16a96d3-75aa-4617-a535-4f0ffe1e95c5/yuugai-shitei-doukyuusei', 'https://dynasty-scans.com/series/yuugai_shitei_doukyuusei', null, null, true, true);
    this.addSeries(raw.m122838, [cat.DEGEN, cat.SCHOOL, cat.SUPERNATURAL], 'https://mangadex.org/title/b33f9172-e4a0-4abf-90a2-16d7bbcd33e9/watashi-wa-succubus-to-kiss-o-shita', 'https://dynasty-scans.com/series/i_kissed_a_succubus', null, 'Content warning: Thristy lolis', true, false);
    this.addSeries(raw.m120112, [cat.COHAB, cat.ADULT_LIFE, cat.DEGEN], 'https://mangadex.org/title/af66b380-623e-4dfc-9fbb-8ca093b9d5a9/asumi-chan-is-interested-in-lesbian-brothels', 'https://dynasty-scans.com/series/asumi_chan_is_interested_in_lesbian_brothels', 'https://sevenseasentertainment.com/series/asumi-chan-is-interested-in-lesbian-brothels/', 'If this isn\'t the peak of yuri then I do not know what is.', false, true);
    this.addSeries(raw.m103310, [cat.DEGEN, cat.SCIFI, cat.SCHOOL], 'https://mangadex.org/title/99293af2-7810-4e30-9a13-d12306b05b91/mimi-mix', 'https://dynasty-scans.com/series/mimi_mix', null, null, true, false);
    this.addSeries(raw.m136739, [cat.DEGEN, cat.ADULT_LIFE, cat.IDIOTS], 'https://mangadex.org/title/34d4ed85-1fe3-4f4f-914d-4bde5217a0f5/a-lonely-female-ceo-falls-for-a-lesbian-prostitute-in-seconds', 'https://dynasty-scans.com/series/a_story_about_a_very_lonely_female_ceo_who_falls_for_a_lesbian_prostitute_in_seconds', null, null, true, false);
    this.addSeries(raw.m134443, [cat.DEGEN, cat.SUPERNATURAL, cat.AGE_GAP], 'https://mangadex.org/title/d0a48877-176b-4f60-8f4d-2ae47fbb2e9c/toshishita-no-senpai', 'https://dynasty-scans.com/series/my_younger_senpai', null, null, true, true);
    this.addSeries(raw.m152703, [cat.DEGEN, cat.ADULT_LIFE, cat.CLUB, cat.IDIOTS], 'https://mangadex.org/title/73962987-7e02-4126-8405-4d75c2188d7f/tada-de-wa-dakaremasen', 'https://dynasty-scans.com/series/i_wont_sleep_with_you_for_free', null, 'The japanese penal code defines prostitution as the exchange of sexual acts for money between unacquainted individuals, therefore, since everyone makes sure to get acquainted with our MC before doing the deed, we can safely determine no illegal activity is taking place in this manga. Nobody is pimping anyone out either since the organizer isn\'t taking a cut of the payments. See? Only legal, harmless fun in my christian manga.', false, true);
    this.addSeries(raw.m109056, [cat.DEGEN, cat.DRAMA, cat.DEPRESSO, cat.AGE_GAP, cat.TOXIC], 'https://mangadex.org/title/d461ebbe-5043-42bb-8c99-acdea0715be7/warikitta-kankei-desukara', 'https://dynasty-scans.com/series/its_a_detached_relationship', null, 'Very rare case where I actually liked the yaya. She was a good girl', true, true);
    this.addSeries(raw.m100209, [cat.DEGEN, cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/af906856-ef0c-4c7a-aa61-27edebe9e834/sekai-de-ichiban-oppai-ga-suki', 'https://dynasty-scans.com/series/sekai_de_ichiban_oppai_ga_suki', 'https://yenpress.com/titles/9781975310035-breasts-are-my-favorite-things-in-the-world-vol-1', null, true, true);
    this.addSeries(raw.m109017, [cat.FANTASY, cat.DEGEN, cat.STOCKHOLM, cat.IDIOTS, cat.ACTION], 'https://mangadex.org/title/feff4eaf-01df-4a05-83f4-68bb5cdf4fad/mahou-shoujo-ni-akogarete', 'https://dynasty-scans.com/series/looking_up_to_magical_girls', 'https://j-novel.club/series/gushing-over-magical-girls', 'No comment. I know my Miranda rights.', false, true, true);
    this.addSeries(raw.m98892,  [cat.SCHOOL, cat.DEGEN, cat.IDIOTS], 'https://mangadex.org/title/37e6a45f-3eda-4f27-93d0-84ec8e8c34a7/shouraiteki-ni-shinde-kure', 'https://dynasty-scans.com/series/shouraiteki_ni_shindekure', null, null, false, false);
    this.addSeries(raw.m85281,  [cat.ACTION, cat.DEGEN, cat.DRAMA, cat.SCIFI], 'https://mangadex.org/title/cd355881-6f89-4917-9a57-fc9f75377293/murcielago', 'https://dynasty-scans.com/series/murcielago', 'https://yenpress.com/series/murcielago', 'This is just an amazing action packed gore mystery scifi crime mafia supernatural series where the protagonist just so happen to be a lesbian. Official TLs are up to volume 24, so read it from there if you like what you see.', false, true);
    this.addSeries(raw.m110396, [cat.TOXIC, cat.DEGEN, cat.DEPRESSO, cat.STOCKHOLM, cat.PSYCHO], 'https://mangadex.org/title/25632c2e-90d3-4a9f-9cfd-3132d52ca5ee/kitanai-kimi-ga-ichiban-kawaii', 'https://dynasty-scans.com/series/kitanai_kimi_ga_ichiban_kawaii', null, 'This is the most sick and twisted yuri I\'ve ever read and yet I can\'t take my eyes off it. Give it a shot, at your own risk.', true, true, true);
    this.addSeries(raw.m141152, [cat.IDIOTS, cat.SCHOOL, cat.DEGEN, cat.DRAMA], 'https://mangadex.org/title/0e6c8a1b-df05-43b0-8f15-14ef8b41867f/kaguhara-san-s-fetish-notebook', 'https://dynasty-scans.com/series/kaguharas_fetish_notebook', null, 'Read at your own risk, it\'s more funny than anything, but the fetishes in question aren\'t for everybody.', false, true);
    this.addSeries(raw.m165205, [cat.DEGEN, cat.DRAMA, cat.STOCKHOLM, cat.PSYCHO, cat.IDOL], 'https://mangadex.org/title/9f78bb87-b2d9-4e2c-b9fe-7e07b481d8ca/utsushicha-dame-na-kao', 'https://dynasty-scans.com/series/a_face_you_shouldnt_show', null, null, false, true);
    this.addSeries(raw.m136508, [cat.DEGEN, cat.SCIFI, cat.IDIOTS], 'https://mangadex.org/title/143a116f-8e1d-4f9b-9794-9fb8fc8f56dc/android-wa-keiken-ninzuu-ni-hairimasu-ka', 'https://dynasty-scans.com/series/does_it_count_if_your_first_time_is_with_an_android', 'https://sevenseasentertainment.com/series/does-it-count-if-you-lose-your-virginity-to-an-android/', null, false, true);
    this.addSeries(raw.m170101, [cat.DEGEN, cat.PSYCHO, cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/264cb3ba-2d14-45c6-a15a-f6e46c54fe6a/kiyota-san-wa-yogosaretai', null, null, 'Does this count as shock therapy?', false, true);
    this.addSeries(raw.m181042, [cat.DRAMA, cat.DEGEN, cat.CLUB], 'https://mangadex.org/title/6079d103-113b-45b4-a76b-8750842b0770/bokura-no-ai-wa-kimochi-warui', 'https://dynasty-scans.com/series/our_love_is_disgusting', null, 'Remember Usui Shio? The author of the super comfy series? Someone decided that she should write about degenerates with insane fetishes.', false, true);
    this.addSeries(raw.m132041, [cat.SCHOOL, cat.STOCKHOLM, cat.DEGEN], 'https://mangadex.org/title/86d4b7bc-c4eb-4bb6-810e-9e884a41321a/yuri-love-slave-futari-dake-no-houkago', null, null, null, true, true);
    this.addSeries(raw.m130551, [cat.DEGEN, cat.AGE_GAP, cat.DRAMA], 'https://mangadex.org/title/093a607f-5e60-454c-ad23-16797e6bec4b/hitozuma-to-jk', null, null, 'Don\'t fuck your best friend\'s mom, bros.', false, true, true);
    this.addSeries(raw.m97708,  [cat.COHAB, cat.DEPRESSO, cat.AGE_GAP, cat.SUBTEXT], 'https://mangadex.org/title/6204ff54-c3d5-4645-b21f-f83f6fa303d0/ani-no-yome-to-kurashite-imasu', 'https://dynasty-scans.com/series/living_with_my_brothers_wife', 'https://global.manga-up.com/manga/33', 'The official TLs are ahead, and probably will be forever.', false, false);
    this.addSeries(raw.m123777, [cat.DEPRESSO, cat.SCHOOL, cat.SUPERNATURAL, cat.DRAMA, cat.COUNTRY], 'https://mangadex.org/title/48863213-086b-4dfb-8103-8e279b8e5f5d/this-monster-wants-to-eat-me', 'https://dynasty-scans.com/series/a_monster_wants_to_eat_me', 'https://yenpress.com/series/this-monster-wants-to-eat-me', 'fox girls... but fish women aren\'t half bad either...', false, false);
    this.addSeries(raw.m150492, [cat.DEPRESSO, cat.PSYCHO, cat.SUPERNATURAL, cat.DRAMA, cat.WTF], 'https://mangadex.org/title/2b97ff16-1fe0-4382-91aa-956112799e9b/wasureenu-majo-no-monogatari', 'https://dynasty-scans.com/series/the_story_of_unforgettable_witch', null, 'This one is just insanely good, and hard to describe. Give it a read, you won\'t regret it.', false, false);
    this.addSeries(raw.m87256,  [cat.DEPRESSO, cat.PSYCHO], 'https://mangadex.org/title/f61c07a8-f963-49ec-9760-51c8dfeba0ed/dark-forest-white-road', 'https://dynasty-scans.com/series/dark_forest_white_road', null, null, true, false);
    this.addSeries(raw.m161477, [cat.DRAMA, cat.PSYCHO, cat.SCHOOL, cat.STOCKHOLM, cat.DEPRESSO, cat.TOXIC], 'https://mangadex.org/title/eac0159f-2768-49d7-8891-4202f3e9fb8c/zenbu-kowashite-jigoku-de-aishite', null, null, 'Toxic as hell, but not in the way you think at first.', false, false);
    this.addSeries(raw.m135802, [cat.DRAMA, cat.STOCKHOLM, cat.DATING, cat.SCHOOL], 'https://mangadex.org/title/215e3ced-247e-4f34-8e1a-27b60ffef8ac/my-girlfriend-s-not-here-today', 'https://dynasty-scans.com/series/my_girlfriends_not_here_today', 'https://sevenseasentertainment.com/series/my-girlfriends-not-here-today/', 'Probably the only cheating story where you genuinely can\'t decide which one of the three girls is the biggest piece of shit.', false, true);
    this.addSeries(raw.m110670, [cat.DRAMA, cat.TOXIC, cat.ONESHOT, cat.PSYCHO], 'https://mangadex.org/title/b5d59d37-2836-4d5c-a094-223ee83c4774/watashi-wo-hitorijime-ni-shite', 'https://dynasty-scans.com/anthologies/watashi_wo_hitorijime_ni_shite', null, null, true, false);
    this.addSeries(raw.m157513, [cat.DRAMA, cat.TOXIC, cat.STOCKHOLM, cat.IDOL, cat.IDIOTS], 'https://mangadex.org/title/c7cc0e57-aa04-42d7-a726-822f66718a35/herami-shimai-wa-docchi-mo-yanderu', null, null, 'I can fix them', false, false);
    this.addSeries(raw.m120054, [cat.PSYCHO, cat.DRAMA, cat.TOXIC, cat.STOCKHOLM, cat.IDOL, cat.SUPERNATURAL], 'https://mangadex.org/title/8c975da1-1841-47a8-a89a-33994079137a/kono-ai-wo-owarasete-kurenai-ka', null, null, null, false, false);
    this.addSeries(raw.m155696, [cat.TOXIC, cat.IDOL, cat.DRAMA], 'https://mangadex.org/title/de348b34-9397-42db-9fa4-ac542e7ab9b4/aishita-bundake-aishite-hoshii', 'https://dynasty-scans.com/series/love_me_like_i_do', null, null, false, false);
    this.addSeries(raw.m170798, [cat.TOXIC, cat.DRAMA, cat.PSYCHO, cat.ONESHOT], 'https://mangadex.org/title/fb3fee79-d1fc-4f78-9b99-9685c19b1b86/kedamono-no-uta', null, null, null, true, false);
    this.addSeries(raw.m107614, [cat.TOXIC, cat.DRAMA, cat.PSYCHO, cat.ONESHOT, cat.HORROR], 'https://mangadex.org/title/14c52e83-8922-4910-8131-5fd39739f304/you-are-still-in-a-bird-cage', null, null, 'Waiter! Waiter! More [insane girls] please!', true, false);
    this.addSeries(raw.m106181, [cat.TOXIC, cat.DRAMA, cat.IDIOTS, cat.SCHOOL, cat.PSYCHO], 'https://mangadex.org/title/8cc8a484-e0f0-4294-8db3-c02107a09e80/sazi-chan-no-yami-nikki', null, null, 'Mostly a comedy 4koma, except when shit actually hits the fan.<br><br>No you can\'t fix her.', true, false);
    this.addSeries(raw.m136109, [cat.SCHOOL, cat.DRAMA, cat.CLUB, cat.COMFY], 'https://mangadex.org/title/c8a0426d-539b-4f6a-9537-fbccf4962529/the-moon-on-a-rainy-night', 'https://dynasty-scans.com/series/the_moon_on_a_rainy_night', 'https://kodansha.us/series/the-moon-on-a-rainy-night', 'This is one of my all time favorites. A masterful slowburn with not a single panel wasted, and a masterclass in character development.<br>The official TL is very high quality, so if you can, read that. Some chapters aren\'t available online, so you\'ll have to.', false, false);
    this.addSeries(raw.m117620, [cat.DEPRESSO, cat.CLUB, cat.DRAMA, cat.DATING], 'https://mangadex.org/title/6ecc62e4-25ad-4102-b0d8-580a8023d2fb/the-summer-you-were-there', 'https://dynasty-scans.com/series/kimi_to_tsuzuru_utakata', 'https://sevenseasentertainment.com/series/the-summer-you-were-there/', 'A beautiful, slow burning tragedy about redemption, acceptance and leaving the past behind.', true, false);
    this.addSeries(raw.m166947, [cat.DRAMA, cat.SUPERNATURAL, cat.DEPRESSO, cat.ADULT_LIFE, cat.COHAB, cat.AGE_GAP], 'https://mangadex.org/title/3f812d80-7eb6-46ea-98e4-77ca4f097727/sankakkei-no-kowashi-kata', 'https://dynasty-scans.com/series/how_to_break_a_triangle', null, null, false, false);
    this.addSeries(raw.m158108, [cat.DRAMA, cat.ADULT_LIFE, cat.WORK], 'https://mangadex.org/title/36bd3ec2-b2a0-4131-8412-82e3e0588134/pinky-candy-kiss', 'https://dynasty-scans.com/series/pinky_candy_kiss', 'https://www.amazon.com/Pink-Candy-Kiss-Vol-1-ebook/dp/B0D61KYKY5', null, false, false);
    this.addSeries(raw.m159925, [cat.DRAMA, cat.MUSIC], 'https://mangadex.org/title/6fc1c54b-7285-4a51-8c8b-22838f04eb26/kono-koi-wo-hoshi-ni-wa-negawanai', 'https://dynasty-scans.com/series/there_is_no_love_wishing_upon_a_star', null, 'Melodramatic as hell, but in the good way', false, false);
    this.addSeries(raw.m164970, [cat.DRAMA, cat.HISTORY, cat.ADULT_LIFE, cat.COUNTRY, cat.COMFY, cat.DATING, cat.STOCKHOLM], 'https://mangadex.org/title/553e4088-d5e3-44e7-ad71-0c3436409376/itsuwari-no-marigold', 'https://dynasty-scans.com/series/false_marigold', null, null, true, false);
    this.addSeries(raw.m111970, [cat.DRAMA, cat.HISTORY, cat.PSYCHO, cat.COMFY], 'https://mangadex.org/title/3e7cd288-b982-45c5-bcae-f9fa7e902c4d/goodbye-my-rose-garden', null, 'https://sevenseasentertainment.com/series/goodbye-my-rose-garden/', 'Fully translated by fans, but the official release has much better image quality. Read that one, if you can.', true, false);
    this.addSeries(raw.m172436, [cat.DRAMA, cat.ADULT_LIFE, cat.COUNTRY], 'https://mangadex.org/title/2917010b-61f5-4dd0-b861-a10362d8ab9b/my-blue-garnet', 'https://dynasty-scans.com/series/my_blue_garnet', null, 'Don\'t a woman with this much baggage, even if she\'s super hot.', false, false);
    this.addSeries(raw.m143535, [cat.DRAMA, cat.ADULT_LIFE, cat.WORK, cat.DEPRESSO, cat.COUNTRY], 'https://mangadex.org/title/13ecfc67-9481-4045-974a-292c81288077/brides-of-iberis', 'https://dynasty-scans.com/series/brides_of_iberis', null, 'A bullet was dodged in this manga', true, false);
    this.addSeries(raw.m178728, [cat.COMFY, cat.WORK, cat.SCHOOL, cat.FOOD, cat.DRAMA], 'https://mangadex.org/title/cde5424f-02e5-4c90-a433-b92d831d9856/kimi-meku-yoru-ni-kogarete', null, null, 'I don\'t have the words to describe what the atmosphere in this manga transmits. It\'s relaxing, comforting, definitely one of the comfiest mangas I\'ve read.', false, false);
    this.addSeries(raw.m114970, [cat.DRAMA, cat.COMFY, cat.SCHOOL], 'https://mangadex.org/title/e30c2d88-3c91-4166-91be-9ee38bfe94fe/goukaku-no-tame-no-yasashii-sankaku-kankei-nyuumon', 'https://dynasty-scans.com/series/an_easy_introduction_to_love_triangles_to_pass_the_exam', null, 'Maybe poly is good too...', true, false);
    this.addSeries(raw.m116918, [cat.IDIOTS, cat.DATING, cat.SUPERNATURAL], 'https://mangadex.org/title/f98660a1-d2e2-461c-960d-7bd13df8b76d/kanojo-to-himitsu-to-koimoyou', null, null, null, true, false);
    this.addSeries(raw.m127894, [cat.SCHOOL, cat.COUNTRY, cat.COMFY, cat.DRAMA, cat.COHAB], 'https://mangadex.org/title/9faba8cf-60df-4894-9370-22571592c8d3/ano-koro-no-aoi-hoshi', 'https://dynasty-scans.com/series/the_blue_star_on_that_day_ano_koro_no_aoi_hoshi', null, 'Self-published, so expect irregular updates and more irregular translations.', false, false);
    this.addSeries(raw.m120968, [cat.SUPERNATURAL, cat.SCHOOL, cat.COMFY], 'https://mangadex.org/title/df715a94-a013-4d5d-a7d5-f7f2f778d09d/moshi-koi-ga-mieta-nara', 'https://dynasty-scans.com/series/if_you_could_see_love', 'https://yenpress.com/series/if-you-could-see-love', null, true, false);
    this.addSeries(raw.m155090, [cat.IDIOTS, cat.SCHOOL, cat.OTHER], 'https://mangadex.org/title/0081e3dd-bf93-4bd4-aa95-3e8c0f1dfa31/snow-thaw-love-letter', 'https://dynasty-scans.com/series/snow_thaw_love_letter', null, null, false, false);
    this.addSeries(raw.m167186, [cat.SCIFI, cat.DRAMA, cat.DEPRESSO, cat.IDIOTS], 'https://mangadex.org/title/a4242f1e-4fae-4dd5-a985-2236e5de0db3/android-wa-jiraikei-no-yume-wo-miru', null, null, 'Jirai kei robot gf... where do I get one...', false, false);
    this.addSeries(raw.m113658, [cat.COMFY, cat.CLUB, cat.DRAMA, cat.COUNTRY], 'https://mangadex.org/title/43df19d5-0990-46ec-9367-ea29c502e7bb/ame-demo-hare-demo', 'https://dynasty-scans.com/series/come_rain_or_shine', null, 'I still don\'t understand what the author was trying to do with Nekozaki, but it\'s a cute manga so whatever.', true, false);
    this.addSeries(raw.m69959,  [cat.DEPRESSO, cat.HORROR, cat.SUBTEXT, cat.PSYCHO, cat.WTF], 'https://mangadex.org/title/0717cb7b-b36f-49df-baa5-70a8006099b7/the-bones-of-an-invisible-person', null, null, 'Reflective, introspective; a drama about guilt and paying the just price for one\'s sins.', true, false);
    this.addSeries(raw.m139328, [cat.WTF, cat.SCIFI, cat.PSYCHO], 'https://mangadex.org/title/2a9acae2-48f7-42ce-a58d-3a20c8e72ecf/lily-system', 'https://dynasty-scans.com/series/lily_system', null, 'Everything Yoshitomi Akihito writes is esoteric as fuck in one way or another, but this one takes the cake.<br>If you enjoy this, read "School Ningyo", which isn\'t 100% yuri but is one of his best works.', true, false);
    this.addSeries(raw.m140285, [cat.WTF, cat.COMFY, cat.SUPERNATURAL], 'https://mangadex.org/title/e2f337f9-fe7c-4ff8-8d72-839a31d88caa/usagi-no-furafura', 'https://dynasty-scans.com/series/usagi_no_furafura_1', null, 'I wish I could tell you what this manga is supposed to be about.<br>I don\'t think the author herself knows.', true, false);
    this.addSeries(raw.m121550, [cat.HORROR, cat.PSYCHO, cat.SUPERNATURAL, cat.DRAMA], 'https://mangadex.org/title/f48398c1-264f-4b42-82b8-9bb979cf8a7b/kimi-ga-niku-ni-nattemo', null, null, 'As short as it is great.', true, false);
    this.addSeries(raw.m104403, [cat.COUNTRY, cat.SUPERNATURAL, cat.DRAMA], 'https://mangadex.org/title/c014afcd-ec06-4d97-8a9e-c6f3ef9be950/kaijuu-iro-no-shima', 'https://dynasty-scans.com/series/kaijuu_iro_no_shima', null, null, false, false);
    this.addSeries(raw.m112919, [cat.SUPERNATURAL, cat.FANTASY, cat.IDIOTS, cat.ACTION, cat.WTF], 'https://mangadex.org/title/109cf150-2ec3-4e34-9ecf-ce928e484f43/beni-tsubaki', null, null, 'Did you ever want to see every single mythological creature of every culture seduced by a thirsty woman? Wait no more!', false, true);
    this.addSeries(raw.m66267,  [cat.GENDERBEND, cat.PSYCHO, cat.DRAMA, cat.WTF, cat.DEPRESSO], 'https://mangadex.org/title/fdfc9ba2-b21c-4f37-b5bf-4382f3d1318f/inside-mari', null, 'https://denpa.pub/manga/inside-mari-volume-1', 'Unlike the fan TL, the official release is complete.', true, true);
    this.addSeries(raw.m169154, [cat.WTF, cat.SUPERNATURAL, cat.SCHOOL, cat.PSYCHO], 'https://mangadex.org/title/be5a9292-79c6-4db1-8a30-9e5e6b3d8f64/normality-and-monsters', 'https://dynasty-scans.com/series/normality_and_monsters', null, null, false, false);
    this.addSeries(raw.m173281, [cat.WTF, cat.IDIOTS, cat.SCHOOL, cat.STOCKHOLM], 'https://mangadex.org/title/3d287418-9bd7-4bf4-b71b-1c4512812a50/oshi-to-no-yuri-wa-arienai', null, null, 'Everyone in this manga is insane, including the author and editor.', false, false);
    this.addSeries(raw.m178235, [cat.WTF, cat.DRAMA, cat.WORK, cat.HORROR], 'https://mangadex.org/title/b072ab0b-c8cb-40ed-a0d2-bf1169bf14c7/sugar-girl-drip', null, null, 'I wish all maid cafés were like this.', false, false);
    this.addSeries(raw.m157512, [cat.WTF, cat.HORROR, cat.DRAMA, cat.PSYCHO], 'https://mangadex.org/title/56958579-6d1b-4db0-be4f-dd17b828fcf7/in-the-gardens-of-gehenna', 'https://dynasty-scans.com/series/in_the_gardens_of_gehenna', null, 'Read at your own risk, kinda. It\'s a fucked up story.', true, false);
    this.addSeries(raw.m110278, [cat.WTF, cat.COHAB, cat.DRAMA, cat.SCIFI], 'https://mangadex.org/title/b2c9719b-4be0-4bfb-84dc-0cca9b83b3b2/twenty-lillies', null, null, 'Three for the price of one, all of them weird as hell but strangely sweet.', true, false);
    this.addSeries(raw.m164160, [cat.WTF, cat.DRAMA, cat.SCHOOL, cat.PSYCHO, cat.SUPERNATURAL], 'https://mangadex.org/title/02efd1cb-45bc-4fd2-b34b-73e644e7b4f6/outsider-paradise', null, null, 'This is a spinoff of Asobi Asobase, and it requires reading the 15 volumes of that manga in order to being to understand what the hell is going on here. The mindfuckery and weird mystery is completely worth it.', false, false);
    this.addSeries(raw.m138135, [cat.ONESHOT, cat.WTF, cat.PSYCHO, cat.HORROR], 'https://mangadex.org/title/8cd63fa3-b3d9-4f80-a06d-cbd408af3c2d/mugen-tengoku', null, null, 'If you enjoy this masterpiece, make sure to check out the rest of Shino Ura\'s oneshots, collected in two anthologies: <a href="https://mangadex.org/title/52356b1b-e3a9-4fff-8b52-75f421099861/yuugai-muzai-gangu" target="_blank">"Toys Harmful But Unprohibited"</a> and <a href="https://mangadex.org/title/070feaba-70fc-41af-9871-5b80825f78dc/gishi-sanjinden" target="_blank">"Falsified History of the Sanjin"</a>. All of them are equally as strange, original and insane, and they\'re amazing.', true, false);
    this.addSeries(raw.m110604, [cat.WTF, cat.DRAMA, cat.PSYCHO, cat.HORROR, cat.ONESHOT, cat.ANTHOLOGY], 'https://mangadex.org/title/f656f7e1-78fb-4ff6-a95c-58c68ad1d6a7/kimi-no-kureru-mazui-ame', null, null, 'An anthology of Fuyumushi Kaiko\'s oneshots. Strange and esoteric, and at times horrifying.', true, false);
    this.addSeries(raw.m172437, [cat.COHAB, cat.SCIFI, cat.AGE_GAP, cat.COMFY], 'https://mangadex.org/title/71d6899a-0e57-4bf5-a78c-9a5372895fec/oshikake-nyobo-kodomo-tsuki', 'https://dynasty-scans.com/series/uninvited_wife_with_child', null, 'Makes you want to have kids until you remember how annoying real kids are.', false, false);
    this.addSeries(raw.m177537, [cat.IDIOTS, cat.SCHOOL, cat.CLUB], 'https://mangadex.org/title/bf40ef65-2212-4778-9667-13033899d6f0/the-main-duties-of-the-vice-president', 'https://dynasty-scans.com/series/the_main_duties_of_the_vice_president', null, 'This is part of an extended universe spanning several short-format pixiv series by the same author. Right now only this one is being translated, but stay tuned for future updates.', false, false);
    this.addSeries(raw.m134562, [cat.PSYCHO, cat.TOXIC, cat.ONESHOT, cat.WTF], 'https://mangadex.org/title/c11f5e2f-903a-473e-b683-0acee78bdc4e/the-story-of-you-me-and-her', 'https://dynasty-scans.com/chapters/kimi_to_kanojo_to_watashi_no_hanashi', null, 'No no no she can\'t be fixed, do not insist.', true, false);
    this.addSeries(raw.m136807, [cat.MANGAKA, cat.ONESHOT, cat.CLUB, cat.DRAMA, cat.WORK, cat.DEPRESSO], null, null, 'https://www.viz.com/shonenjump/chapters/look-back', 'Only available officially, a masterpiece by Fujimoto. You can also watch the movie, it\'s a extremely good adaptation.', true, false);
    this.addSeries(raw.m173101, [cat.ONESHOT, cat.IDIOTS, cat.ADULT_LIFE], 'https://mangadex.org/title/d0595a5d-6061-47b0-962f-4b120f77abbd/daisuki-desu', 'https://dynasty-scans.com/chapters/i_i_love_love_you_you', null, null, true, false);
    this.addSeries(raw.m115093, [cat.ANTHOLOGY, cat.COMFY, cat.DRAMA, cat.ONESHOT], 'https://mangadex.org/title/cfbdcddc-7013-494b-b2ef-aa7860f5ad60/kimi-no-tame-ni-sekai-wa-aru', 'https://dynasty-scans.com/anthologies/the_world_exists_for_you', null, 'Oneshots by the one and only Usui Shio.', true, false);
    this.addSeries(raw.m114485, [cat.DRAMA, cat.TOXIC, cat.ONESHOT, cat.STOCKHOLM, cat.PSYCHO], 'https://mangadex.org/title/dd869385-2ac7-46a8-8559-779fbe861017/houtai-shoujo-kikan', 'https://dynasty-scans.com/chapters/a_period_of_bandaged_girls', null, null, true, false);
    this.addSeries(raw.m106974, [cat.ANTHOLOGY, cat.ONESHOT, cat.COMFY, cat.IDIOTS, cat.SUPERNATURAL, cat.TOXIC], 'https://mangadex.org/title/8fa12678-72bc-4dbd-a2fa-a6f8ab6880ef/i-want-you-to-say-you-love-me', 'https://dynasty-scans.com/anthologies/i_want_you_to_say_you_love_me', null, 'Oneshots by Takeshima Eku, the author of "Whispering You a Love Song"', true, false);
    this.addSeries(raw.m92480,  [cat.TOXIC, cat.DRAMA, cat.PSYCHO, cat.ONESHOT], 'https://mangadex.org/title/0d59a446-10ab-4444-80be-4e4a391c123b/truth', 'https://dynasty-scans.com/chapters/truth', null, 'When the legend Namori isn\'t writing fluffy comedy in YRYR and OMRK or drawing the cutest fanart you\'ll ever see on twitter, she dedicates her time and energy to writing the most toxic yuri on earth. The duality of this woman.', true, false);
    this.addSeries(raw.m107365, [cat.COUNTRY, cat.COHAB, cat.DRAMA, cat.ADULT_LIFE], 'https://mangadex.org/title/22e944a0-f761-4d7a-b6a7-f83a289047ca/umineko-sou-days', 'https://dynasty-scans.com/series/seagull_villa_days', 'https://sevenseasentertainment.com/series/days-of-love-at-seagull-villa/', null, true, false);
    this.addSeries(raw.m181879, [cat.FANTASY, cat.SCIFI, cat.HISTORY, cat.COMFY, cat.FOOD], 'https://mangadex.org/title/88424be3-40a9-4965-8dae-e33bd0a015f5/pest-ga-aketara-asobimashou-chuusei-europa-sekai-to-gendai-bunmei-slow-life', null, null, 'Who doesn\'t want to read about lesbians hanging out in a medieval Germany ravaged by the black plague? I do.', false, false); 
    this.addSeries(raw.m105344, [cat.WTF, cat.FANTASY, cat.DEGEN], 'https://mangadex.org/title/a873026d-2de3-4721-a865-b07b72fd9834/you-still-rely-on-magic', 'https://dynasty-scans.com/series/you_still_rely_on_magic', null, 'I don\'t need to explain myself.', true, true);
    this.addSeries(raw.m107751, [cat.DEGEN, cat.FANTASY, cat.SCHOOL, cat.WTF], 'https://mangadex.org/title/45c31545-653a-4f35-b8d6-6b22aa48fc29/ishuzoku-joshi-ni-marumaru-suru-hanashi', 'https://dynasty-scans.com/series/a_story_about_doing_xx_to_girls_from_different_species', null, 'Interspecies Reviewers if it was good', true, false);
    this.addSeries(raw.m181047, [cat.SCHOOL, cat.CLUB], 'https://mangadex.org/title/01773572-874e-4428-be54-93b8f5452aab/table-tennis-lovers', null, null, null, false, false);
    this.addSeries(raw.m116286, [cat.SCHOOL, cat.COMFY, cat.SUPERNATURAL, cat.SUBTEXT, cat.IDIOTS], 'https://mangadex.org/title/745e53bd-367a-40cf-ae62-caf8e86e0301/a-girl-who-can-t-speak-thinks-she-is-too-kind', null, null, 'This series should have ended in 30 chapters, but we\'ve reached levels of stretchium previously thought impossible.<br>Still cute though.', false, false);
    this.addSeries(raw.m163031, [cat.MANGAKA, cat.SCHOOL, cat.AGE_GAP, cat.CLUB], 'https://mangadex.org/title/0b1d5fe1-5942-402e-91ad-94dd99a96fdc/oshiegoto', null, null, '"I am going to write a story about an art teacher who is a closet fujoshi teaching her gyaru student who is a renowed genius painter how to draw yaoi doujinshi" is such an insane concept to come up with I can\'t help but bow to this author.', false, false);
    this.addSeries(raw.m183713, [cat.TOXIC, cat.DRAMA, cat.PSYCHO, cat.WTF, cat.SCIFI, cat.ONESHOT], 'https://mangadex.org/title/c4d5d4fb-1b7b-4aa7-8be4-727966380960', null, null, 'AI is scary, but if AI was a cute girl I wouldn\'t mind.', true, false);
    this.addSeries(raw.m172109, [cat.FANTASY, cat.ACTION, cat.DRAMA], 'https://mangadex.org/title/594063f1-2cf8-4307-b6e1-fbc984e88fdb/heimin-no-watashi-desu-ga-koushaku-reijou-sama-o-taburakashite-ikiteimasu', null, null, 'Could the lesbian with a sharingan just go to a brothel and copy all the good sexual techniques to use on her noble harem?', false, false);
    this.addSeries(raw.m183444, [cat.ADULT_LIFE, cat.DRAMA, cat.ONESHOT], 'https://mangadex.org/title/88bf7a59-a620-4858-af76-39e712f9a536/ichiya-de-ochiru-koi-nante', null, null, 'This is the proper way to handle a yandere', true, false);
    this.addSeries(raw.m134491, [cat.COMFY, cat.OTHER, cat.DATING, cat.ONESHOT], 'https://mangadex.org/title/cea7bcce-3c29-461a-a443-720162d250dc/30-minutes', 'https://dynasty-scans.com/chapters/30_minutes', null, null, true, false);
    this.addSeries(raw.m183343, [cat.COMFY, cat.HISTORY, cat.FANTASY, cat.DRAMA, cat.ONESHOT], 'https://mangadex.org/title/4a044644-902f-482b-9737-f018c6f6c1a7/belladonna-no-koibito', null, null, '114 beautifully drawn pages.', true, false);
    this.addSeries(raw.m140470, [cat.SCHOOL, cat.IDOL, cat.DRAMA, cat.ONESHOT], 'https://mangadex.org/title/8886c62e-5abc-4fce-aaf4-21f774bb7b25/brighter-than-the-lightstick-encore', 'https://dynasty-scans.com/chapters/brighter_than_the_lightstick_encore', null, null, true, false);
    this.addSeries(raw.m105983, [cat.FANTASY, cat.SCHOOL, cat.IDIOTS, cat.ONESHOT, cat.COHAB, cat.DRAMA], 'https://mangadex.org/title/21de0bf0-ea12-4b21-85df-2b09461e44d7/demons-harem', 'https://dynasty-scans.com/chapters/demons_harem', null, 'Where can I get myself an angelwife and a demonwife to love and protect me? Life is unfair', true, false);
    this.addSeries(raw.m129835, [cat.ADULT_LIFE, cat.ONESHOT, cat.COMFY, cat.OTHER], 'https://mangadex.org/title/ec2fbac7-e0c2-4b2a-adbc-bd79ca6ed37f/if-it-rains-next-week', 'https://dynasty-scans.com/chapters/if_it_rains_next_week', null, null, true, false);
    this.addSeries(raw.m114061, [cat.STOCKHOLM, cat.ADULT_LIFE, cat.COUNTRY, cat.ONESHOT], 'https://mangadex.org/title/4ceb6b78-3602-45b7-9413-b815a2723492/sentimental-beach-side', 'https://dynasty-scans.com/chapters/sentimental_beach_side', null, 'Is it true that if you let yourself be scammed and spend all your money on tourist traps you can take home a live-in tropical housewife?<br>I feel like this author is working for the Okinawan tourism industry lobby.', true, false);
    this.addSeries(raw.m140684, [cat.COMFY, cat.ONESHOT, cat.IDIOTS], 'https://mangadex.org/title/e8bdc7b1-3544-4fa6-b5a5-0903851f3722/renzu-goshi-ni-oni-wa-inai', 'https://dynasty-scans.com/chapters/the_demon_disappears_through_a_lens', null, 'Just how blind is this girl jesus.', true, false);
    this.addSeries(raw.m174603, [cat.FANTASY, cat.COMFY, cat.DEPRESSO, cat.ONESHOT], 'https://mangadex.org/title/be3a9631-4775-4dc4-8dde-a761b71bfa68/koko-ha-tengoku-ja-nai-kedo', 'https://dynasty-scans.com/chapters/this_is_not_heaven_but', null, 'Don\'t miss the sequel, <a href="https://mangadex.org/title/ef7f3759-ebc3-4639-8c36-ac9cd40b61b4/append-disc" target="_blank">"Append Disc"</a>.', true, false);
    this.addSeries(raw.m134367, [cat.IDIOTS, cat.FANTASY, cat.COMFY, cat.ACTION, cat.ONESHOT], 'https://mangadex.org/title/e61152b7-b5d1-427f-a62f-94368edc30f0/majo-ga-koi-suru-5-byou-mae', 'https://dynasty-scans.com/chapters/5_seconds_before_a_witch_falls_in_love', null, 'God I love witches so much. Look how big her hat is. You can fit so much cute under that bad boy.<br><br>Don\'t miss the equally as cute sequel to this oneshot: <a href="https://mangadex.org/title/906f382f-f554-4f49-a4d7-c38d3c6d8945/majo-to-koi-suru-5-byou-mae" target="_blank">"Majo to Koi Suru 5 Byou Mae"</a>.', true, false);
    this.addSeries(raw.m127898, [cat.ANTHOLOGY, cat.ONESHOT, cat.HISTORY, cat.COHAB, cat.ADULT_LIFE], 'https://mangadex.org/title/94ececa2-8bf3-462f-9e83-4affb8e96217/cats-and-sugar-bowls', 'https://dynasty-scans.com/anthologies/cats_and_sugar_bowls', 'https://sevenseasentertainment.com/series/cats-and-sugar-bowls/', 'A compilation of several oneshots by the extremely prolific Yuri Hime author Yukiko.', true, false);
    this.addSeries(raw.m115747, [cat.ANTHOLOGY, cat.ONESHOT, cat.ADULT_LIFE, cat.SCHOOL, cat.IDIOTS, cat.COMFY, cat.DRAMA, cat.AGE_GAP], 'https://mangadex.org/title/14adbe56-19fe-4cda-a870-47a14562ad1e/resonant-blue-girl-s-best-time', 'https://dynasty-scans.com/anthologies/resonant_bluegirls_best_time', null, 'This anthology is a bit of a mixed bag - I personally recommend reading "Our Echo" parts 1 and 2.', true, false);
    this.addSeries(raw.m179988, [cat.ANTHOLOGY, cat.ONESHOT, cat.DEGEN], 'https://mangadex.org/title/004f414f-badf-414a-9991-e4a7c76de81e/sm-yuri-ecchi-anthology', 'https://dynasty-scans.com/anthologies/sm_yuri_ecchi_anthology', null, 'This is as self explanatory as it gets.', true, true);
    this.addSeries(raw.m138536, [cat.IDIOTS, cat.COHAB, cat.SCHOOL, cat.DATING], 'https://mangadex.org/title/1e1d26fb-b131-4816-8e2a-e08a8d3ab26b/tankobu', 'https://dynasty-scans.com/series/tankobu', null, 'If you read on Mangadex, you\'ll have to hunt for the sequels; Dynasty conveniently grouped them with the rest of the chapters in the same link.', true, false);
    this.addSeries(raw.m173495, [cat.COMFY, cat.IDIOTS, cat.SCHOOL, cat.DRAMA, cat.DATING], 'https://mangadex.org/title/940a516f-9efc-492d-8459-3676ee71b2bd/oshi-no-bishoujo-ni-kokuhaku-sareru-hanashi', 'https://dynasty-scans.com/series/how_my_favorite_beautiful_girl_told_me_she_loved_me', null, '"Ugly otaku" yeah right.<br><br>There\'s a <a href="https://mangadex.org/title/39d0a13a-4e9d-4383-8864-b0e8ef1af245/yuzu-to-rika" target="_blank">doujin</a> "sequel". It\'s literally porn though. Plus the author still makes short chapters on pixiv, irregularly.', true, false);
    this.addSeries(raw.m33526, [cat.ACTION, cat.FANTASY], 'https://mangadex.org/title/c0587ebd-7e89-43b7-a877-b28b20ad8261/fate-kaleid-liner-prisma-illya', null, null, 'The one and only, the legend, the absolute peak of Fate.', false, true);
    this.addSeries(raw.m179139, [cat.SCHOOL, cat.IDIOTS, cat.COMFY], 'https://mangadex.org/title/c2f475a6-ad73-40bd-a2ff-cd36b6f4b85c/the-role-of-the-femme-fatale', 'https://dynasty-scans.com/series/the_role_of_the_femme_fatale', null, 'If the twist is\'t that this is a reality show for the sick entertainment of the elites then I don\'t understand the story.', false, false);
    this.addSeries(raw.m179296, [cat.SCHOOL, cat.SUPERNATURAL, cat.IDIOTS], 'https://mangadex.org/title/b8b358a5-528a-4376-be05-dd50ff4e169e/koroshi-korosare-sankaku-kankei-ni-watashi-ga-ima-kara-hairun-desu-ka', 'https://dynasty-scans.com/series/am_i_about_to_join_a_kill_or_be_killed_love_triangle', null, 'This is just Bocchi The Rock but somehow more insane', false, false);
    this.addSeries(raw.m181754, [cat.SCHOOL, cat.COMFY, cat.DATING], 'https://mangadex.org/title/b8f9a660-ed4d-4667-9c8d-00e98c05167d/furetai-wa-koi-no-hajimari', null, null, '...fluffy girls...', false, false);
    this.addSeries(raw.m181069, [cat.SCIFI, cat.FANTASY, cat.ACTION, cat.TOXIC], 'https://mangadex.org/title/6c6dfc6c-5a2a-4295-a67a-07c1cded12d6/kodoku-no-kochou-wa-donna-yume-wo-miru-no-ka', null, null, 'By the author of Magirevo, because writing 3 (three) light novels at the same time wasn\'t enough.', false, false);
    this.addSeries(raw.m181372, [cat.FANTASY, cat.IDIOTS, cat.DEGEN], 'https://mangadex.org/title/381cd240-87a4-4f0f-87fe-6678bfd28cf5/shi-ni-modori-reijou-wa-kanpeki-na-shiawase-wo-teniireta', null, null, 'Straight slut gets corrected in record time :)', false, false);
    this.addSeries(raw.m176854, [cat.COMFY, cat.SUPERNATURAL, cat.DATING, cat.FOOD], 'https://mangadex.org/title/4684953a-6bbc-4c05-82d1-808ce77960ea/akumade-amai-watashi-no-kanojo', null, null, 'cute demon gf... I want one...', false, false);
    this.addSeries(raw.m166168, [cat.SCIFI, cat.ACTION, cat.DRAMA], 'https://mangadex.org/title/ef3a66a4-010f-4930-b6d4-0ff28b0ceed5/garan-no-hime', null, null, 'If you ever wanted to read a "Nier but yuri", this is it.', false, false);
    this.addSeries(raw.m113586, [cat.COMFY, cat.DATING, cat.COHAB], 'https://mangadex.org/title/81eea35d-5e99-482f-a7da-9a4495c7da43/the-girls-arcadia', 'https://dynasty-scans.com/series/the_girls_arcadia', null, 'The author also released <a href="https://dynasty-scans.com/series/recipe_for_arcadia" target="_blank">"Recipe for Arcadia"</a>, which is a series of short sequels to this.', true, false);
    this.addSeries(raw.m127445, [cat.FANTASY, cat.GENDERBEND, cat.ACTION], 'https://mangadex.org/title/fd41659a-e4ce-458f-b087-8032b7a5fab9/netachara-tensei-toka-anmarida', null, 'https://j-novel.club/series/did-i-seriously-just-get-reincarnated-as-my-gag-character-manga', 'Isekai\'d as demon girl... get loli elf meido gf...<br>It should have been me...', false, false);
    this.addSeries(raw.m185202, [cat.COMFY, cat.SCHOOL, cat.ONESHOT], 'https://mangadex.org/title/38d85ed7-d75d-41bf-976e-5a70e2e00858/o-hitsuji-chan-wa-sawaritai', null, null, null, true, false);
    this.addSeries(raw.m184992, [cat.FANTASY, cat.ONESHOT, cat.COMFY, cat.IDIOTS, cat.ADULT_LIFE], 'https://mangadex.org/title/ce61de50-8f2e-4d77-80b8-5720b92f76a8/neko-no-hi', 'https://dynasty-scans.com/chapters/cat_day', null, 'Why can\'t this happen to my cats?', true, false);
    this.addSeries(raw.m155745, [cat.ADULT_LIFE, cat.WORK, cat.MUSIC], 'https://mangadex.org/title/f7f170ed-3819-4952-bd89-2de784fcef11/ichikoe-nifuri-tachiaoi', 'https://dynasty-scans.com/series/voice_first_face_second_hollyhock', null, null, false, false);
    this.addSeries(raw.m86218, [cat.DRAMA, cat.SCHOOL, cat.DATING, cat.STOCKHOLM], 'https://mangadex.org/title/69060a67-1d4e-4110-9d29-838bfd99917f/bloom-into-you', 'https://dynasty-scans.com/series/bloom_into_you', 'https://sevenseasentertainment.com/series/bloom-into-you/', 'The absolute peak of dramatic yuri, impressively well written and paced.', true, false);
    this.addSeries(raw.m140912, [cat.WTF, cat.DEPRESSO, cat.AGE_GAP, cat.ONESHOT, cat.SUPERNATURAL], 'https://mangadex.org/title/54e30086-c159-4b8d-a7f3-5ff39736855d/by-my-side', 'https://dynasty-scans.com/series/by_my_side', null, 'Technically a oneshot with several short sequels.', true, false);
    this.addSeries(raw.m141046, [cat.WTF, cat.ONESHOT, cat.PSYCHO], null, 'https://dynasty-scans.com/chapters/talking_about_summer', null, 'What do you MEAN there\'s only 4 pages??', true, false);
    this.addSeries(raw.m141047, [cat.DRAMA, cat.DEPRESSO, cat.ONESHOT, cat.TOXIC], 'https://mangadex.org/title/d539fb91-4606-4e05-8009-3db3388d447a/i-liked-your-bad-sides', null, null, ':(', true, false);
    this.addSeries(raw.m134560, [cat.COMFY, cat.DATING, cat.ONESHOT], 'https://mangadex.org/title/9e92bd4b-a8f4-4c7a-b1a2-e78a2b826fa7/ai-wa-hito-o-yowakusururashi', 'https://dynasty-scans.com/chapters/love_seems_to_make_people_weak', null, null, true, false);
    this.addSeries(raw.m128650, [cat.DEPRESSO, cat.DRAMA, cat.ONESHOT], 'https://mangadex.org/title/64d4a59e-18b3-49ac-a863-bec775060354/kaerimichi', 'https://dynasty-scans.com/chapters/kaerimichi', null, 'Useless lesbians at their peak.', true, false);
    this.addSeries(raw.m127440, [cat.STOCKHOLM, cat.COMFY, cat.SCHOOL, cat.DRAMA], 'https://mangadex.org/title/73965527-b393-4f65-9bc3-2439ec44935a/that-time-i-was-blackmailed-by-the-class-s-green-tea-bitch', 'https://dynasty-scans.com/series/that_time_i_was_blackmailed_by_the_classs_green_tea_bitch', null, '"What the fuck? Fuzz posted china toilet paper format shit!!"<br>No no I hate chinese comics too but trust me on this one, the gays are super cute.<br>Very VERY rare chinese W here.', false, true);
    this.addSeries(raw.m157335, [cat.SUPERNATURAL, cat.DEPRESSO, cat.IDOL, cat.ONESHOT], 'https://mangadex.org/title/04578c09-97a3-478f-a4b9-afd8af8467fc/oshi-ga-yuurei-ni-narimashite', null, null, 'Hey, I translated this one myself!<br><br>If you like what you see, <a href="/yuri/series/151909">"I see you, Aizawa-san!"</a> is literally the same concept plus mystery.', true, false);
    this.addSeries(raw.m56385, [cat.ONESHOT, cat.COMFY], 'https://mangadex.org/title/716e00da-6262-4121-aa28-125ba6f10bbe/your-fragrance', 'https://dynasty-scans.com/chapters/your_fragrance', null, null, true, false);
    this.addSeries(raw.m135077, [cat.ONESHOT, cat.ANTHOLOGY, cat.COMFY, cat.SCHOOL, cat.STOCKHOLM, cat.DEGEN], null, 'https://dynasty-scans.com/anthologies/this_is_a_great_hug_pillow', null, 'If there\'s one thing I learned from this anthology, it\'s that Minase Ruruu\'s biggest fantasy is burying her face in a pair of big tits. Good for her, good for her.<br><br>I hope she was able to make it happen.', true, true);
    this.addSeries(raw.m180766, [cat.FANTASY, cat.GENDERBEND, cat.ACTION, cat.DEGEN], 'https://mangadex.org/title/1548a4c8-db3c-4bab-8916-a2c202160026/ato-wa-gojiyuu-ni-douzo-tutorial-de-kami-sama-ga-last-boss-wo-taoshi-chatta-node-watashi-wa-suki', null, null, 'giwtwm', false, true);
    this.addSeries(raw.m126933, [cat.ANTHOLOGY, cat.ONESHOT, cat.DRAMA, cat.COMFY, cat.FANTASY], 'https://mangadex.org/title/53fc44bd-b97c-4878-8c65-c1192f1fcb80/i-m-the-villainess-but-i-m-being-captured-by-the-heroine-anthology', null, null, 'Ahh, the ubiquitous villainess x heroine. It truly never gets old.', false, false);
    this.addSeries(raw.m169343, [cat.DRAMA, cat.COHAB, cat.ADULT_LIFE], 'https://mangadex.org/title/a77db2d8-4c8b-4158-b196-6ab259ad87c1/usotsuki-hanayome-to-dousei-kekkon-ron', 'https://dynasty-scans.com/series/a_lying_brides_case_for_same_sex_marriage', null, 'Don\'t get duped by married women, bros. It\'s never a good idea.', false, false);
    this.addSeries(raw.m91985, [cat.ONESHOT, cat.SCHOOL, cat.DEGEN, cat.COMFY], 'https://mangadex.org/title/f1801742-89a3-494d-a24f-c004f6606a08/munasawagi-no-houkago', 'https://dynasty-scans.com/chapters/heart_throbbing_after_school', null, 'Grooming an innocent girl into cosplaying Strike Witches... creepy... but so unbelievably based...', true, false);
    this.addSeries(raw.m102047, [cat.COMFY, cat.ADULT_LIFE, cat.WORK, cat.COHAB], 'https://mangadex.org/title/f6fe221d-5e3c-488f-99c8-e18f5444b253/i-decided-to-fake-a-marriage-with-my-junior-to-shut-my-parents-up', 'https://dynasty-scans.com/series/i_decided_to_fake_a_marriage_with_my_junior_to_shut_my_parents_up', 'https://sevenseasentertainment.com/series/i-married-my-best-friend-to-shut-my-parents-up/', 'A comfy Kodama Naoko manga? With no NTR? With zero drama? Impossible...', true, false);
    this.addSeries(raw.m120648, [cat.COMFY, cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/b05cefaa-a4b9-4deb-91c8-f0036ada781f/yurizukushi-no-kyoushitsu-de', 'https://dynasty-scans.com/series/in_yuriful_classroom', null, 'It\'s in the water. It must be in the water.', false, false);
    this.addSeries(raw.m98339, [cat.DRAMA, cat.IDOL, cat.SCHOOL, cat.CLUB], null, 'https://dynasty-scans.com/series/strange_babies', null, 'I\'ve linked the Dynasty page only because it groups the series with the prequel oneshot in order. If you want to read on Mangadex instead, make sure to read the oneshot first.', true, false);
    this.addSeries(raw.m166712, [cat.COMFY, cat.SCHOOL, cat.DRAMA, cat.DEPRESSO], 'https://mangadex.org/title/7f079703-7894-435c-8864-bc0bdac6fdb5/futsuu-no-koitte-nani', 'https://dynasty-scans.com/series/what_is_normal_love', null, null, false, false);
    this.addSeries(raw.m181153, [cat.IDIOTS, cat.FANTASY, cat.ACTION], 'https://mangadex.org/title/a293ed7b-a012-4c0c-8eda-c95b90df19b2/majigawa-mahou-shoujo-no-kigurumi', 'https://dynasty-scans.com/series/majigawa_the_magical_girls_kigurumi', null, 'This was a guest series in Kirara Max that sadly didn\'t get a serialization, but it\'s stupidly fun and super cute.', true, false);
    this.addSeries(raw.m105949, [cat.SCIFI, cat.SCHOOL, cat.DRAMA], 'https://mangadex.org/title/36a4167c-0e0b-4d46-b493-3375ec8debe7/all-of-humanity-is-yuri-except-for-me', 'https://dynasty-scans.com/series/all_of_humanity_is_yuri_except_for_me', 'https://yenpress.com/titles/9781975322489-the-whole-of-humanity-has-gone-yuri-except-for-me', '...paradise... it exists...', true, false);
    this.addSeries(raw.m118934, [cat.COMFY, cat.COUNTRY, cat.ADULT_LIFE, cat.DATING, cat.ONESHOT], 'https://mangadex.org/title/267c7be2-88f8-4e5a-b8c6-6058a127b267/will-these-words-reach-you', null, null, 'This is the <a href="/yuri/series/114061">second time</a> yuri tells me if I visit a resort island in summer I can take home a tropical wife. What do they mean by this?', true, false);
    this.addSeries(raw.m112851, [cat.ADULT_LIFE, cat.IDIOTS, cat.COMFY, cat.TOXIC], 'https://mangadex.org/title/5c7101d2-58fe-4459-9055-00d7a7f0ef89/yuliquer-alcohol-x-yuri', 'https://dynasty-scans.com/anthologies/yuliquer_alcohol_x_yuri_anthology', null, 'There should be more drunk yuri out there.', true, false);
    this.addSeries(raw.m163997, [cat.IDIOTS, cat.COMFY, cat.ONESHOT], 'https://mangadex.org/title/7c050aeb-5812-4fe4-979c-5e8ada6ca393/koukou-debut-bareta-hanashi', 'https://dynasty-scans.com/chapters/a_story_about_a_high_school_debut_being_exposed', null, null, true, false);
    this.addSeries(raw.m97841, [cat.COMFY, cat.SCHOOL, cat.IDIOTS], 'https://mangadex.org/title/b2d905f6-3d09-43ba-9b52-98761e29b03f/yuta-san-wa-mama-naranai', 'https://dynasty-scans.com/series/song_about_a_piece_of_junk', null, 'If you find yourself thinking these characters look familiar, remember the author used to write Touhou doujins. She\'s not even pretending to hide it.', true, false);
    this.addSeries(raw.m99116, [cat.DEPRESSO, cat.ONESHOT, cat.DRAMA], 'https://mangadex.org/title/d70c0e14-1732-426a-8a51-439dfdff08c4/goodbye-kastor', 'https://dynasty-scans.com/chapters/goodbye_kastor', null, null, true, false);
    this.addSeries(raw.m134380, [cat.AGE_GAP, cat.COMFY], 'https://mangadex.org/title/7c5892c7-e11c-4ca2-aa1c-1cabe34391e1/a-story-of-two-online-friends-meeting-irl', 'https://dynasty-scans.com/series/a_story_of_two_online_friends_meeting_irl', null, null, true, false);
    this.addSeries(raw.m131158, [cat.ONESHOT, cat.ACTION, cat.SUPERNATURAL], 'https://mangadex.org/title/173a3aff-bccc-48db-b45b-5891634483e8/damdam', null, null, 'This could perfectly be a full series. Please authorman...', true, false);
    this.addSeries(raw.m127469, [cat.TOXIC, cat.ONESHOT, cat.ADULT_LIFE], 'https://mangadex.org/title/7bafb67f-d006-42c0-96e1-a4cd42436580/futarijime-roomshare', 'https://dynasty-scans.com/chapters/futarijime_roomshare', null, 'Happy ending...?', true, false);
    this.addSeries(raw.m120507, [cat.TOXIC, cat.DEPRESSO, cat.ADULT_LIFE, cat.DRAMA, cat.ANTHOLOGY, cat.ONESHOT], 'https://mangadex.org/title/0d94738a-1535-42c7-ad1d-50cf00133675/this-channel-has-nobody-but-us', 'https://dynasty-scans.com/anthologies/this_channel_has_nobody_but_us', null, 'Kuwabara is a hit or miss for most people. For me, I really enjoy her writing and the depressing stories she comes up with. It\'s always worth checking her works out.', true, false);
    this.addSeries(raw.m106429, [cat.DEPRESSO, cat.SCHOOL, cat.DRAMA, cat.ONESHOT], 'https://mangadex.org/chapter/5ec78fc2-cc85-4249-9626-57a1ea1cf350', null, null, null, true, false);
    this.addSeries(raw.m134445, [cat.DEPRESSO, cat.TOXIC, cat.DRAMA, cat.ANTHOLOGY, cat.ONESHOT], 'https://mangadex.org/title/84570193-ca50-412f-b37b-cd6912240d64/love-and-hate-and-love', null, null, 'Read if you want to get depressed.', true, false);
    this.addSeries(raw.m112288, [cat.DEPRESSO, cat.SUPERNATURAL, cat.ONESHOT], 'https://mangadex.org/chapter/848e9b13-2b9c-48cc-8c75-9ba0badd8380', null, null, null, true, false);
    this.addSeries(raw.m120253, [cat.DEPRESSO, cat.TOXIC, cat.PSYCHO, cat.ONESHOT, cat.ANTHOLOGY, cat.AGE_GAP], 'https://mangadex.org/title/a72fdc5a-c6d5-452f-abd2-a204ef6bd1fb/chouchou-volume-3-mental-illness-girls-love-anthology', 'https://dynasty-scans.com/anthologies/chouchou_vol_3_original_mental_illness_girls_love_anthology', null, 'Ahh, finally, an anthology to suit my tastes.', true, false);
    this.addSeries(raw.m86675, [cat.DEGEN, cat.OTHER], 'https://mangadex.org/title/9ee83f91-a817-4891-82be-c078ef015799/transient-dreams-of-transient-things', null, null, 'Just 3 short chapters. Has a sequel <a href="https://mangadex.org/chapter/8cbbf32a-2d5b-4fb0-a710-c4775d77f44f/1" target="_blank">here</a>.', true, false);
    this.addSeries(raw.m99738, [cat.COMFY, cat.DRAMA, cat.CLUB, cat.SUBTEXT, cat.FOOD, cat.IDIOTS, cat.COUNTRY], 'https://mangadex.org/title/9b4b3140-7c1c-4583-aa1c-1bbbe240a8fa/sounan-desu-ka', null, 'https://comics.inkr.com/title/262-are-you-lost?utm_source=mgd', 'This is an absolute masterpiece of SoL comedy and tension in equal parts, a great story of bonding through hardship. The author is a hunter and survivalist himself, so it\'s also quite educative, barring the more "convenient" parts, which are few and far between. Read the official version if you can, since it\'s high quality and completed.', true, false);
    this.addSeries(raw.m162367, [cat.WTF, cat.SCHOOL, cat.STOCKHOLM, cat.TOXIC, cat.ONESHOT], 'https://mangadex.org/title/24ff6d1b-ed07-4e10-b541623679-611f9599f98a/game-of-murder', null, null, 'CRAZY GIRLS GOD I LOVE CRAZY GIRLS', true, false);
    this.addSeries(raw.m176259, [cat.COMFY, cat.ACTION, cat.FANTASY, cat.DEPRESSO], 'https://mangadex.org/title/5a3c9fe2-037b-497e-8686-793a537ffd5f/have-a-great-trip-after-the-credits-roll', null, null, 'Finally... Yuri Frieren...', false, false);
    this.addSeries(raw.m183092, [cat.IDIOTS, cat.WTF, cat.STOCKHOLM, cat.SCIFI], 'https://mangadex.org/title/25f67770-7009-4a3e-9f55-2ea38e86e082/yuri-yuri-panic', null, null, 'This is the most autistic yuri in existence so far, and I like it.', false, false);
    this.addSeries(raw.m155237, [cat.ONESHOT, cat.COMFY, cat.OTHER], 'https://mangadex.org/title/9434337b-e447-4631-a425-1d979762b4d8/we-graduated-from-being-sisters-to-girlfriends', null, null, 'Yuri wincest...', true, false);
    this.addSeries(raw.m110809, [cat.COMFY, cat.IDIOTS, cat.SUBTEXT, cat.FANTASY], 'https://mangadex.org/title/994dfcd9-0449-47a7-ac1e-0efff9b0fe54/tyra-cera', null, null, 'Yes, dinosaur yuri is real. This one is mostly for shits and giggles, but it\'s still very funny with tons of charm.', true, false);
    this.addSeries(raw.m150493, [cat.DRAMA, cat.ADULT_LIFE, cat.DEPRESSO, cat.STOCKHOLM], 'https://mangadex.org/title/6560eb32-d4ba-4e93-ba39-9790b03b32ea/summer-lemon-and-overlay', 'https://dynasty-scans.com/series/summer_lemon_and_overlay', null, 'Rich people are all fucked up in the head', true, false);
    this.addSeries(raw.m152535, [cat.SUPERNATURAL, cat.SUBTEXT, cat.SCHOOL, cat.ONESHOT], 'https://mangadex.org/title/c189897c-22b1-4456-a904-aff03440bd16/catch-you-catch-me', 'https://dynasty-scans.com/chapters/catch_you_catch_me', null, null, true, false);
    this.addSeries(raw.m131538, [cat.IDIOTS, cat.COHAB, cat.FANTASY, cat.SCIFI, cat.WTF], 'https://mangadex.org/title/d964361f-042a-4c1b-907d-3c907dd50060/ninja-to-koroshiya-no-futarigurashi', null, null, 'SATOKO IS A SHIT<br>KONOHA IS A SHIT<br>LEADER IS THE BIGGEST SHIT<br>WHY IS EVERYONE IN THIS SHIT<br><br><small>(except for Roboko my beloved)</small>', false, false);
    this.addSeries(raw.m109868, [cat.IDIOTS, cat.DEGEN, cat.ADULT_LIFE], 'https://mangadex.org/title/d7370cf3-c764-4469-9c72-8b70222f0409/there-s-weird-voices-coming-from-the-room-next-door', 'https://dynasty-scans.com/series/theres_weird_voices_coming_from_the_room_next_door', null, 'The dynasty version includes a prequel and a few extra chapters, so it\'s better to read it there.', true, true);
    this.addSeries(raw.m182099, [cat.COMFY, cat.SCHOOL, cat.ONESHOT, cat.DATING], 'https://mangadex.org/title/80cce0b2-916e-4dbd-a7ab-a58836332947/i-m-having-trouble-calling-my-girlfriend-by-her-first-name', null, null, null, true, false);
    this.addSeries(raw.m174123, [cat.DEPRESSO, cat.ADULT_LIFE, cat.COHAB, cat.MANGAKA], 'https://mangadex.org/title/a1526a66-5dbf-4fef-9e7b-5f8f48b2ca93/asagiiro-no-saudade', 'https://dynasty-scans.com/series/pale_blue_green_color_saudade', null, 'Mutually depressed yuri couple my beloved', false, false);
    this.addSeries(raw.m162782, [cat.SCHOOL, cat.FANTASY, cat.OTHER], 'https://anilist.co/manga/162782/Ashita-mo-Mata-Yuusha-no-Tonari/', null, null, 'Axed too soon but the concept was great.', true, false);
    this.addSeries(raw.m173795, [cat.IDIOTS, cat.SCHOOL, cat.COMFY, cat.ONESHOT], 'https://mangadex.org/title/29a4f9e3-7394-4b64-97a0-6e9bf5a5b2fd/kirika-sama-wa-kishi-ni-naritai', null, null, null, true, false);
    this.addSeries(raw.m157525, [cat.DEGEN, cat.DATING, cat.ADULT_LIFE, cat.COHAB, cat.SUPERNATURAL], 'https://mangadex.org/title/116a12cd-4410-4266-af9c-8b0e188baaf5/kankaku-kyoyu-maid-san', 'https://dynasty-scans.com/series/sensory_sharing_maid_san', null, 'TWINCEST! TWINCEST! TWINCEST!', true, true);
    this.addSeries(raw.m147785, [cat.IDIOTS, cat.SUPERNATURAL, cat.ONESHOT], "https://mangadex.org/title/d86e0a77-9318-491d-b1cf-282e164a6195/hazama-sandwich", null, null, 'A two-shot, actually. Dangerously similar to <a href="/yuri/series/120067">"If You Could See Love"</a>.', true, false);
    this.addSeries(raw.m147468, [cat.IDIOTS, cat.SCHOOL, cat.COMFY], 'https://mangadex.org/title/e4780c06-23e1-4a0c-b7fd-6a9f7b519ba6/sukeban-and-transfer-student', 'https://dynasty-scans.com/series/a_delinquent_a_transfer_student_and_their_silly_little_game', null, null, false, false);
    this.addSeries(raw.m167374, [cat.ANTHOLOGY, cat.ONESHOT, cat.ADULT_LIFE, cat.DATING, cat.COMFY], 'https://mangadex.org/title/81bbfb5f-4c18-47a6-9dd0-07d47f138c6d/men-men-musubi', 'https://dynasty-scans.com/anthologies/men_men_musubi_and_other_stories', null, 'An anthology of Yodokawa\'s works, the author of <a href="/yuri/series/136253">this</a> and <a href="/yuri/series/155745">this</a> and <a href="/yuri/series/111867">that</a>.', true, false);
    this.addSeries(raw.m111867, [cat.WORK, cat.ADULT_LIFE, cat.SUBTEXT], 'https://mangadex.org/title/64d0de3e-cdc2-4df8-b70b-b5ec90479a60/tora-to-hachidori', 'https://dynasty-scans.com/series/tiger_hummingbird', null, 'Delinquents will never not be the peak of anime girls.', false, false);
    this.addSeries(raw.m183482, [cat.SCHOOL, cat.COMFY, cat.SUPERNATURAL], 'https://mangadex.org/title/62726f5b-ac3f-4e60-bfce-73d3a4cf8c1b/osananajimi-wa-nyaa-to-naite-skirt-no-naka', null, null, 'Catgirl yuri... It\'s weirdly uncommon for some reason, but it\'s the best.', false, false);
    this.addSeries(raw.m85324, [cat.SUPERNATURAL, cat.COUNTRY, cat.SCHOOL, cat.SUBTEXT], 'https://mangadex.org/title/58d3fb08-5fce-417e-a3f6-a4a2653b048a/a-divine-love-alone', 'https://dynasty-scans.com/series/a_divine_love_alone', null, null, true, false);
    this.addSeries(raw.m186335, [cat.SUPERNATURAL, cat.FANTASY, cat.ACTION], 'https://mangadex.org/title/5bf1a8cf-e50b-416c-8170-23b67a3a63e5/gokumon-nadeshiko-koko-ni-ari', null, null, null, false, false);
    
    /*
    this.addSeries(raw.)
    
    */

    this.series.forEach(s => {
      const override = englishOverrides.find(o => o.id == s.id);
      if (override) {
        s.anilistData.title.english = override.english;
      }
    });

    Object.values(raw).forEach(o => {
      if (!this.series.some(s => s.id == o.id)) {
        console.error(`m${o.id}`, o.title.romaji, 'IS MISSING FROM DATASET');
      }
    });
    const ids = this.series.map(s => s.id).filter(i => i < 1000000000);
    if ([...new Set(ids)].length != Object.values(raw).length) {
      console.error('NUMBER OF SERIES DOES NOT MATCH');
    }
    if ([...new Set(ids)].length != ids.length) {
      console.error('THERE ARE DUPLICATE SERIES IN THE DATASET');
    }
  }

  series: FullSeries[] = [];

  getData() {
    return this.series;
  }

  getSeries(id: number) {
    return this.series.find(s => s.id == id);
  }

  addSeries(
    anilistData: AnilistData,
    categories: Category[],
    mangadex: string | null,
    dynasty: string | null,
    official: string | null,
    comment: string | null,
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