import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../login/main/main.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  readonly endpointsesion:string = 'http://localhost:80/weatherapp/Server/db_logout.php';

  constructor(public loggedService: LoginService) { };

  ngOnInit(): void {
  }

  cerrarSesion(){
    fetch(this.endpointsesion,{
      method: 'POST',
      body: JSON.stringify(this.loggedService.getId())
    });
    this.loggedService.setAuth('login Out');
    this.loggedService.setNombre('');
    this.loggedService.setUser('');
    this.loggedService.setId('');
    
    setInterval(function(){
      location.href="http://localhost:4200/login";
    },2000);
  }

}
