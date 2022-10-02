import { Item } from "./item";

export class Ginseng implements Item {
  name: string;
  description: string;
  icon: string;
  price: number;
  sellable: boolean;
  ingredient: boolean;

  constructor() {
    this.name = 'Ginseng';
    this.description = 'A root used for centuries in Chinese medicine, believed to boost energy and physical performance.';
    this.icon = 'ginseng';
    this.price = 10;
    this.sellable = false;
    this.ingredient = true;
  }
}