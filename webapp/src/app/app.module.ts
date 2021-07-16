import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MainModuleLogin } from './login/main/main.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { WeatherPageRoutingModule } from './weather-page/weather-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageMainModule} from './register/registerpage/registerpage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModuleLogin,
    FormsModule,
    HttpClientModule,
    WeatherPageRoutingModule,
    ReactiveFormsModule,
    RegisterPageMainModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
