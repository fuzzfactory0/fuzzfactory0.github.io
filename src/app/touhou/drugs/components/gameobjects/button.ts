export class Button extends Phaser.GameObjects.Image {
  constructor(x: number, y: number, scene: Phaser.Scene, onclick: Function, base: string, hover?: string, active?: string, tint?: number) {
    super(scene, x, y, base);

    this.setInteractive().on('pointerdown', onclick, scene);
    if (hover) {
      this.on('pointerover', () => {
        this.setTexture(hover);
      }, scene);
      this.on('pointerout', () => {
        this.setTexture(base);
      }, scene);
    }
  }

  preUpdate() {
    this.x += 10;
  }    
}