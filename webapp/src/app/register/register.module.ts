import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule
  ]
})
export class RegisterModule { }
