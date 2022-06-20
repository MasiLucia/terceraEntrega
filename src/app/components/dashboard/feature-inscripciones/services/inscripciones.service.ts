import { Inscripciones } from './../../../../shared/interfaces/inscripciones';

import { EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';
import { CursosService } from '../../feature-cursos/cursos/services/cursos.service';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  listaInscripciones = 'https://62af7944b0a980a2ef40b08d.mockapi.io/campus/v1/inscripciones'

  cursito:Cursos;

  constructor(private http: HttpClient) { }

  getInscripcionesList(): Observable<Inscripciones[]>
  {
    return this.http.get<Inscripciones[]>(this.listaInscripciones)
  }


getSingleInscripcion(idInscripcion:number): Observable<Inscripciones> {
  var response: any;
  response  = this.http.get<Inscripciones>(this.listaInscripciones + idInscripcion ).subscribe(data => {
   return data;
   })
 return response;

}



createInscripcion(inscripcion: Inscripciones):Observable<Inscripciones> {
  var response: any;
   response  = this.http.post<Inscripciones>(this.listaInscripciones, inscripcion).subscribe(data => {
    return data;
    })
  return response;


}

deleteInscripcion(idInscripcion: number): Observable<Inscripciones> {
  return this.http.delete<Inscripciones>(this.listaInscripciones + idInscripcion);
}


updateInscripcionSer(inscripcion: Inscripciones): Observable<Inscripciones> {
  var response: any;
  console.log("data")
  response  = this.http.put<Inscripciones>(this.listaInscripciones + inscripcion.idInscripcion, inscripcion).subscribe(data => {
    console.log("data")
    console.log(data)
   return data;
   })
 return response;



}



}
