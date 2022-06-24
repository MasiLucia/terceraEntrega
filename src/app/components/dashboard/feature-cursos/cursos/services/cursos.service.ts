import { Cursos } from './../../../../../shared/interfaces/cursos';
import { Injectable } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { map } from 'rxjs/operators';
import { InscripcionesService } from '../../../feature-inscripciones/services/inscripciones.service';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  listaCursos = 'https://62af7944b0a980a2ef40b08d.mockapi.io/campus/v1/cursos/';

  constructor(private http: HttpClient) {}
  cursoSubject = new Subject<any>();

  getCursosList(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(this.listaCursos);
  }

  getSingleCurso(idCurso: any): Observable<any> {
    return this.http.get<Cursos>(this.listaCursos + idCurso);
  }

  createCurso(curso: Cursos): Observable<any> {
    var response: any;
    response = this.http
      .post<Cursos>(this.listaCursos, curso)
      .subscribe((data) => {
        return data;
      });
    return response;
  }

  deleteCurso(idCurso: number): Observable<any> {
    return this.http.delete<Cursos>(this.listaCursos + idCurso);
  }

  updateCursoSer(curso: Cursos): Observable<any> {
    var response: any;
    console.log('data');
    response = this.http
      .put<Cursos>(this.listaCursos + curso.idCurso, curso)
      .subscribe((data) => {
        console.log('data');
        console.log(data);
        return data;
      });
    return response;
  }
}
