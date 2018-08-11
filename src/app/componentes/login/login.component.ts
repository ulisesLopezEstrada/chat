import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../servicios/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public chatservicio:ChatService) { }

  ngOnInit() {
  }


  ingresar(proveedor:string){
    this.chatservicio.login(proveedor);
  }

 /*  salir(){
    this.chatservicio.logout();
  } */
}
