import { Inscripciones } from '../../../../shared/interfaces/inscripciones';
import { InscripcionesService } from '../services/inscripciones.service';

import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrearInscripcionComponent} from '../crear-inscripcion/crear-inscripcion.component';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { CursosService } from '../../feature-cursos/cursos/services/cursos.service';
import { ListaEstudiantesService } from '../../feature-estudiantes/services/listaEstudiantes.service';


@Component({
  selector: 'app-editar-inscripcion',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.scss']
})


export class EditarInscripcionComponent implements OnInit {

  cursos: any = this._icursoService.getCursosList();
  estudiantes: any =this._estudiantesService.getEstudiantesList().subscribe(res => {
  return res;  });


 alumnoSubscription!: Subscription;
 datosAlumnos$!: Observable<any>;

 datosSubscription!: Subscription;
 datosCursos$!: Observable<any>;


 form!: FormGroup;
 value: any = null;

  // cursos:any[]= ['react', 'angular', 'vue', 'react y angular', 'react y vue', 'angular y vue'];
  // dias: any[] = ['lunes y miercoles', 'martes y jueves', 'sabado', 'miercoles y viernes'];
  nombre: any[];

  constructor (public dialogRef: MatDialogRef<CrearInscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inscripciones,  private fb : FormBuilder,
    private _inscripcionesService: InscripcionesService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _icursoService: CursosService,
    private _estudiantesService: ListaEstudiantesService
  ){
      const navigation = this.router.getCurrentNavigation();
      this.value = navigation?.extras?.state;

   }

  ngOnInit(): void {
   this.inicializar(this.data);
   this.datosAlumnos$ = this._estudiantesService.getEstudiantesList();
   this.alumnoSubscription = this._estudiantesService.alumnoSubject.subscribe(
     () => {
       this.datosAlumnos$ = this._estudiantesService.getEstudiantesList();
     }
   );
   this.datosCursos$ = this._icursoService.getCursosList();
   this.alumnoSubscription = this._icursoService.cursoSubject.subscribe(() => {
     this.datosCursos$ = this._icursoService.getCursosList();
   });

  }


  onNoClick(): void {
    this.dialogRef.close();
  }


inicializar(inscripcion:Inscripciones) {

  this.form = this.fb.group({
    nombre:  ["",  [Validators.required, Validators.maxLength(40), ]],
    curso:  ["",  [Validators.required]],

    })
  console.log(this.form);
  // this.form.get('id')?.setValue(inscripcion.nombre);
  // this.form.get('curso')?.setValue(inscripcion.curso);

}


updateEstudiante(inscripcionForm: FormGroup){
  console.log("estoy en inscripcionform")
  console.log(inscripcionForm)
  var inscripcionToUpdate: Inscripciones={
    idInscripcion: inscripcionForm.value.idInscripcion,
    idEstudiante: inscripcionForm.value.idEstudiante,
    idCurso: inscripcionForm.value.idCurso
      }

  this._inscripcionesService.updateInscripcionSer(inscripcionToUpdate)
  this._inscripcionesService.getInscripcionesList();

    this.router.navigate(['/dashboard/inscripciones']);
    this._snackBar.open('Estudiante editado exitosamente','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
    this.dialogRef.close();

}

volver(){
    this.router.navigate(['/dashboard/estudiantes']);
    this.dialogRef.close();
    console.log(this.form.value);

}
}
