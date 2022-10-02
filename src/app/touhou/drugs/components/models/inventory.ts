import { InventorySpace } from "./inventorySpace";
import { Ginseng } from "./ginseng";
import { Herb } from "./herb";
import { Mushroom } from "./mushroom";
import { Coca } from "./coca";
import { HCl } from "./hcl";

export class Inventory {
  herb: InventorySpace = new InventorySpace(new Herb(), 0, true);
  mushroom: InventorySpace = new InventorySpace(new Mushroom(), 0, true);
  ginseng: InventorySpace = new InventorySpace(new Ginseng(), 0, false);
  coca: InventorySpace = new InventorySpace(new Coca(), 0, false);
  hcl: InventorySpace = new InventorySpace(new HCl(), 0, false);

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