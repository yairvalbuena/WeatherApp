import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagepageComponent } from './messagepage.component';

const routes: Routes = [
  {
    path: '',
    component: MessagepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagePageRoutingModule { }

