import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../../comunication.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  recibido: string = "";
  info: string = "";
  name: string = "componente2";

  constructor(private comunicationService: ComunicationService) { }

  ngOnInit() {

    // Subscripción al observable

    this.comunicationService.comunication$.subscribe((x: string) => {


      this.info = this.name != x ? "he recibido mi subscripción" : "he enviado la subscripción";

           
    });
    

  }

  enviandoMensajeAl1(): void{

    const desde = "componente2";
    // Cargar de datos el observable
    this.comunicationService.sendComunication(desde);
  }

}