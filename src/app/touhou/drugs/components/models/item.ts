export class Item {
  name: string;
  description: string;
  id: string;
  price: number;
  sellable: boolean;
  ingredient: boolean;
  
  constructor(name: string, description: string, id: string, price: number, sellable: boolean, ingredient: boolean) {
    this.name = name;
    this.description = description;
    this.id = id;
    this.price = price;
    this.sellable = sellable;
    this.ingredient = ingredient;
  }
}