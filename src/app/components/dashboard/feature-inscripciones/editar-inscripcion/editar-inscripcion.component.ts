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
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';


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
 cur:Cursos[]=JSON.parse(localStorage.getItem('cursos') || 'false')
 est:EstudiantesLista[]=JSON.parse(localStorage.getItem('estudiantes') || 'false')

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
    id: [inscripcion.idInscripcion],
    nombre:[inscripcion.idEstudiante],
    curso:[inscripcion.idCurso,  [Validators.required]],

    })

    this.form.controls['nombre']?.disable();

    this.form.get('nombre')?.patchValue(this.est[inscripcion.idEstudiante-1].nombre);
    this.form.get('curso')?.patchValue(this.cur[inscripcion.idCurso-1].cursoNombre);
  console.log(this.form);
  // this.form.get('id')?.setValue(inscripcion.nombre);
  // this.form.get('curso')?.setValue(inscripcion.curso);

}


updateEstudiante(inscripcionForm: FormGroup){
  console.log("estoy en inscripcionform")
  console.log(inscripcionForm)
  var inscripcionToUpdate: Inscripciones={
    idInscripcion: inscripcionForm.value.id,
    idEstudiante: inscripcionForm.value.nombre,
    idCurso: inscripcionForm.value.curso
      }

      console.log("gato a actualizar");
      console.log(inscripcionForm)
  this._inscripcionesService.updateInscripcionSer(inscripcionToUpdate)
  this._inscripcionesService.getInscripcionesList();

    this.router.navigate(['/dashboard/inscripciones']);
    this._snackBar.open('Inscripcion editada exitosamente','', {
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
