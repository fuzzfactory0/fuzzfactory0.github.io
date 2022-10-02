import { Item } from "./item";

export class Mushroom implements Item {
  name: string;
  description: string;
  icon: string;
  price: number;
  sellable: boolean;
  ingredient: boolean;

  constructor() {
    this.name = 'Mushroom';
    this.description = 'Mushrooms from the forest of magic. These are said to neutralize any poison.';
    this.icon = 'mushroom';
    this.price = 5;
    this.sellable = false;
    this.ingredient = true;
  }
}