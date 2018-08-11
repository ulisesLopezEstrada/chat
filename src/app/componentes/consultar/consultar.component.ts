import { Component, OnInit } from '@angular/core';
import { BasedatosService } from '../../servicios/basedatos.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  constructor(public baseServicio: BasedatosService) { }

  ngOnInit() {
  }

}
