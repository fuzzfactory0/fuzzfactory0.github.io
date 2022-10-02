import * as Phaser from 'phaser';
import { center } from './config';

export class TitleScene extends Phaser.Scene {
  title!: Phaser.GameObjects.Text;
  startButton!: Phaser.GameObjects.Image;

  constructor() {
    super({
      key: 'TitleScene'
    });
  }

  preload(): void {
    this.load.setBaseURL('../../../../../assets/drugs/');
    this.load.image('title', 'images/title.png');
    this.load.image('startButton', 'images/startButton.png');
  }

  create(): void {
    this.add.image(center.x, center.y, 'title');
    
    this.startButton = this.add.sprite(center.x, 500, 'startButton')
      .setInteractive()
      .on('pointerdown', function (this: TitleScene) {
        this.scene.start('MainScene');
      }, this)
      .on('pointerover', function (this: TitleScene) {
        this.startButton.setTint(0xff0000);
      }, this)
      .on('pointerout', function (this: TitleScene) {
        this.startButton.setTint(0xffffff );
      }, this);
  }
};