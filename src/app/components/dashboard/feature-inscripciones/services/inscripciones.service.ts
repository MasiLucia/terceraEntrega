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

  // getInscripcionesList(): Observable<Inscripciones>
  // {
  //   return this.http.get<Inscripciones>(this.listaInscripciones)
  // }

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

  // createInscripcion(route:string, data: any):Observable<any> {
  //    return this.http.post(this.listaInscripciones + route, data)
  // }

  // inscripcion nueva
  // 1 select de estudiantes totales
  // 2 select de cursos totales
  // todo eso viene desde mockapi
  // curso seleccionado=
  // alumno seleccionado= validateVerticalPosition
  // si estas estan vacias
  // get de todas las inscripciones ciclan el array, comparando el nombre con el id del curso y cada vez que haga match lo guardo.

  deleteInscripcion(idInscripcion: number): Observable<Inscripciones> {
    return this.http.delete<Inscripciones>(
      this.URLlistaInscripciones + idInscripcion
    );
  }

  // updateInscripcionSer(inscripcion: Inscripciones): Observable<Inscripciones> {
  //   var response: any;
  //   console.log("data")
  //   response  = this.http.put<Inscripciones>(this.listaInscripciones + inscripcion.idInscripcion, inscripcion).subscribe(data => {
  //     console.log("data")
  //     console.log(data)
  //    return data;
  //    })
  //  return response;

  // }

  updateInscripcionSer(inscripcion: Inscripciones) {
    return this.http
      .put(
        `${this.URLlistaInscripciones}/${inscripcion.idInscripcion}`,
        inscripcion
      )
      .pipe(
        tap({
          next: () => this.inscripcionSubject.next(inscripcion),
        })
      );
  }

  maxId(inscripciones: Inscripciones[]) {
    return Math.max.apply(
      null,
      inscripciones.map(function (inscripcion) {
        return inscripcion.idInscripcion;
      })
    );
  }

  // misCursos(id_estudiante:number){
  //   let miscursos:Observable<Cursos>;

  //      this.listaInscripciones.map(let i = 0; i < this.listaInscripciones.length; i++){
  //        if(this.listaInscripciones[i].(JSON.parse(idEstudiante))===id_estudiante){

  //          this.cursito=this.cursosService.getCursosList(this.).subscribe((response:Cursos) => {
  //           this.cursito = response;
  //       });
  //          console.log(this.cursito);
  //            miscursos.push(this.cursito);
  //          }
  // }
  //   return miscursos;
  // }

  // misCursos(id_estudiante:number){
  //   this.listaestudiantes.map((inscripciones) => {
  //   inscripciones.listaestudiantes.map((inscripcion: any)=> {
  //       if(this.cursoSelected == inscripcion) {
  //       this.inscripcionesAlCurso.push(inscripciones)
  //     }
  //   })
  // } )
  // }
}
