import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminPageRoutingModule } from './adminpage-routing.module';
import { AdminpageComponent } from './adminpage.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    AdminpageComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class AdminMainModule { }
