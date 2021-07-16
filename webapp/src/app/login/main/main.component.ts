import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public formLogin = new FormGroup({});
  readonly endpoint:string = 'http://localhost:80/weatherapp/Server/db_user_login.php';
  readonly endpointIniciar:string = 'http://localhost:80/weatherapp/Server/db_login.php';

  constructor(private formBuilder: FormBuilder, public loginService: LoginService) { };

  ngOnInit(): void {
    this.loginService.setAuth('false');
    this.formLogin = this.formBuilder.group({
      user: ['',Validators.required],
      pass: ['',Validators.required]
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
    console.log('boton enviar');
    if(this.formLogin.valid){
      fetch(this.endpoint,{
        method: 'POST',
        body: JSON.stringify(this.formLogin.value)
      }).then(res=>res.json()).then(data => {
        console.log(data);
        if(this.formLogin.value['user'] == data.listaUsuario[0]['user'] && this.formLogin.value['pass'] == data.listaUsuario[0]['password']){
          this.loginService.setAuth('true');
          console.log("logeado");
          this.loginService.setNombre(data.listaUsuario[0].name);
          this.loginService.setId(data.listaUsuario[0].id);
          this.loginService.setUser(data.listaUsuario[0].user);
          if(data.listaUsuario[0].rol==1){
            this.loginService.setRol("Admin");
          }
          else{ this.loginService.setRol("Cliente");}
          fetch(this.endpointIniciar,{
            method: 'POST',
            body: JSON.stringify(this.loginService.getId())
          });
          setInterval(function(){
            location.href="http://localhost:4200/weather-page";
          },2000);  
        }
      }).catch(err=>{
        alert("Ingrese los datos correctamente");
      });
    }else{
    }
  }


}
