import * as Phaser from 'phaser';
import { Potion } from '../models/potion';
import potionlist from '../models/potionlist';
import { Savedata } from '../models/savedata';
import { SaveManager } from '../utils/savemanager';
import { center, width } from './config';

export class DayEndScene extends Phaser.Scene {
  title!: Phaser.GameObjects.Text;
  startButton!: Phaser.GameObjects.Image;

  constructor() {
    super({
      key: 'DayEndScene'
    });
  }

  savedata!: Savedata;

  init(): void {
    this.savedata = SaveManager.load();
  }

  preload(): void {
    this.load.setBaseURL('../../../../../assets/drugs/');
    this.load.image('result', 'images/result.png');
    this.load.image('buttonDay', 'images/buttonDay.png');
    this.load.image('dayEndBg', 'images/dayEndBg.png');
  }

  create(): void {
    this.cameras.main.fadeIn(500);

    this.add.image(center.x, center.y, 'result');
    
    this.add.image(center.x, center.y, 'dayEndBg');

    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE, () => {
      this.time.delayedCall(1000, () => {
        this.showResults();
      });
    });

    let filteredList = new Map();

    this.savedata.sold.forEach((p, index) => {
      if (filteredList.get(p.fullName)) {
        let obj = filteredList.get(p.fullName);
        obj.total += p.price;
        obj.amount++;
        filteredList.set(p.fullName, obj);
      } else {
        filteredList.set(p.fullName, { total: p.price, amount: 1 });
      }
    }); 

    let y = 80;
    let totalMoney = 0;
    for (let [name, val] of filteredList.entries()) {
      this.add.text(380, 50 + y, name + ' x' + val.amount.toString(), { font: '48px Roboto', color: '#FF0000' });
      this.add.text(width-380, 50 + y, '$' + val.total.toString(), { font: '48px Roboto', color: '#FF0000' }).setOrigin(1,0);
      y += 80
      totalMoney += val.total;
    }; 
     
    this.startButton = this.add.sprite(center.x, 600, 'buttonDay')
      .setInteractive()
      .on('pointerdown', function (this: DayEndScene) {
        this.savedata.day++;
        this.savedata.money += totalMoney;
        this.savedata.sold = [];
        SaveManager.save(this.savedata);
        this.startButton.destroy();
        this.cameras.main.fadeOut(500);
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
          this.time.delayedCall(1000, () => {
            this.scene.start('MainScene');
          });
        });
      }, this)
      .on('pointerover', function (this: DayEndScene) {
        this.startButton.setTint(0xff0000);
      }, this)
      .on('pointerout', function (this: DayEndScene) {
        this.startButton.setTint(0xffffff );
      }, this);
  }

  private showResults(): void {

  }
};