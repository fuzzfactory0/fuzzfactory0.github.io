import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YuridexComponent } from './yuridex/yuridex.component';

const routes: Routes = [
  { path: '', component: YuridexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YuriRoutingModule { }
