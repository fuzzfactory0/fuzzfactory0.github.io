import { InventorySpace } from "./inventorySpace";
import { Item } from "./item";

export class Inventory {
  herb: InventorySpace = new InventorySpace(
    new Item(
      'Healing herb',
      'A wild herb with curative properties. It grows naturally in Gensokyo\'s fields.',
      'herb',
      1,
      false,
      true,
    ), 0, true);
  mushroom: InventorySpace = new InventorySpace(
    new Item(
      'Mushroom',
      'Mushrooms from the forest of magic. These are said to neutralize any poison.',
      'mushroom',
      5,
      false,
      true
    ), 0, true);
  ginseng: InventorySpace = new InventorySpace(
    new Item(
      'Ginseng',
      'A root used for centuries in Chinese medicine, believed to boost energy and physical performance.',
      'ginseng',
      10,
      false,
      true
    ), 0, false);
  coca: InventorySpace = new InventorySpace(
    new Item(
      'Coca leaves',
      'Funny leaves imported from Colombia. Don\'t ask how Nitori got her hands on these.',
      'coca',
      15,
      false,
      true
    ), 0, false);
  hcl: InventorySpace = new InventorySpace(
    new Item(
      'Hydrochloric Acid',
      'Also known as muriatic acid, it\'s easily obtainable as drain cleaner in your nearest supermarket.',
      'hcl',
      5,
      false,
      true,
    ), 0, false);

  spaces: InventorySpace[] = [
    this.herb,
    this.mushroom,
    this.ginseng,
    this.coca,
    this.hcl
  ];
}

/* 
opium seeds         
sodium carbonate    
alcohol             
ammonium chloride   
acetic acid         
*/