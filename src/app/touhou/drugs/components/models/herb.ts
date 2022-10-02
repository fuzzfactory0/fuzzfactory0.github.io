import { Item } from "./item";

export class Herb implements Item {
  name: string;
  description: string;
  icon: string;
  price: number;
  sellable: boolean;
  ingredient: boolean;

  constructor() {
    this.name = 'Healing herb';
    this.description = 'A wild herb with curative properties, which grows naturally in Gensokyo\'s fields.';
    this.icon = 'herb';
    this.price = 1;
    this.sellable = false;
    this.ingredient = true;
  }
}