import { Inscripciones } from './../../../../shared/interfaces/inscripciones';

import { EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';
import { CursosService } from '../../feature-cursos/cursos/services/cursos.service';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, tap, pipe } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  URLlistaInscripciones =
    'https://62af7944b0a980a2ef40b08d.mockapi.io/campus/v1/inscripciones/';

  cursito: Cursos;

  inscripcionSubject = new Subject<any>();

  constructor(
    private http: HttpClient,
    private cursosService: CursosService,
    private estudiantesService: EstudiantesService
  ) {}

  getInscripcionesList(): Observable<Inscripciones[]> {
    return this.http.get<Inscripciones[]>(this.URLlistaInscripciones);
  }

  getSingleInscripcion(idInscripcion: number): Observable<Inscripciones> {
    return this.http.get<Inscripciones>(this.URLlistaInscripciones + idInscripcion);
  }

  createInscripcion(inscripcion: Inscripciones): Observable<any> {
    var response: any;
    response = this.http
      .post<Inscripciones>(this.URLlistaInscripciones, inscripcion)
      .subscribe((data) => {
        return data;
      });
    return response;
  }



  deleteInscripcion(idInscripcion: number): Observable<Inscripciones> {
    return this.http.delete<Inscripciones>(
      this.URLlistaInscripciones + idInscripcion
    );
  }


  updateInscripcionSer(inscripcion: Inscripciones) {
    var response: any;
  response  = this.http.put(this.URLlistaInscripciones + inscripcion.idInscripcion,inscripcion).subscribe(data => {
      console.log("data")
      console.log(data)
     return data;
  })
}

  maxId(inscripciones: Inscripciones[]) {
    return Math.max.apply(
      null,
      inscripciones.map(function (inscripcion) {
        return inscripcion.idInscripcion;
      })
    );
  }

  misCursos(idEstudiante:number){
    let miscursos:Cursos[]= [];


   let cursos=JSON.parse(localStorage.getItem('cursos') || 'false')
   let inscripciones= JSON.parse(localStorage.getItem('inscripciones') || 'false')
       for(let i = 0; i < inscripciones.length; i++){
         if(String(inscripciones[i].idEstudiante)===(String(idEstudiante))){
          miscursos.push(cursos[inscripciones[i].idCurso-1  ].idCurso)
           }
        }
        console.log("loscursitosde mis cursos");
        console.log(miscursos);
    return miscursos;
  }

}
