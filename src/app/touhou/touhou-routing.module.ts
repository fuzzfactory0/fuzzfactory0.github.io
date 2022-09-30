import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TouhouComponent } from './touhou.component';

const routes: Routes = [
  { path: '', component: TouhouComponent }, 
  { path: 'math', loadChildren: () => import('./math/math.module').then(m => m.MathModule) },
  { path: 'drugs', loadChildren: () => import('./drugs/drugs.module').then(m => m.DrugsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouhouRoutingModule { }
