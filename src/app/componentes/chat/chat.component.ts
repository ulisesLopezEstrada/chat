import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../servicios/chat.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string = "";
  elemento:any;
  constructor(public chatServicio: ChatService) { 
      // para obtener los datos me subscribo
     this.chatServicio.cargarMensaje()
       .subscribe(()=>{
       setTimeout(()=>{
        this.elemento.scrollTop = this.elemento.scrollHeight;
       },20)
       
     });
         /* .subscribe ((mensajes:any[])=>{
          console.log(mensajes);
         }); */
   
  }

  ngOnInit() {

    this.elemento = document.getElementById('app-mensajes');
   
  }
  
  enviarMensaje(){
   console.log(this.mensaje);
   
     if (this.mensaje.length===0){
        return;
     }
    
     this.chatServicio.agregarMensaje(this.mensaje)
     .then ( ()=> {
       this.mensaje="";
       console.log('Mensaje enviado')
      })
     .catch ((err)=>console.error('Error al enviar',err));
  }

}
