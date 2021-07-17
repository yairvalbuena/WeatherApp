import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-messagepage',
  templateUrl: './messagepage.component.html',
  styleUrls: ['./messagepage.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class MessagepageComponent implements OnInit {

  data:any;

  readonly endpoint:string = 'http://localhost:80/weatherapp/Server/db_get_messages.php';

  constructor(public login: LoginService) {}

  ngOnInit(): void {
    if(this.login.getAuth()=='true'){
      fetch(this.endpoint,{
        method: 'POST',
        body: JSON.stringify('')
      }).then(res=>res.json()).then(data => {
        console.log(data);
        this.data = data.MessageList;
        console.log(this.data);
      });
    }else if(this.login.getAuth()=='false'){
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },2000);
    }

  }

}
