
import { Component, OnInit} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  mostrarEdit:boolean=false;
  data:any;
  correo:any;
  nombre:any;
  user:any;
  userId:any;

  readonly endpoint:string = 'http://localhost:80/weatherapp/Server/db_get_user.php';
  readonly endpointEliminar:string = 'http://localhost:80/weatherapp/Server/db_delete_user.php';
  readonly endpointEditar:string = 'http://localhost:80/weatherapp/Server/db_edit_user.php';

  constructor(public looged: LoginService) { 
  }

  ngOnInit(): void {
    if(this.looged.getAuth()=='true'){
      fetch(this.endpoint,{
        method: 'POST',
        body: JSON.stringify('')
      }).then(res=>res.json()).then(data => {
        this.data = data.listaUsuarios;
        console.log(this.data)
      });
    }else if(this.looged.getAuth()=='false' ){
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },100);
    }
    console.log(this.nombre);
    if(this.looged.getRol()!=='Admin'){
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },1000);
    }

  }

  eliminar(id:any){
    console.log(id);
    fetch(this.endpointEliminar,{
      method: 'POST',
      body: JSON.stringify({"userId":id})
    });
    location.reload();
  }

  editar(id:any, name:any, usuario:any, email:any){
    this.userId = id;
    this.nombre = name;
    this.user = usuario;
    this.correo = email;
    this.mostrarEdit = true;
  }
  terminarEditar(name:any, usuario:any, email:any){
    /**/
    this.userId = this.userId;
    this.nombre = name;
    this.user = usuario;
    this.correo = email;
    fetch(this.endpointEditar,{
      method: 'POST',
      body: JSON.stringify({"userId":this.userId,"nombre":this.nombre,"correo":this.correo,"usuario":this.user})
    });
    this.mostrarEdit = false;
    location.reload();
  }

}
