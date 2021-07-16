import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'weather-page',
    loadChildren:()=>import('./weather-page/weather-page.module').then(m=>m.WeatherPageModule)
  },
  {
    path: 'login',
    loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'register',
    loadChildren:()=>import('./register/register.module').then(m=>m.RegisterModule)
  },
  {
    path: 'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {   path: '**',
  redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
