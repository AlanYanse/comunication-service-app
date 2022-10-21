import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../../comunication.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  recibido: string = "";
  info: string = "";
  name: string = "componente1";

  constructor(private comunicationService: ComunicationService) { }

  ngOnInit() {
    // Subscripción al observable
    this.comunicationService.comunication$.subscribe((x: string) => {

      this.info = this.name != x ? "he recibido mi subscripción" : "he enviado la subscripción";

    });
  }

  enviandoMensajeAl2(): void{

    
    const desde: string = "componente1";
    // Cargar de datos el observable
    this.comunicationService.sendComunication(desde);
  }

}