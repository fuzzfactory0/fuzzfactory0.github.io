import { Item } from "./item";

export class InventorySpace {
  item: Item;
  amount: number;
  unlocked: boolean;

  constructor(item: Item, amount: number, unlocked: boolean) {
    this.item = item;
    this.amount = amount;
    this.unlocked = unlocked;
  }
}