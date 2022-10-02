import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrugsRoutingModule } from './drugs-routing.module';
import { DrugsComponent } from './drugs.component';
import { DrugsGameComponent } from './components/drugs-game/drugs-game.component';


@NgModule({
  declarations: [
    DrugsComponent,
    DrugsGameComponent
  ],
  imports: [
    CommonModule,
    DrugsRoutingModule
  ]
})
export class DrugsModule { }
