import { Inventory } from "./inventory";
import { Potion } from "./potion";

export interface Savedata {
  day: number;
  money: number;
  inventory: Inventory;
  sold: Potion[];
}