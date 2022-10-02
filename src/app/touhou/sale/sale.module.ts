import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';
import { FumoItemComponent } from './components/fumo-item/fumo-item.component';


@NgModule({
  declarations: [
    SaleComponent,
    FumoItemComponent,
  ],
  imports: [
    CommonModule,
    SaleRoutingModule
  ]
})
export class SaleModule { }
