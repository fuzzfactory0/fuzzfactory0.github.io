import { Item } from "./item";

export class HealingPotion implements Item {
  name: string;
  description: string;
  id: string;
  price: number;
  sellable: boolean;
  ingredient: boolean;

  constructor() {
    this.name = 'Healing Potion';
    this.description = 'A basic potion for treating small injuries and minor illnesses.';
    this.id = 'healing';
    this.price = 5;
    this.sellable = true;
    this.ingredient = false;
  }
}