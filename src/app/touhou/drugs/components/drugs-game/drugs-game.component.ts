import { Component, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { TitleScene } from '../scenes/title.scene';
import { MainScene } from '../scenes/main.scene';
import { EndingScene } from '../scenes/ending.scene';

import { height, width } from '../scenes/config';

@Component({
  selector: 'app-drugs-game',
  templateUrl: './drugs-game.component.html',
  styleUrls: ['./drugs-game.component.scss']
})
export class DrugsGameComponent implements OnInit {

  config: Phaser.Types.Core.GameConfig = {
    title: "Kirisame Marisa's wonderful potion lab",
    type: Phaser.AUTO,
    width: width,
    height: height,
    scene: [ /*TitleScene,*/ MainScene, EndingScene ],
    parent: 'phaser-container',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 1000 }
      }
    },

    backgroundColor: "#18216D"
  };
  phaserGame!: Phaser.Game;

 
  constructor() {
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }
}