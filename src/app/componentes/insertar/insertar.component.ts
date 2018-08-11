import { Component, OnInit } from '@angular/core';
import { BasedatosService } from '../../servicios/basedatos.service';
import { Datos } from '../../modelo/datos';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {
  nombre='';
  email='';
  constructor(private baseServicio: BasedatosService) { }

  ngOnInit() {
  }

   insertar(nombre:string,email:string){
     let datos: Datos = {
       nombre: nombre,
       email: email

     }
     /* console.log(datos);
     console.log(datos.nombre);
     console.log(datos.email); */
     this.baseServicio.addItem(datos);
     this.nombre='';
     this.email='';
   }
}
