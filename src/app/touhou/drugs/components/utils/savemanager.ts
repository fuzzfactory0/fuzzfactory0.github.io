import { Savedata } from "../models/savedata"

export class SaveManager {
  static save = function (save: Savedata): void {
    localStorage.setItem('save', JSON.stringify(save));
  }

  static load = function(): Savedata {
    return JSON.parse(localStorage.getItem('save') || '{}');
  }

  static clear = function(): void {
    localStorage.clear();
  }
}