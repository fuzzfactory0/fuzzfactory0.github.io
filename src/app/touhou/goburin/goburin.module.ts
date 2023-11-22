import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoburinRoutingModule } from './goburin-routing.module';
import { GoburinComponent } from './goburin.component';


@NgModule({
  declarations: [
    GoburinComponent
  ],
  imports: [
    CommonModule,
    GoburinRoutingModule
  ]
})
export class GoburinModule { }
