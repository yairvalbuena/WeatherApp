import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { OpenweatherApiService } from './service/callapi.service';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent implements OnInit {

  city1:any;
  city2:any;
  city3:any;
  city4:any;
  city5:any;
 
  
  constructor(private oPService: OpenweatherApiService, public logged:LoginService){
  }

  ngOnInit(){
    this.city1 = {
      name: '-',
      main: {
        temp: '-',
        feels_like: '-'
      }
    };
    this.city2 = {
      name: '-',
      main: {
        temp: '-',
        feels_like: '-'
      }
    };
    this.city3 = {
      name: '-',
      main: {
        temp: '-',
        feels_like: '-'
      }
    };
    this.city4 = {
      name: '-',
      main: {
        temp: '-',
        feels_like: '-'
      }
    };
    this.city5 = {
      name: '-',
      main: {
        temp: '-',
        feels_like: '-'
      }
    };
    if(this.logged.getAuth()=='false'){
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },2000);
    }
  }

  //Ciudades de Colombia
  mostrarClimaColombia(){

      this.oPService.getData('bogota').subscribe(
        res => this.city1 = res,
        err => console.log(err)
      )
      console.log(this.city1);
      this.oPService.getData('cali').subscribe(
        res => {
          this.city2 = res;
        },
        err => console.log(err)
      )
      this.oPService.getData('melgar').subscribe(
        res => {
          this.city3 = res;
        },
        err => console.log(err)
      )
      this.oPService.getData('leticia').subscribe(
        res => {
          this.city4 = res;
        },
        err => console.log(err)
      )
      this.oPService.getData('medellin').subscribe(
        res => {
          this.city5 = res;
        },
        err => console.log(err)
      )
    
  }


  mostrarClimaLondres(){
    this.oPService.getData('londres').subscribe(
      res => this.city1 = res,
      err => console.log(err)
    )
    console.log(this.city1);
    this.oPService.getData('manchester').subscribe(
      res => {
        this.city2 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('liverpool').subscribe(
      res => {
        this.city3 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('bristol').subscribe(
      res => {
        this.city4 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('oxford').subscribe(
      res => {
        this.city5 = res;
      },
      err => console.log(err)
    )
  
  }


  mostrarClimaIndia(){
    this.oPService.getData('delhi').subscribe(
      res => this.city1 = res,
      err => console.log(err)
    )
    console.log(this.city1);
    this.oPService.getData('bombay').subscribe(
      res => {
        this.city2 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('agra').subscribe(
      res => {
        this.city3 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('jaipur').subscribe(
      res => {
        this.city4 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('benares').subscribe(
      res => {
        this.city5 = res;
      },
      err => console.log(err)
    )
  
  }

  mostrarClimaJapon(){
    this.oPService.getData('tokyo').subscribe(
      res => this.city1 = res,
      err => console.log(err)
    )
    console.log(this.city1);
    this.oPService.getData('kyoto').subscribe(
      res => {
        this.city2 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('sapporo').subscribe(
      res => {
        this.city3 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('hiroshima').subscribe(
      res => {
        this.city4 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('nagasaki').subscribe(
      res => {
        this.city5 = res;
      },
      err => console.log(err)
    )
  
  }

  mostrarClimaEspana(){
    this.oPService.getData('madrid').subscribe(
      res => this.city1 = res,
      err => console.log(err)
    )
    console.log(this.city1);
    this.oPService.getData('sevilla').subscribe(
      res => {
        this.city2 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('barcelona').subscribe(
      res => {
        this.city3 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('zaragoza').subscribe(
      res => {
        this.city4 = res;
      },
      err => console.log(err)
    )
    this.oPService.getData('valencia').subscribe(
      res => {
        this.city5 = res;
      },
      err => console.log(err)
    )
  
  }
  

  noValido(){
    location.href='http://localhost:4200/login';
  }
}
