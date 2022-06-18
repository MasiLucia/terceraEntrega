import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { CrearListaEstudiantesComponent } from '../crear-lista-estudiantes/crear-lista-estudiantes.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../../../feature-cursos/cursos/services/cursos.service';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { InscripcionesService } from '../../../feature-inscripciones/services/inscripciones.service';


@Component({
  selector: 'app-delle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  detalle: EstudiantesLista;
  value: any = null;
  form: FormGroup;
  cursitos:Cursos[]=[];
  constructor(
    public dialogRef: MatDialogRef<CrearListaEstudiantesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EstudiantesLista,
    private router: Router,
    private fb : FormBuilder, private cursosService: CursosService,
    private inscripcionesService: InscripcionesService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;
    }

  ngOnInit(): void {
    this.cursitos=[];
    this.inicializar(this.data);
    console.log("cursos");
    console.log(this.cursitos);
  }

  inicializar(estudiante:EstudiantesLista) {
    this.cursitos=this.inscripcionesService.misCursos(estudiante.id)
    this.form = this.fb.group({
      estudiante:  estudiante.nombre + " " + estudiante.apellido,
      edad:  estudiante.edad,
      correo: estudiante.correo,
      telefono:  estudiante.telefono,
      cursos: this.cursitos,
    })
  }

  cerrar(){
    this.dialogRef.close();
}

  onNoClick(): void {
    this.dialogRef.close();

  }

}
