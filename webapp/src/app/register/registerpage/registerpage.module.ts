import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './registerpage-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterpageComponent } from './registerpage.component';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    RegisterpageComponent
  ],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class RegisterPageMainModule { }
