import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions, MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { YuridexComponent } from './yuridex/yuridex.component';
import { YuriRoutingModule } from './yuri-routing.module';
import { YuripanelComponent } from './yuridex/yuripanel/yuripanel.component';
import { YurilistComponent } from './yuridex/yurilist/yurilist.component';

export const customTooltipOptions: MatTooltipDefaultOptions = {
  disableTooltipInteractivity: true,
  showDelay: 0,
  hideDelay: 0,
  touchendHideDelay: 0
}

@NgModule({
  declarations: [
    YuridexComponent,
    YuripanelComponent,
    YurilistComponent
  ],
  imports: [
    CommonModule,
    YuriRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    FormsModule,
    MatChipsModule,
    MatCheckboxModule
  ],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: customTooltipOptions }
  ]
})
export class YuriModule { }
