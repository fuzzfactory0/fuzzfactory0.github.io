import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'touhou', loadChildren: () => import('./touhou/touhou.module').then(m => m.TouhouModule) },
  { path: 'yuri', loadChildren: () => import('./yuri/yuri.module').then(m => m.YuriModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
