import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.scss'],
    standalone: false
})
export class SaleComponent implements OnInit {

  constructor() { }

  fumolist = [
    { name: 'reimu', price: '49.99' },
    { name: 'marisa', price: '69.99' },
    { name: 'cirno', price: '29.99' },
    { name: 'chen', price: '49.99' },
    { name: 'flandre', price: '149.99' },
    { name: 'koishi', price: '99.99' },
    { name: 'mokou', price: '89.99' },
    { name: 'momiji', price: '49.99' },
    { name: 'patchouli', price: '129.99' },
    { name: 'remilia', price: '159.99' },
    { name: 'sakuya', price: '59.99' },
    { name: 'youmu', price: '199.99' },
    { name: 'satori', price: '44.99' },
    { name: 'yuyuko', price: '169.99' },
  ]

  ngOnInit(): void {
  }

}
