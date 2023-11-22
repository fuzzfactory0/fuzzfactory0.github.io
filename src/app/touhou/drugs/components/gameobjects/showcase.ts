import potionlist from "../models/potionlist";
import { center } from "../scenes/config";

export class Showcase extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, item: string, text: string) {
    super(scene, center.x, center.y);
    this.add(scene.add.image(0, 0, 'showcase'));
    this.add(scene.add.image(0, 0, item));

    this.add(scene.add.text(0, -80, text, { font: '48px Arial Bold', color: '#000000', align: 'center' }).setOrigin(0.5));
  }
}