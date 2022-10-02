import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fumo-item',
  templateUrl: './fumo-item.component.html',
  styleUrls: ['./fumo-item.component.scss']
})
export class FumoItemComponent implements OnInit {
  @Input() name: string = 'reimu';
  @Input() price: string = '49.99';
 
  stock: number = Math.floor(Math.random() * 500 + 100);
  soldout: boolean = false;

  realName: string = '';
  constructor() { }

  ngOnInit(): void {
    this.realName = this.name.charAt(0).toUpperCase() + this.name.substring(1);
    this.decreaseStock();
  }

  sellout(): void {
    this.soldout = true;
    this.stock = 0;
  }

  decreaseStock() : void {
    if (this.stock == 0) {
      this.soldout = true;
      return;
    }
    this.stock--;
    setTimeout(() => this.decreaseStock(), 1);
  }
}
