import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage.component';

const routes: Routes = [
  {
    path:'',
    component:AdminpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }