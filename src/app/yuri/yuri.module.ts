import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YuridexComponent } from './yuridex/yuridex.component';
import { YuriRoutingModule } from './yuri-routing.module';
import { YuripanelComponent } from './yuripanel/yuripanel.component';



@NgModule({
  declarations: [
    YuridexComponent,
    YuripanelComponent,
  ],
  imports: [
    CommonModule,
    YuriRoutingModule
  ]
})
export class YuriModule { }
