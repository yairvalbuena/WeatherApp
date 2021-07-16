import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor() { 
  }
  setAuth(value:string){
    localStorage.setItem('auth',value);
  }
  getAuth(){
    return localStorage.getItem('auth');
  }
  setNombre(value:string){
    localStorage.setItem('name',value);
  }
  getNombre(){
    return localStorage.getItem('name');
  }
  setUser(value:string){
    localStorage.setItem('user',value);
  }
  getUser(){
    return localStorage.getItem('user');
  }
  setId(value:string){
    localStorage.setItem('ididentified',value);
  }
  getId(){
    return localStorage.getItem('ididentified');
  }

  setRol(value:string){
    localStorage.setItem('rol',value);
  }
  getRol(){
    return localStorage.getItem('rol');
  }
  
  cerrarSesion(){
    location.href="http://localhost:4200/login";
  }


}
