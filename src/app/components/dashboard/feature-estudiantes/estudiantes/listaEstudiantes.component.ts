import { MaterialModule } from 'src/app/components/material/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Cursos } from 'src/app/shared/interfaces/cursos';
import { EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Router } from '@angular/router';
import { ListaEstudiantesService } from '../services/listaEstudiantes.service';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
import { DetalleComponent } from '../estudiantes/detalle/detalle.component';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import { InscripcionesService } from '../../feature-inscripciones/services/inscripciones.service';


@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './listaEstudiantes.component.html',
  styleUrls: ['./listaEstudiantes.component.scss']
})


export class ListaEstudiantesComponent implements OnInit {

  listaux: EstudiantesLista[];
  lista : EstudiantesLista[];

   admin:boolean = true;
   datosUsuario: string;

   listaCursos: Cursos[] = [];
  // listaEstudiantes: EstudiantesLista[] = [];

  displayedColumns: string[] = ['nombre', 'edad', 'correo', 'telefono', 'acciones'];



// dataSource!: Observable<EstudiantesLista[]>

  // dataSource = new MatTableDataSource<any>();

  //  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //  @ViewChild(MatSort) sort!: MatSort;

  //  @ViewChild(MatTable) table!: MatTable<any>;


  constructor  (
    public authService: AuthService,
    private _estudiantesListaService:ListaEstudiantesService,
    private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,
    private inscripcionesService: InscripcionesService
    ) {}


  ngOnInit(): void {
     this.getEstudiantes();
    // this.loadView();
    // this._estudiantesListaService.getEstudiantes().subscribe((data)=> (this.estudiantes = data))

  }

  getEstudiantes() {
    this._estudiantesListaService.getEstudiantesList().subscribe(
      (data)=> {
       this.lista= data;

       this.listaux=data
      localStorage.setItem('estudiantes', JSON.stringify(this.listaux));


       console.log("Estudiantes localstorage");
       console.log(this.lista);
      })
  }


/*
  validaRol(){
    this.datosUsuario = JSON.stringify(localStorage.getItem('rol'));
    console.log(this.datosUsuario);

    if(localStorage.getItem('rol') === 'admin')
    {
      console.log("ES ADMIN")
      this.admin=true;

    }
    else{
    this.admin=false;
    console.log("ES USER")
    }
  }
  loadView(){
    this.cargarEstudiantes();
    this.validaRol();
  }
  applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }
  cargarEstudiantes(){
    this.listaEstudiantes = this._estudiantesListaService.getEstudiantes();
    this.dataSource = new MatTableDataSource(this.listaEstudiantes);
   this.ngAfterViewInit()
  }
  getCursos(){
     return this.listaCursos.slice();
  }
  getEstudiantes(){
     return this.listaEstudiantes.slice();
  }*/


  // openDialog2(id_delform:number): void{
  //   const estudiante = this._estudiantesListaService.getSingleStudent(id_delform).(c => c.id === id_delform);
  //   const dialogRef = this.dialog.open(DetalleComponent, {
  //     data: estudiante,
  //     width: '600px',

  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //     this.cargarEstudiantes();
  //   });

  // }

  openDialog2(estudiante: EstudiantesLista) {
  const dialogRef = this.dialog.open(DetalleComponent, {
    width: '600px',
    height: '600px',
    panelClass: 'makeItMiddle',
    data: {
      idEstudiante: estudiante.idEstudiante,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      edad: estudiante.edad,
      correo:estudiante.correo,
      telefono: estudiante.telefono,
      // cursos: this.inscripcionesService.getInscripcionesList()
    },
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    this.router.navigate(['dashboard/estudiantes']);
  });
}

  openDialog(estudiante: EstudiantesLista) {
    const dialogRef = this.dialog.open(EditarEstudianteComponent, {
      width: '1000px',
      panelClass: 'makeItMiddle',
      data: {
        idEstudiante: estudiante.idEstudiante,
        nombre: estudiante.nombre,
        apellido: estudiante.apellido,
        edad: estudiante.edad,
        correo:estudiante.correo,
        telefono: estudiante.telefono,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this._estudiantesListaService.updateEstudianteSer(result).subscribe(() => {
        // this.store.dispatch(cargarAlumnos());
      });
    });
  }


  // eliminarEstudiante(index: number){
  //   console.log(index);
  //   this._estudiantesListaService.eliminarEstudiante(index);
  //   this.cargarEstudiantes();
  //   this._snackBar.open('Estudiante eliminado con exito','', {
  //     horizontalPosition: 'center',
  //     verticalPosition: 'top',
  //     duration: 1500,
  //   })
  // }


getEstudianteDetails(idEstudiante:number){
  this._estudiantesListaService.getSingleStudent(idEstudiante).subscribe(
    (data)=>{
      console.log(data)
    }
  )
}

deleteEstudiante(idEstudiante:number){
  this._estudiantesListaService.deleteEstudiante(idEstudiante).subscribe(
    (data)=> {
      this.getEstudiantes();
    }
  )
}



}
