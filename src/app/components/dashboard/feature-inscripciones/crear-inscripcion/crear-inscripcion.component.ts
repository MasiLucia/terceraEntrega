import { InscripcionesService } from '../services/inscripciones.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationExtras } from '@angular/router';
import {  Inscripciones } from 'src/app/shared/interfaces/inscripciones';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { CursosService } from '../../feature-cursos/cursos/services/cursos.service';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { ListaEstudiantesService } from '../../feature-estudiantes/services/listaEstudiantes.service';



@Component({
  selector: 'app-crear-inscripcion',
  templateUrl: './crear-inscripcion.component.html',
  styleUrls: ['./crear-inscripcion.component.scss']
})


export class CrearInscripcionComponent implements OnInit {
  cursos: Cursos[] = this._icursoService.getCursos();
  // estudiantes: EstudiantesLista[] = this._estudiantesService.getEstudiantes();
  dias: any[] = ['lunes y miercoles', 'martes y jueves', 'sabado', 'miercoles y viernes'];
  form: FormGroup;
  value: any = null;
  constructor(
               private fb : FormBuilder,
               private _inscripcionesService: InscripcionesService,
               private _icursoService: CursosService,
               private _estudiantesService: ListaEstudiantesService,
               private router: Router,
               private _snackBar: MatSnackBar,

            ) { const navigation = this.router.getCurrentNavigation();
                 this.value = navigation?.extras?.state;

            this.form = this.fb.group({
              id:[this._inscripcionesService.maxId(this._inscripcionesService.getInscripciones())+1],
              id_estudiante:[""],
              id_curso:[""],
              estudiante:  ["",  [Validators.required, Validators.maxLength(40)]],
              curso:  ["",  [Validators.required]],
              dias: ["",  [Validators.required]],

            });
   }


  ngOnInit(): void {

  }

//   guardar(){
//     const estudiante: Inscripciones={
//       id: this.form.value.id,
//       id_curso:this.form.value.curso,
//       id_estudiante:this.form.value.estudiante,
//       // nombre: this.estudiantes[this.form.value.estudiante-1].nombre,
//       apellido: this.form.value.apellido,
//       curso: this.cursos[this.form.value.curso-1].cursoNombre,
//       dias: this.form.value.dias,
//     }
// console.log("estudiante a guardar");
// console.log(estudiante);
//     this._inscripcionesService.agregarInscripciones(estudiante);
//     this.router.navigate(['/dashboard/inscripciones']);
//     this._snackBar.open(`Inscripcion creada exitosamente`, '', {
//       horizontalPosition: 'center',
//       verticalPosition: 'top',
//       duration: 1500,
//     })
//     this.form.reset();
//   }
//   volver(){
//     this.router.navigate(['/dashboard/inscripciones']);
//     console.log(this.form.value);
//   }
}
