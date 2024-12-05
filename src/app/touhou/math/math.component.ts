import { Component, OnInit } from '@angular/core';
import { Question } from './interfaces/Question.interface';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-math',
    templateUrl: './math.component.html',
    styleUrls: ['./math.component.scss'],
    standalone: false
})
export class MathComponent implements OnInit {
  questions: Question[] = [
    { q: '1 + 1 = ', a: '11' },
    { q: '9 + 10 = ', a: '21' },
    { q: '2 + 2 = ', a: '5' },
    { q: '77 + 33 = ', a: '100' }
  ];

  current: Question[] = [{ q: '1 + 1 = ', a: '11' }];
  
  answers: string[] = [];
  level: number = 0;
  dialogue: string[][] = [
    [
      'Hello welcom to cirno school of math',
      'you will learn math now lets start easy',
      'whats 1 + 1'
    ], 
    [
      'Congrats 1 plus 1 is 11 its so bovious',
      'next one is harder took me 2 month to leanr',
      'teacher said im special',
      'must be bc i learnd so fast'
    ],
    [
      'wow u did it must be lukc',
      'bet you cant do the next one',
      'its so easy for me tho i can count'
    ],
    [
      'wow!!!!111',
      'u must be almost as smart as me',
      'that means ur iq is at least 2 digits!!',
      'this is the final test get redy!1'
    ],
    [
      'no way ur actually smarter then me?????????? 💀',
      'bruh nawhhh 💀 nah bruhhh 💀 no way bruhhhh fr? 💀 bruhhhhh',
      '💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀',
      'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      '*dies* 💀'
    ]
  ];

  insults: string[] = [
    'idot',
    'thats not it',
    'wrong',
    'nuh nuh',
    'na bro',
    'try again',
    'u cant do it',
    'u missed',
    'not that one',
    'fukt up',
    'stoopid',
    'ur iq so low',
    'super wrong',
    'thats not how math works'
  ];

  activeDialogue: string = '';
  activeInsult: string = '';
  facing: boolean = true;
  talking: boolean = false;
  insulting: boolean = false;
  timeout: any;
  endOfLine = false;
  gameover = false;
  i = 0;
  j = 0;

  constructor() { }

  ngOnInit(): void {
    this.reset();
    this.start();
  }

  checkAnswer(): void {
    clearTimeout(this.timeout)
    this.facing = false;
    this.timeout = setTimeout(() => {
      this.facing = true;
      let ans = this.answers[this.i]; 
      if (ans == this.questions[this.i].a) {
        this.answers[this.i] += ' ✓';
        this.playAudio('correct');
        this.i++;
        this.j = -1;
        this.talking = true;
        this.advance();
      } else {
        if (ans != '') {
          this.playAudio('fail');
          this.insulting = true;
          this.activeInsult = this.insults[Math.floor(Math.random() * this.insults.length)];
          setTimeout(() => {
            this.insulting = false;
          }, 500);
        }
      }
    }, 500);
  }

  start(): void {
    setTimeout(() => {
      this.talking = true;
    }, 1000);

    setTimeout(() => {
      this.scrollText();
    }, 1000);
    
  }

  reset(): void {
    this.answers = [];
    this.facing = true;
    this.current = [];
    this.level = 0;
  }
  
  advance(): void {
    if (this.endOfLine) {
      this.activeDialogue = '';
      this.j++;
      console.log(this.j, this.dialogue[this.i].length);

      if (this.j == this.dialogue[this.i].length) {
        this.talking = false;
        if (this.i == this.dialogue.length-1) {
          this.gameover = true;
        } else {
          this.current.push(this.questions[this.i]);
          this.j = 0;
        }
        return;
      }
      
      this.endOfLine = false;
      setTimeout(() => {
        this.scrollText();
      }, 50);
    }
  }

  scrollText(): void {
    let line = this.dialogue[this.i][this.j];
    if (this.activeDialogue == '') {
      this.activeDialogue = line.charAt(0);
    } else {
      this.activeDialogue = line.substring(0, this.activeDialogue.length + 1);
    }
    let lastChar = this.activeDialogue.charAt(this.activeDialogue.length-1);
    if (/[a-zA-Z0-9?!+ \n\r]/.test(lastChar) == false) {
      this.activeDialogue = line.substring(0, this.activeDialogue.length + 1);
      this.playAudio('boom');
    } else if (this.activeDialogue.length % 2){
      this.playAudio('sans');
    }
  
    if (this.activeDialogue != line) {
      setTimeout(() => {
        this.scrollText();
      }, 50);
    } else {
      this.endOfLine = true;
    }
    console.log(this.endOfLine)
  }

  playAudio(name: string){
    let audio = new Audio();
    audio.src = `../../../assets/math/audio/${name}.mp3`;
    audio.load();
    audio.play();
  }
}
