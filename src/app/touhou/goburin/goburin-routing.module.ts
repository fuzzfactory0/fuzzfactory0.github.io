import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoburinComponent } from './goburin.component';

const routes: Routes = [{ path: '', component: GoburinComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoburinRoutingModule { }
