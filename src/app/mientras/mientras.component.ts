import { Component, OnInit } from '@angular/core';
import { ChatService } from '../servicios/chat.service';
import { Observable } from 'rxjs';
import { Mensaje } from '../modelo/mensaje';

@Component({
  selector: 'app-mientras',
  templateUrl: './mientras.component.html',
  styleUrls: ['./mientras.component.css']
})
export class MientrasComponent implements OnInit {

  msj: Observable<Mensaje[]>;
 
  
  constructor(private s:ChatService) { }

  ngOnInit() {

    this.msj=this.s.cargar();
    console.log("xxxxxxx",this.msj);
  }
 
}
