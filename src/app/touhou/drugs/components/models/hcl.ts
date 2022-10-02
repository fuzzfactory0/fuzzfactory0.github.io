import { Item } from "./item";

export class HCl implements Item {
  name: string;
  description: string;
  icon: string;
  price: number;
  sellable: boolean;
  ingredient: boolean;

  constructor() {
    this.name = 'Hydrochloric Acid';
    this.description = 'Also known as muriatic acid, it\'s easily obtainable as drain cleaner in your nearest supermarket.';
    this.icon = 'hcl';
    this.price = 5;
    this.sellable = false;
    this.ingredient = true;
  }
}