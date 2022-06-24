
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  ListaEstudiantes=  [
    // {id:1, nombre: "Juan Carlos",  apellido:"Martinez", inscripciones:[{id: 1, curso: "React", nota: 10}], usuario: 'jc345'}
  {id:1,nombre: "Juan Carlos",  apellido:"Martinez",curso: 'React', nota: 4 , usuario: 'jc345'},
   {id:2,nombre: "Neri", apellido:"Ballanti", curso: 'IA', nota: 10 , usuario: 'neri96'},
   {id:3,nombre: "Julio", apellido:"Rodriguez", curso: 'Datascience', nota: 5 , usuario: 'julio395'},
   {id:4,nombre: "Juana", apellido:"Bustos", curso: 'Angular', nota: 9 , usuario: 'juani23'},
     {id:5,nombre: "Mayra", apellido:"Sanchez", curso: 'Vue', nota: 6 , usuario: 'maygs'},
     {id:6,nombre: "Pedro",  apellido:"Gimenez",curso: 'Javascript', nota: 8 , usuario: 'pedrokpo'},
     {id:7,nombre: "Paula", apellido:"Zuliani", curso: 'React', nota: 1 , usuario: 'poli54'},
     {id:8,nombre: "Roberto", apellido:"Carlos", curso: 'UX/UI', nota: 4 , usuario: 'roberden'},
     {id:0,nombre: "Esteban",  apellido:"De la Torre",curso: 'Marketing', nota: 7 , usuario: 'estanki'}

  ];
  constructor() { }

  // getAlumnos(){
  //   return this.ListaEstudiantes.slice();
  // }

  // eliminarEstudiante(index: number){
  //   this.ListaEstudiantes.splice(index, 1);
  // }

  // editarEstudiante(estudiante: mockEstudiantes){
  //     const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id)
  //     this.ListaEstudiantes[index] = estudiante;
  // }

  // agregarEstudiante(estudiante: mockEstudiantes){
  //   this.ListaEstudiantes.unshift(estudiante);

  // }

  // editEstudiante(estudiante: mockEstudiantes) {


  //   const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id);
  //   this.ListaEstudiantes[index] = estudiante;


  // }
}
