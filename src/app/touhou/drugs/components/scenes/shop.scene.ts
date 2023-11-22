import * as Phaser from 'phaser';
import { height, width, center } from './config';

export class ShopScene extends Phaser.Scene {
  score!: number;
  result!: Phaser.GameObjects.Text;
  hint!: Phaser.GameObjects.Text;
  constructor() {
    super({
      key: "ShopScene"
    });
  }

  init(params: any): void {
    this.score = params.starsCaught;
  }

  create(): void {
    this.cameras.main.fadeIn(500);
    var resultText: string = 'Welcome to Nitori\'s shop';
    this.result = this.add.text(200, 250, resultText, { font: '48px Arial Bold', color: '#FBFBAC' });
    var hintText: string = "Click to buy";
    this.hint = this.add.text(300, 350, hintText, { font: '24px Arial Bold', color: '#FBFBAC' });
    this.input.on('pointerdown', function (this: ShopScene) {
      this.scene.start("MainMenuScene");
    }, this);
  }
};