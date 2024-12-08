import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YuridexComponent } from './yuridex/yuridex.component';
import { YuripanelComponent } from './yuridex/yuripanel/yuripanel.component';
import { YurilistComponent } from './yuridex/yurilist/yurilist.component';
import { YurifaqComponent } from './yuridex/yurifaq/yurifaq.component';

const routes: Routes = [
  { 
    path: '',
    component: YuridexComponent,
    children: [
      { path: '', component: YurilistComponent },
      { path: 'series/:id', component: YuripanelComponent },
      { path: 'faq', component: YurifaqComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YuriRoutingModule { }
