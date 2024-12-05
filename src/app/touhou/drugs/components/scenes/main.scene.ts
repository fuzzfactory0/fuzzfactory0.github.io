import * as Phaser from 'phaser';
import { Item } from '../models/item';
import { InventorySpace } from '../models/inventorySpace';
import { height, width, center } from './config';
import { Inventory } from '../models/inventory';
import { Button } from '../gameobjects/button';
import potionlist from '../models/potionlist';
import { Savedata } from '../models/savedata';
import { SaveManager } from '../utils/savemanager';
import { Showcase } from '../gameobjects/showcase';

export class MainScene extends Phaser.Scene {

  disableInput = false;
  moneyCounter!: Phaser.GameObjects.Text;
  
  inventoryDrawerPosition!: number;
  shopPosition!: number;
  recipesPosition!: number;

  inventoryDrawer!: Phaser.GameObjects.Container;
  inventoryBody!: Phaser.GameObjects.Image;
  shop!: Phaser.GameObjects.Image;
  recipes!: Phaser.GameObjects.Image;

  inventoryOpen: boolean = false;
  shopOpen: boolean = false;
  recipesOpen: boolean = false;
  
  inventorySprites: Phaser.GameObjects.Container[] = [];
  
  particles!: Phaser.GameObjects.Particles.ParticleEmitterManager;
  emitter!: Phaser.GameObjects.Particles.ParticleEmitter;

  inCauldron: string[] = [];
  cauldronText!: Phaser.GameObjects.Text;

  cauldron!: Phaser.GameObjects.Image;
  savedata: Savedata = {
    day: 1,
    money: 10,
    inventory: new Inventory(),
    sold: []
  };

  constructor() {
    super({ key: 'MainScene' });
  }

  init(/*params: any*/): void {
    this.loadSave();
    this.inventoryDrawerPosition = 1280;
    this.recipesPosition = 0;
    this.disableInput = false;
  }

  preload(): void {
    this.load.setBaseURL('assets/drugs/');
    this.load.image('background', 'images/background.png');
    this.load.image('inventory', 'images/inventory.png');
    this.load.image('shop', 'images/inventory.png');
    this.load.image('cauldron', 'images/cauldron.png');
    this.load.image('cauldronBoil', 'images/cauldronBoil.png');
    this.load.image('recipes', 'images/recipes.png');
    this.load.image('buttonLeft', 'images/buttonLeft.png');
    this.load.image('buttonRight', 'images/buttonRight.png');
    this.load.image('buttonBoil', 'images/buttonBoil.png');
    this.load.image('buttonStir', 'images/buttonStir.png');
    this.load.image('buttonFinish', 'images/buttonFinish.png');
    this.load.image('buttonEnd', 'images/buttonEnd.png');
    this.load.image('buttonOk', 'images/buttonOk.png');
    this.load.image('herb', 'images/herb.png');
    this.load.image('mushroom', 'images/mushroom.png');
    this.load.image('ginseng', 'images/ginseng.png');
    this.load.image('coca', 'images/coca.png');
    this.load.image('hcl', 'images/hcl.png');
    this.load.image('healing', 'images/healing.png');
    this.load.image('unknown', 'images/unknown.png');
    this.load.image('showcase', 'images/showcase.png');
    this.load.image('marisad', 'images/marisad.png');
  }

  /*
    ! Have an intro scene that sets the background ("marisa decided to open a potion shop in the human town")
    ! End each day like stardew valley
    ! Get money at the end of the day
    ! Save all progress, inventory state, money, unlocks etc to localstorage
    ! in the day end scene have updates to lore (new drug recipes, drug lords, saul, police etc)
    ! use money to buy things that appear in the background (japanese goburin fumo, videogames, manga, golden things)
  */

  create(): void {
    this.cameras.main.fadeIn(500);
    this.add.image(center.x, center.y, 'background');

    this.moneyCounter = this.add.text(30, 30, `$${this.savedata.money}`, { font: '32px Arial Bold', color: '#FBFBAC' });

    const buttonBoil = new Button(290, 400, this, this.onClickBoil(), 'buttonBoil');

    const buttonStir = new Button(290, 480, this, this.onClickStir(), 'buttonStir');

    const buttonFinish = new Button(290, 580, this, this.onClickFinishPotion(), 'buttonFinish');

    const buttonDay = new Button(1160, 670, this, this.onClickEndDay(), 'buttonEnd');

    this.add.container(0,0).add([buttonBoil, buttonStir, buttonFinish, buttonDay]);

    // Handle inventory
    this.savedata.inventory.herb.amount = 3;
    this.savedata.inventory.mushroom.amount = 1;
    this.inventoryDrawer = this.add.container(this.inventoryDrawerPosition, 0);
    this.inventoryBody = this.add.image(-50, 0, 'inventory').setOrigin(0, 0);

    
    this.inventoryBody.setInteractive()
      .on('pointerover', () => {
        if (!this.disableInput) {
          this.inventoryOpen = true;
        }
      })
      .on('pointerout', () => {
        this.inventoryOpen = false;
      });
    /*
    const openInventoryButton = this.add.image(-64, 32, 'buttonLeft').setOrigin(0, 0)
      .setInteractive()
      .on('pointerdown', function (this: MainScene) {
        this.inventoryOpen = !this.inventoryOpen;
        openInventoryButton.setTexture(this.inventoryOpen ? 'buttonRight' : 'buttonLeft');
      }, this)
    */

    this.inventoryDrawer.add([this.inventoryBody]);

    this.updateInventory();

    this.cauldron = this.add.image(center.x, 500, 'cauldron');
    this.cauldron.setDepth(1);

    
    this.particles = this.add.particles('water');

    this.emitter = this.particles.createEmitter({
      lifespan: 500,
      speed: { min: 500, max: 600 },
      alpha: { start: 1, end: 0, ease: 'Sine.easeOut' },
      scale: { start: 1, end: 0, ease: 'Sine.easeOut' },
      blendMode: 'ADD',
      on: false
    });

    this.emitter.setGravityY(800);

    /*
    this.sand = this.physics.add.staticGroup({
      key: 'sand',
      frameQuantity: 20
    });
    
    Phaser.Actions.PlaceOnLine(this.sand.getChildren(),
      new Phaser.Geom.Line(20, 580, 820, 580));
      this.sand.refresh();
      this.info = this.add.text(10, 10, '', { font: '24px Arial Bold', color: '#FBFBAC' });
    */

      //! DEBUG ONLY
      //! DEBUG ONLY

      this.cauldronText = this.add.text(150, 700, this.inCauldron, { font: '20px Arial Bold', color: '#FF0000' });
      this.add.text(0, 700, 'CLEAR DATA', { font: '20px Arial Bold', color: '#FF0000' })
      .setInteractive()
      .on('pointerdown', () => {
        SaveManager.clear();
        this.scene.start('MainScene')
      }, this);

      //! DEBUG ONLY
      //! DEBUG ONLY
  }

  override update(time: number): void {
    if (this.inventoryOpen && this.inventoryDrawer.x > 1280-350) {
      this.inventoryDrawer.x -= 70;
    }

    if (!this.inventoryOpen && this.inventoryDrawer.x < 1280) {
      this.inventoryDrawer.x += 70;
    }

    this.cauldronText.text = this.inCauldron.join(', ');
    this.moneyCounter.text = `$${this.savedata.money}`;
  }

  private updateInventory(): void {
    let offsetX = 64;
    let offsetY = 170;
    let spacing = 80;
    let textOffsetX = 24;
    let textOffsetY = 18;
    
    this.inventorySprites.forEach(i => {
      i.destroy();
    });

    this.savedata.inventory.spaces.forEach(i => {
      if (i.item) {
        let x = (this.savedata.inventory.spaces.indexOf(i) % 3) * spacing;
        let y = Math.floor(this.savedata.inventory.spaces.indexOf(i) / 3) * spacing;

        let sprite;
        let itemContainer = this.add.container(x + offsetX, y + offsetY);
        if (i.unlocked) {
          sprite = this.add.sprite(0, 0, i.item.id);
          if (i.amount > 0) {
            sprite.setInteractive()
              .on('pointerdown', this.onClickItem(sprite, i), this)
              .on('pointerover', this.onHoverItem(sprite, i), this)
              .on('pointerout', this.onHoverOffItem(sprite, i), this)
          } else {
            sprite.setTint(0x888888);
          }
          let number = this.add.text(textOffsetX, textOffsetY, i.amount.toString(), { font: '24px Roboto', color: '#FF0000' });
          itemContainer.add([sprite, number])
        } else {
          sprite = this.add.sprite(0, 0, 'unknown');
          itemContainer.add([sprite]);
        }

        this.inventorySprites.push(itemContainer);
        this.inventoryDrawer.add(itemContainer);
      }
    });
  }

  // Handle adding ingredients to cauldron
  private onClickItem(sprite: Phaser.GameObjects.Sprite, space: InventorySpace): () => void {
    return function (this: MainScene) {
      if (!this.disableInput) {
        if (space.unlocked && space.item.ingredient && space.amount > 0) {
          /*
          let ingredient = this.physics.add.image(center.x, 0, space.item.id);
          let ang = (Math.random() * 500 + 500) * Math.sign(Math.random() - 0.5)
          ingredient.setRotation(Math.random() * 2 * Math.PI);
          ingredient.setAngularVelocity(ang);
          ingredient.setAngularDrag(Math.abs(ang))
          this.physics.add.collider(ingredient, this.cauldron, this.onFall(ingredient, space.item), undefined, this);
          */

          let ingredient = this.add.image(this.input.x, this.input.y, space.item.id);
          let scene = this;
          let duration = 700;

          this.tweens.add({
            targets: ingredient,
            x: center.x,
            ease: 'Linear',
            duration: duration,
            repeat: 0
          });

          
          this.tweens.add({
            targets: ingredient,
            angle: (Math.random() * 500 + 500) * Math.sign(Math.random() - 0.5),
            ease: 'Sine.easeOut',
            duration: duration,
          });

          this.tweens.add({
            targets: ingredient,
            y: 420,
            ease: function (t: number) {
              return (4*t*t) - 3*t;
            },
            duration: duration,
            repeat: 0,
            onComplete: function () {
              scene.onFall(ingredient, space.item);
            }
          });

          this.disableInput = true;
          
          space.amount--;
          this.updateInventory();
        }
      }
    }
  }

  private onHoverItem(sprite: Phaser.GameObjects.Sprite, item: InventorySpace): () => void {
    return function (this: MainScene) {
      //! Show description at the bottom of inventory along with sprite
      this.inventoryOpen = true;
    }
  }

  private onHoverOffItem(sprite: Phaser.GameObjects.Sprite, item: InventorySpace): () => void {
    return function (this: MainScene) {
      //! Hide description 
    }
  }

  private onFall(ingredient: Phaser.GameObjects.Image, item: Item): void {
    this.disableInput = false;
    ingredient.destroy();
    
    this.emitter.explode(16, center.x, 380);
    this.inCauldron.push(item.id);
  }

  private onClickBoil(): () => void {
    return function (this: MainScene) {
      if (!this.disableInput) {
        if (this.inCauldron.length != 0 && this.inCauldron[this.inCauldron.length - 1] != 'boil') {
          this.inCauldron.push('boil');
        }
        if (this.cauldron.texture.key == 'cauldron') {
          this.cauldron.setTexture('cauldronBoil');
          this.time.delayedCall(1000, () => {
            this.cauldron.setTexture('cauldron');
          });
        }
      }
    }
  }

  private onClickStir(): () => void {
    return function (this: MainScene) {
      if (!this.disableInput) {
        if (this.inCauldron.length != 0 && this.inCauldron[this.inCauldron.length - 1] != 'stir') {
          this.inCauldron.push('stir');
        }
        if (this.cauldron.texture.key == 'cauldron') {
          this.cauldron.setTexture('cauldronStir');
          this.time.delayedCall(1000, () => {
            this.cauldron.setTexture('cauldron');
          });
        }
      }
      
    }
  }

  private onClickFinishPotion(): () => void {
    return function (this: MainScene) {
      if (!this.disableInput) {
        let potionString = this.inCauldron.join('/');
        if (potionString == '') {
          return;
        }
        this.inCauldron = [];
        let potionFound = false;
        potionlist.forEach(p => {
          if (p.string == potionString) {
            this.savedata.sold.push(p);
            this.createPotion(p.name, p.fullName);
            potionFound = true;
          }
        });
        if (!potionFound) this.failPotion();
      }
    }
  }

  private onClickEndDay(): () => void {
    return function (this: MainScene) {
      if (!this.disableInput) {
        //! ASK FOR CONFIRMATION
        this.endDay();
      }
    }
  }


  private createPotion(id: string, name: string): void {
    this.showShowcase(id, name, 'buttonOk');
    this.autoSave();
  }

  private failPotion(): void {
    this.showShowcase('marisad', 'Potion failed!', 'buttonOk');
    this.autoSave();
  }

  private autoSave(): void {
    SaveManager.save(this.savedata);
  }

  private showShowcase(id: string, text: string, button: string) {
    let showcase = new Showcase(this, id, text);
    showcase.setDepth(100);
    let okButton = new Button(0, 80, this, () => {this.disableInput = false; showcase.destroy();}, button);
    showcase.add(okButton);
    this.add.existing(showcase);
  }
  private loadSave(): void {
    let save: Savedata = SaveManager.load()
  
    if (save && save.inventory) {
      this.savedata = save;
    } else {
      this.savedata = {
        day: 1,
        money: 10,
        inventory: new Inventory(),
        sold: []
      };
    }
  }

  private endDay(): void {
    this.inCauldron = [];
    this.autoSave();
    this.cameras.main.fadeOut(500);
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
      this.time.delayedCall(1000, () => {
        this.scene.start('DayEndScene');
      });
    });
  }

  /* //! snippet to wait until fade is complete before changing scenes 
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
      this.time.delayedCall(1000, () => {
        this.scene.start('phaser-logo')
      })
    })
  */

  /*
  private onClick(star: Phaser.Physics.Arcade.Image): () => void {
    return function (this: MainScene) {
      star.setTint(0x00ff00);
      star.setVelocity(0, 0);
      this.starsCaught += 1;
      this.time.delayedCall(100, function (star: Phaser.Physics.Arcade.Image) {
        star.destroy();
      }, [star], this);
    }
  }

  private onFall(star: Phaser.Physics.Arcade.Image): () => void {
    return function (this: MainScene) {
      star.setTint(0xff0000);
      this.starsFallen += 1;
      this.time.delayedCall(100, function (this: MainScene, star: Phaser.Physics.Arcade.Image) {
        star.destroy();
        if (this.starsFallen > 20) {
          this.scene.start("EndingScene", { starsCaught: this.starsCaught });
        }
      }, [star], this);
    }
  }
  
  private emitStar(): void {
    var star: Phaser.Physics.Arcade.Image;
    var x = Phaser.Math.Between(25, 775);
    var y = 26;
    star = this.physics.add.image(x, y, "star");
    star.setDisplaySize(50, 50);
    star.setVelocity(0, 200);
    star.setInteractive();
    star.on('pointerdown', this.onClick(star), this);
    this.physics.add.collider(star, this.sand, this.onFall(star), undefined, this);
  }
  */

}

/*

healing herb        2
mushroom        
ginseng root        
coca leaves         
hydrochloric acid   
opium seeds         
sodium carbonate    
alcohol             
ammonium chloride   
acetic acid         

Healing potion: 
  price 5
  healing herb x1

  mix in cauldron
  boil

antidote:
  price 5
  healing herb x1
  mushroom x1

  create healing potion
  add mushroom
  boil

strength potion
  price 5
  healing herb x2
  mashed ginseng root x1

  mash ginger root
  mix in cauldron with herb
  boil


cocaine:
  mashed coca leaves x1
  hydrochloric acid x1

  mash coca leaves
  mix in cauldron
  boil
  add acid
  boil

morphine:
  mashed opium seeds x1
  sodium carbonate

  mash opium seeds
  add sodium carbonate
  boil
  add alcohol
  boil
  add ammonium chloride
  
heroin:
  morphine x1
  acetic acid x1
 
  just mix

meth
phenyl acetone + methyl amine
boil
+ Sodium cyanoborohydride
boil
+ HCL 
boil
*/

//! particle effects
/* 
in create:


*/