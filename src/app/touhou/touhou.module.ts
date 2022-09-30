import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouhouRoutingModule } from './touhou-routing.module';
import { TouhouComponent } from './touhou.component';


@NgModule({
  declarations: [
    TouhouComponent
  ],
  imports: [
    CommonModule,
    TouhouRoutingModule
  ]
})
export class TouhouModule { }
