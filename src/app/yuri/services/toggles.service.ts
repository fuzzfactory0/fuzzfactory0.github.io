import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TogglesService {

  showMenu = new BehaviorSubject(false);

  toggleMenu() {
    this.showMenu.next(!this.showMenu.value);
  }

  menuOff() {
    this.showMenu.next(false);
  }

  constructor() { }
}
