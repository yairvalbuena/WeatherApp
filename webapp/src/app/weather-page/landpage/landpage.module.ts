import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandpageRoutingModule } from './landpage-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LandpageComponent } from './landpage.component';


@NgModule({
  declarations: [
    LandpageComponent
  ],
  imports: [
    CommonModule,
    LandpageRoutingModule,
    ReactiveFormsModule
  ]
})
export class LandPageModule { }
