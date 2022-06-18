import { Inscripciones } from './../../../../shared/interfaces/inscripciones';

import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';
import { CursosService } from '../../feature-cursos/cursos/services/cursos.service';
import { Cursos } from 'src/app/shared/interfaces/cursos';


@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  inscripciones=  [
    {id:1,id_estudiante:1,id_curso:1,nombre: "Juan Carlos",apellido:"Martinez",curso:'react',dias:"Lunes y Miercoles"},
    {id:2,id_estudiante:2,id_curso:2,nombre: "Juan",apellido:"Gomez",curso:'angular',dias:" Martes y Jueves"},
    {id:3,id_estudiante:3,id_curso:3,nombre: "Neri", apellido:"Ballanti", curso:'vueJS',dias:"Lunes y Miercoles"},
    {id:4,id_estudiante:4,id_curso:2,nombre: "Julio", apellido:"Rodriguez",curso:'angular',dias:"Martes y Jueves"},
    {id:5,id_estudiante:5,id_curso:1,nombre: "Juana", apellido:"Bustos", curso:'react',dias:"Lunes y Miercoles"},
    {id:6,id_estudiante:6,id_curso:2,nombre: "Mayra", apellido:"Sanchez", curso:'angular',dias:"sabado"},
    {id:7,id_estudiante:7,id_curso:3,nombre: "Pedro",  apellido:"Gimenez",curso:'vue.js',dias:"Lunes y Miercoles"},
    {id:8,id_estudiante:8,id_curso:1,nombre: "Paula", apellido:"Zuliani",curso:'react',dias:"Miercoles y Viernes"},
    {id:9,id_estudiante:9,id_curso:3,nombre: "Roberto", apellido:"Carlos", curso:'vueJS',dias:"Lunes y Miercoles"},
    {id:10,id_estudiante:10,id_curso:1,nombre: "Esteban",  apellido:"De la Torre",curso:'react',dias:"Martes y Jueves"}
  ];

  cursito:Cursos;
   
  constructor( private cursosService: CursosService) { }

  getInscripciones(){
    return this.inscripciones.slice();
  }

  eliminarInscripciones(index: number){
    this.inscripciones.splice(index, 1);
  }

  editarInscripciones(inscripcion: Inscripciones){
      const index = this.inscripciones.findIndex(c => c.id === inscripcion.id)
      this.inscripciones[index] = inscripcion;
  }

  agregarInscripciones(inscripcion: Inscripciones){
    this.inscripciones.unshift(inscripcion);

  }

  maxId(inscripciones:Inscripciones[]){
    return Math.max.apply(null,
      inscripciones.map(function(inscripcion) { return inscripcion.id; }));
  }


  misCursos(idEstudiante:number){
    let miscursos:Cursos[]= [];

       for(let i = 0; i < this.inscripciones.length; i++){
         if(this.inscripciones[i].id_estudiante===idEstudiante){
           console.log("el curso numero"+i+"que es del estudiante es:");
           console.log(this.inscripciones[i].id_curso);
           this.cursito=this.cursosService.getCurso(this.inscripciones[i].id_curso)
           console.log(this.cursito);
             miscursos.push(this.cursito);
           }
}
    return miscursos;
  }

}
