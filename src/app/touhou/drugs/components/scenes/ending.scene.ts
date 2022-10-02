import * as Phaser from 'phaser';
import { height, width, center } from './config';

export class EndingScene extends Phaser.Scene {
  score!: number;
  result!: Phaser.GameObjects.Text;
  hint!: Phaser.GameObjects.Text;
  constructor() {
    super({
      key: "EndingScene"
    });
  }

  init(params: any): void {
    this.score = params.starsCaught;
  }

  create(): void {
    var resultText: string = 'Your score is ' + this.score + '!';
    this.result = this.add.text(200, 250, resultText, { font: '48px Arial Bold', color: '#FBFBAC' });
    var hintText: string = "Click to restart";
    this.hint = this.add.text(300, 350, hintText, { font: '24px Arial Bold', color: '#FBFBAC' });
    this.input.on('pointerdown', function (this: EndingScene) {
      this.scene.start("MainMenuScene");
    }, this);
  }
};