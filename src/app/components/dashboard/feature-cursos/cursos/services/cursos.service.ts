import { Cursos } from './../../../../../shared/interfaces/cursos';
import { Injectable } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { map } from 'rxjs/operators';
import { InscripcionesService } from '../../../feature-inscripciones/services/inscripciones.service';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  listaCursos = 'https://62af7944b0a980a2ef40b08d.mockapi.io/campus/v1/cursos/'

  constructor(private http: HttpClient) { }


  getCursosList(): Observable<Cursos[]>
  {
    return this.http.get<Cursos[]>(this.listaCursos)

  }


getSingleCurso(idCurso:number): Observable<Cursos> {
  var response: any;
  response  = this.http.get<Cursos>(this.listaCursos + idCurso ).subscribe(data => {
   return data;
   })
 return response;

}



createCurso(curso: Cursos):Observable<Cursos> {
  var response: any;
   response  = this.http.post<Cursos>(this.listaCursos, curso).subscribe(data => {
    return data;
    })
  return response;


}

deleteCurso(idCurso: number): Observable<Cursos> {
  return this.http.delete<Cursos>(this.listaCursos + idCurso);
}


updateCursoSer(curso: Cursos): Observable<Cursos> {

  var response: any;
  console.log("data")
  response  = this.http.put<Cursos>(this.listaCursos + curso.idCurso, curso).subscribe(data => {
    console.log("data")
    console.log(data)
   return data;
   })
 return response;



}



}
