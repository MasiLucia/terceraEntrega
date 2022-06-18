import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ListaEstudiantesService {

  // ListaEstudiantes=  [
  //   {id:1,nombre: "Juan Carlos",apellido:"Martinez", edad:25,telefono:115512215, correo: 'algo@ejemplo'},
  //   {id:2,nombre: "Juan",apellido:"Gomez",edad: 30, telefono: 561654215, correo: 'algo@ejemplo'},
  //   {id:3,nombre: "Neri", apellido:"Ballanti", edad: 23, telefono: 156498714654 , correo: 'algo@ejemplo'},
  //   {id:4,nombre: "Julio", apellido:"Rodriguez", edad: 19, telefono: 6516541645 , correo: 'algo@ejemplo'},
  //   {id:5,nombre: "Juana", apellido:"Bustos", edad: 29, telefono: 935484645454 , correo: 'algo@ejemplo'},
  //   {id:6,nombre: "Mayra", apellido:"Sanchez", edad: 35, telefono: 516546315 , correo: 'algo@ejemplo'},
  //   {id:7,nombre: "Pedro",  apellido:"Gimenez",edad: 41, telefono: 53165465, correo: 'algo@ejemplo'},
  //   {id:8,nombre: "Paula", apellido:"Zuliani", edad: 15, telefono: 154987987 , correo: 'algo@ejemplo'},
  //   {id:9,nombre: "Roberto", apellido:"Carlos", edad: 31, telefono: 43654654, correo: 'algo@ejemplo'},
  //   {id:10,nombre: "Esteban",  apellido:"De la Torre",edad:78 , telefono: 5465468547 , correo: 'algo@ejemplo'}
  // ];

  listaEstudiantes = 'https://62a7cefbbedc4ca6d7cdb902.mockapi.io/apicoder/v1/users/'

  constructor(private http: HttpClient) { }


  getEstudiantesList(): Observable<EstudiantesLista[]>
  {
    return this.http.get<EstudiantesLista[]>(this.listaEstudiantes)
  }

  // agregarEstudiante(estudiante: EstudiantesLista): Observable<EstudiantesLista>{
  //   return this.http.post<EstudiantesLista>(this.listaEstudiantes, estudiante)
  // }


//   eliminarEstudiante(index: number){
//     this.ListaEstudiantes.splice(index, 1);
//   }

//   editarEstudiante(estudiante: EstudiantesLista){
//       const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id)
//       this.ListaEstudiantes[index] = estudiante;
//   }

//   agregarEstudiante(estudiante: EstudiantesLista){
//     this.listaEstudiantes.unshift(estudiante);
// }

//   editEstudiante(estudiante: EstudiantesLista) {
//     const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id);
//     this.ListaEstudiantes[index] = estudiante;
//   }

  // maxId(estudiantes:EstudiantesLista[]){
  //   return Math.max.apply(null,
  //     estudiantes.map(function(estudiante) { return estudiante.id; }));
  // }


getSingleStudent(id:number): Observable<EstudiantesLista> {
  var response: any;
  response  = this.http.get<EstudiantesLista>(this.listaEstudiantes + id ).subscribe(data => {
   return data;
   })
 return response;

}



createEstudiante(estudiante: EstudiantesLista):Observable<EstudiantesLista> {
  var response: any;
   response  = this.http.post<EstudiantesLista>(this.listaEstudiantes, estudiante).subscribe(data => {
    return data;
    })
  return response;


}

deleteEstudiante(id: number): Observable<EstudiantesLista> {
  return this.http.delete<EstudiantesLista>(this.listaEstudiantes + id);
}


updateEstudianteSer(estudiante: EstudiantesLista): Observable<EstudiantesLista> {

  var response: any;
  console.log("data")
  response  = this.http.put<EstudiantesLista>(this.listaEstudiantes + estudiante.id, estudiante).subscribe(data => {
    console.log("data")
    console.log(data)
   return data;
   })
 return response;



}



}
