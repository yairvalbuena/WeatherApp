import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})


@Injectable({
  providedIn: 'root'
})

export class RegisterpageComponent implements OnInit {

  public formLogin = new FormGroup({});
  readonly endpoint:string = 'http://localhost:80/weatherapp/Server/db_register_user.php';

  constructor(private formBuilder: FormBuilder, public loginService:LoginService) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  userFormControl = new FormControl('', [
    Validators.required
  ]);
  passFormControl = new FormControl('', [
    Validators.required
  ]);


  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      name: ['', Validators.required],
      user: ['', Validators.required],
      email: ['', Validators.required,  Validators.email],
      pass: ['',  Validators.required]
    });
    
    if(this.loginService.getAuth()=='cerrando'){
      this.loginService.setAuth('false');      
    }else if(this.loginService.getAuth()=='true'){
      setInterval(function(){
        location.href="http://localhost:4200/weather-page";
      },2000);
    }
  }

  send():any{

    console.log(this.formLogin.value)
    if(this.formLogin.valid){
      fetch(this.endpoint,{
        method: 'POST',
        body: JSON.stringify(this.formLogin.value)
      });
      alert("El usuario se ha creado correctamente, redirigiendo al inicio");
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },2000);
      
    }else{
      alert("Por favor, ingrese los datos correctos");
    }
  }
}
