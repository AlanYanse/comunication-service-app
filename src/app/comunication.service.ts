import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ComunicationService {

  private comunicationSource = new Subject(); // Creación del source para comunicar al observable la nueva información
  comunication$ = this.comunicationSource.asObservable(); // creación del observable

  constructor() { }

  sendComunication(desde: string): void{
    this.comunicationSource.next(desde);
  }

}