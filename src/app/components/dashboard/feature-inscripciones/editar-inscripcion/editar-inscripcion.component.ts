import { Inscripciones } from '../../../../shared/interfaces/inscripciones';
import { InscripcionesService } from '../services/inscripciones.service';

import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrearInscripcionComponent} from '../crear-inscripcion/crear-inscripcion.component';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-editar-inscripcion',
  templateUrl: './editar-inscripcion.component.html',
  styleUrls: ['./editar-inscripcion.component.scss']
})


export class EditarInscripcionComponent implements OnInit {


  cursos:any[]= ['react', 'angular', 'vue', 'react y angular', 'react y vue', 'angular y vue'];
  dias: any[] = ['lunes y miercoles', 'martes y jueves', 'sabado', 'miercoles y viernes'];
  form: FormGroup;
  value: any = null;

  constructor (public dialogRef: MatDialogRef<CrearInscripcionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inscripciones,  private fb : FormBuilder,
    private _inscripcionesService: InscripcionesService,
    private router: Router,
    private _snackBar: MatSnackBar
  ){
      const navigation = this.router.getCurrentNavigation();
      this.value = navigation?.extras?.state;

   }

  ngOnInit(): void {
   this.inicializar(this.data);

  }


  onNoClick(): void {
    this.dialogRef.close();
  }


inicializar(inscripcion:Inscripciones) {

  this.form = this.fb.group({
    estudiante:  ["",  [Validators.required, Validators.maxLength(40), ]],
    curso:  ["",  [Validators.required]],
    dias: ["",  [Validators.required]],

    })
  console.log(this.form);
  this.form.get('idInscripcion)')?.patchValue(inscripcion.idInscripcion);
  this.form.get('idEstudiante')?.patchValue(inscripcion.idEstudiante);
  this.form.get('idCurso')?.patchValue(inscripcion.idCurso);

}


updateEstudiante(inscripcionForm: FormGroup){
  var inscripcionToUpdate: Inscripciones={

      idInscripcion: inscripcionForm.value.idInscripcion,
      idEstudiante: inscripcionForm.value.idEstudiante,
      idCurso: inscripcionForm.value.idCurso,
      }


  this._inscripcionesService.updateInscripcionSer(inscripcionToUpdate)
  this._inscripcionesService.getInscripcionesList();

    this.router.navigate(['/dashboard/estudiantes']);
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
