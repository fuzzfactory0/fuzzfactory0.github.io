import * as Phaser from 'phaser';
import { Item } from '../models/item';
import { Herb } from '../models/herb';
import { InventorySpace } from '../models/inventorySpace';
import { height, width, center } from './config';
import { Mushroom } from '../models/mushroom';
import { HealingPotion } from '../models/healingPotion';
import { Inventory } from '../models/inventory';

export class MainScene extends Phaser.Scene {
  money: number = 10;
  
  inventoryDrawerPosition!: number;
  shopPosition!: number;
  recipesPosition!: number;

  inventoryDrawer!: Phaser.GameObjects.Container;
  shop!: Phaser.GameObjects.Image;
  recipes!: Phaser.GameObjects.Image;

  inventoryOpen: boolean = false;
  shopOpen: boolean = false;
  recipesOpen: boolean = false;
  
  inventory: Inventory = new Inventory();
  inventorySprites: Phaser.GameObjects.Container[] = [];

  inCauldron: string = '';
  cauldronText!: Phaser.GameObjects.Text;

  cauldron!: Phaser.Physics.Arcade.Image;

  constructor() {
    super({ key: 'MainScene' });
  }

  init(/*params: any*/): void {
    this.inventoryDrawerPosition = 1280;
    this.shopPosition = -350;
    this.recipesPosition = 0;
  }

  preload(): void {
    this.load.setBaseURL('../../../../../assets/drugs/');
    this.load.image('background', 'images/background.png');
    this.load.image('inventory', 'images/inventory.png');
    this.load.image('shop', 'images/inventory.png');
    this.load.image('cauldron', 'images/cauldron.png');
    this.load.image('recipes', 'images/recipes.png');
    this.load.image('buttonLeft', 'images/buttonLeft.png');
    this.load.image('buttonRight', 'images/buttonRight.png');
    this.load.image('herb', 'images/herb.png');
    this.load.image('mushroom', 'images/mushroom.png');
    this.load.image('ginseng', 'images/ginseng.png');
    this.load.image('coca', 'images/coca.png');
    this.load.image('hcl', 'images/hcl.png');
    this.load.image('healing', 'images/healing.png');
  }

  create(): void {
    this.add.image(center.x, center.y, 'background');

    // Handle inventory
    this.inventory.herb.amount = 3;
    this.inventory.mushroom.amount = 1;
    this.inventoryDrawer = this.add.container(this.inventoryDrawerPosition, 0);
    const inventoryBG = this.add.image(0, 0, 'inventory').setOrigin(0, 0);
    const openInventoryButton = this.add.image(-64, 32, 'buttonLeft').setOrigin(0, 0)
      .setInteractive()
      .on('pointerdown', function (this: MainScene) {
        this.inventoryOpen = !this.inventoryOpen;
        openInventoryButton.setTexture(this.inventoryOpen ? 'buttonRight' : 'buttonLeft');
      }, this)

    this.inventoryDrawer.add([inventoryBG, openInventoryButton]);

    this.updateInventory();

    this.cauldron = this.physics.add.staticImage(center.x, 500, 'cauldron');
    this.cauldronText = this.add.text(200, 250, this.inCauldron, { font: '48px Arial Bold', color: '#FBFBAC' });
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
  }

  override update(time: number): void {
    if (this.inventoryOpen && this.inventoryDrawer.x > 1280-350) {
      this.inventoryDrawer.x -= 70;
    }

    if (!this.inventoryOpen && this.inventoryDrawer.x < 1280) {
      this.inventoryDrawer.x += 70;
    }
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

    this.inventory.spaces.forEach(i => {
      if (i.item) {
        let x = (this.inventory.spaces.indexOf(i) % 3) * spacing;
        let y = Math.floor(this.inventory.spaces.indexOf(i) / 3) * spacing;

        let sprite = this.add.sprite(0, 0, i.item.icon);
        if (i.amount > 0) {
          sprite.setInteractive()
            .on('pointerdown', this.onClickItem(sprite, i), this)
            .on('pointerover', this.onHoverItem(sprite, i), this)
            .on('pointerout', this.onHoverOffItem(sprite, i), this)
        } else {
          sprite.setTint(0x888888);
        }

        let number = this.add.text(textOffsetX, textOffsetY, i.amount.toString(), { font: '24px Roboto', color: '#FF0000' });

        let itemContainer = this.add.container(x + offsetX, y + offsetY);
          
        itemContainer.add([sprite, number]);
        this.inventorySprites.push(itemContainer);
        this.inventoryDrawer.add(itemContainer);
      }
    });
  }

  // Handle adding ingredients to cauldron
  private onClickItem(sprite: Phaser.GameObjects.Sprite, space: InventorySpace): () => void {
    return function (this: MainScene) {
      if (space.unlocked && space.item.ingredient && space.amount > 0) {
        let ingredient = this.physics.add.image(center.x, 0, space.item.icon);
        let ang = (Math.random() * 500 + 500) * Math.sign(Math.random() - 0.5)
        ingredient.setRotation(Math.random() * 2 * Math.PI);
        ingredient.setAngularVelocity(ang);
        ingredient.setAngularDrag(Math.abs(ang))
        this.physics.add.collider(ingredient, this.cauldron, this.onFall(ingredient, space.item), undefined, this);
        
        space.amount--;
        this.updateInventory();
      }
    }
  }

  private onHoverItem(sprite: Phaser.GameObjects.Sprite, item: InventorySpace): () => void {
    return function (this: MainScene) {
      //! Show description at the bottom of inventory along with sprite
    }
  }

  private onHoverOffItem(sprite: Phaser.GameObjects.Sprite, item: InventorySpace): () => void {
    return function (this: MainScene) {
      //! Hide description 
    }
  }

  private onFall(ingredient: Phaser.Physics.Arcade.Image, item: Item): () => void {
    return function (this: MainScene) {
      ingredient.destroy();
      this.cauldronText.text += item.name + ', '
    }
  }
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