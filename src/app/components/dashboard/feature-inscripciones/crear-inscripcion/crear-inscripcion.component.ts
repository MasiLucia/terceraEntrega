import { InscripcionesService } from '../services/inscripciones.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationExtras } from '@angular/router';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { CursosService } from '../../feature-cursos/cursos/services/cursos.service';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { ListaEstudiantesService } from '../../feature-estudiantes/services/listaEstudiantes.service';
import { map, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-crear-inscripcion',
  templateUrl: './crear-inscripcion.component.html',
  styleUrls: ['./crear-inscripcion.component.scss'],
})
export class CrearInscripcionComponent implements OnInit {
  cursos: any = this._icursoService.getCursosList();
  estudiantes: any = this._estudiantesService
    .getEstudiantesList()
    .subscribe((res) => {
      return res;
    });

  alumnoSubscription!: Subscription;
  datosAlumnos$!: Observable<any>;

  auxEstudiante: any;
  auxCurso: any;

  datosSubscription!: Subscription;
  datosCursos$!: Observable<any>;

  form!: FormGroup;
  value: any = null;
  constructor(
    private fb: FormBuilder,
    private _inscripcionesService: InscripcionesService,
    private _icursoService: CursosService,
    private _estudiantesService: ListaEstudiantesService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state;

    this.form = this.fb.group({
      idInscripcion: [''], //this._inscripcionesService.maxId(this._inscripcionesService.getInscripcionesList())+1
      idEstudiante: [''],
      idCurso: [''],
    });
  }

  ngOnInit(): void {
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

    this._estudiantesService.getEstudiantesList().subscribe((res: any) => {
      this.auxEstudiante = res;
    });

    this._icursoService.getCursosList().subscribe((res: any) => {
      this.auxCurso = res;
    });
  }

  guardar() {
    const inscripcion: Inscripciones = {

      idInscripcion: this.form.value.idInscripcion,
      idEstudiante: this.form.value.idEstudiante,
      idCurso: this.form.value.idCurso,
    };
    console.log('id curso');
    console.log(this.form.value.idEstudiante);
    console.log('id nombre');
    console.log(this.form.value.idCurso);

    this._inscripcionesService.createInscripcion(inscripcion);
    this.router.navigate(['/dashboard/inscripciones']);
    this._snackBar.open('Inscripcion agregado exitosamente', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    });
    this.form.reset();
  }
  volver() {
    this.router.navigate(['/dashboard/inscripciones']);
    console.log(this.form.value);
  }
}
