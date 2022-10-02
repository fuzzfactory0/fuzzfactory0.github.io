import { Item } from "./item";

export class Coca implements Item {
  name: string;
  description: string;
  icon: string;
  price: number;
  sellable: boolean;
  ingredient: boolean;

  constructor() {
    this.name = 'Coca leaves';
    this.description = 'Funny leaves sourced from Colombia. Don\'t ask how Marisa got her hands on these.';
    this.icon = 'coca';
    this.price = 15;
    this.sellable = false;
    this.ingredient = true;
  }
}