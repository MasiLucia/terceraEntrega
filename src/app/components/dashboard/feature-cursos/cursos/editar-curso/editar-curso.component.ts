import { Cursos } from 'src/app/shared/interfaces/cursos';
import { CursosService } from '../services/cursos.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrearCursoComponent } from '../crear-curso/crear-curso.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from 'src/app/components/material/material.module';
import { EstudiantesService } from 'src/app/services/estudiantes.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.scss']
})
export class EditarCursoComponent implements OnInit {
  public dataKey: any;
  cursos:any[]= ['react', 'angular', 'vue', 'react y angular', 'react y vue', 'angular y vue'];
  dias: any[] = ['lunes y miercoles', 'martes y jueves', 'sabado', 'miercoles y viernes'];
  cursoForm : FormGroup;
  value: any = null;

  constructor(private estudiantesService: EstudiantesService, public dialogRef: MatDialogRef<CrearCursoComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Cursos,  private fb : FormBuilder,
  private _cursosService: CursosService,
  private router: Router,
  private _snackBar: MatSnackBar)

  { const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state; }

  ngOnInit(): void {

    this.inicializar(this.data);

  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  editCurso(form:any){
    const formCursos: Cursos={
      idCurso: this.data.idCurso,
      cursoNombre: this.cursoForm .value.cursoNombre,
      cursoDias: this.cursoForm .value.cursoDias,
      precio: this.cursoForm .value.precio,
      profesor: this.cursoForm .value.profesor,
      detalle: this.cursoForm .value.detalle,
    }
  }

//     this._cursosService.editarCursos(formCursos);
//       this.router.navigate(['/dashboard/cursos']);
//       this._snackBar.open('Estudiante editado exitosamente','', {
//         horizontalPosition: 'center',
//         verticalPosition: 'top',
//         duration: 1500,
//       })
//       this.dialogRef.close();
//       this.form.reset();
//     }
// volver(){
//   this.dialogRef.close();
// }

inicializar(curso: Cursos) {

  this.cursoForm = this.fb.group({
    idCurso: [""],
    cursoNombre:  ["",  [Validators.required, Validators.maxLength(40), ]],
    cursoDias:  ["",  [Validators.required]],
    precio: ["",  [Validators.required]],
    profesor: ["",  [Validators.required]],
    detalle: ["",  [Validators.required]],

    })
  console.log(this.cursoForm );
  this.cursoForm .get('idCurso')?.patchValue(curso.idCurso);
  this.cursoForm .get('cursoNombre')?.patchValue(curso.cursoNombre);
  this.cursoForm .get('cursoDias')?.patchValue(curso.cursoDias);
  this.cursoForm .get('precio')?.patchValue(curso.precio);
  this.cursoForm .get('profesor')?.patchValue(curso.profesor);
  this.cursoForm .get('detalle')?.patchValue(curso.detalle);

}


updateCurso(cursoForm: FormGroup){
  var cursoToUpdate: Cursos={

      idCurso: cursoForm.value.idCurso,
      cursoNombre: cursoForm.value.cursoNombre,
      cursoDias: cursoForm.value.cursoDias,
      precio: cursoForm.value.precio,
      profesor: cursoForm.value.profesor,
      detalle: cursoForm.value.detalle,
      }



  this._cursosService.updateCursoSer(cursoToUpdate)
  this._cursosService.getCursosList();

    this.router.navigate(['/dashboard/cursos']);
    this._snackBar.open('Curso editado exitosamente','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
    this.dialogRef.close();

}

volver(){
    this.router.navigate(['/dashboard/cursos']);
    this.dialogRef.close();

}

}
