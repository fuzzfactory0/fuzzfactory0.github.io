import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathRoutingModule } from './math-routing.module';
import { MathComponent } from './math.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MathComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MathRoutingModule
  ]
})
export class MathModule { }
