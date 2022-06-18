import { Cursos } from './../../../../../shared/interfaces/cursos';
import { Injectable } from '@angular/core';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { map } from 'rxjs/operators';
import { InscripcionesService } from '../../../feature-inscripciones/services/inscripciones.service';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  ListaCursos: Cursos[] = [
    {id: 1, cursoNombre: "React.Js", cursoDias:"lunes y miercoles", precio: 230000, profesor: "Antonio Gallego", detalle:"Curso de react"},
    {id: 2, cursoNombre: "Angular", cursoDias:"martes y jueves", precio: 230000, profesor: "Marcelo Tinelli", detalle:"Curso de angular"},
    {id: 3, cursoNombre: "Vue.Js", cursoDias:"sabados", precio: 230000, profesor: "Ricardo Fort", detalle:"Curso de Vue"},
  ];
  
 curso:Cursos;
  constructor() { }

  getCursos(){
    return this.ListaCursos.slice();
  }

 
  eliminarCursos(index: number){
    this.ListaCursos.splice(index, 1);
  }

  editarCursos(curso: Cursos){
      const index = this.ListaCursos.findIndex(c => c.id === curso.id)
      this.ListaCursos[index] = curso;
  }

  agregarCursos(curso: Cursos){
    this.ListaCursos.unshift(curso);

  }

  maxId(curso:Cursos[]){
    return Math.max.apply(null,
      curso.map(function(o) { return o.id; }));
  }

  getCurso(ids:number){
    this.curso =this.ListaCursos[ids];
    return this.curso;
  }
  


}
