import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagePageRoutingModule } from './messagepage-routing.module';
import { MessagepageComponent } from './messagepage.component';


@NgModule({
  declarations: [
    MessagepageComponent
  ],
  imports: [
    CommonModule,
    MessagePageRoutingModule
  ]
})
export class MessagesMainModule { }