import { InscripcionesService } from '../services/inscripciones.service';
import { DetalleInscripcionesComponent } from '../detalle-inscripciones/detalle-inscripciones.component';
import { NavigationExtras, Router } from '@angular/router';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditarEstudianteComponent } from '../../feature-estudiantes/estudiantes/editar-estudiante/editar-estudiante.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeatureEstudiantesModule } from '../../feature-estudiantes/feature-estudiantes.module';


@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {


  datosUsuario: string;

  listaInscripciones: Inscripciones[];

  admin: boolean = false;


  displayedColumns: string[] = ['idInscripcion', 'idEstudiante', 'idCurso', 'acciones'];

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(

     private _inscripcionesService:InscripcionesService,
     private _snackBar: MatSnackBar,
     private router: Router,
     public dialog: MatDialog
     )  { }

  ngOnInit(): void {
    this.getInscripciones();
    // this.loadView();
  }

  getInscripciones() {
    this._inscripcionesService.getInscripcionesList().subscribe(
      (data)=> {
       this.listaInscripciones= data;

       console.log("data");
       console.log(this.listaInscripciones);
      })
  }


  openDialog2(inscripcion: Inscripciones) {
  const dialogRef = this.dialog.open(DetalleInscripcionesComponent, {
    width: '600px',
    height: '600px',
    panelClass: 'makeItMiddle',
    data: {
      idInscripcion: inscripcion.idEstudiante,
      idEstudiante: inscripcion.idEstudiante,
      idCurso:inscripcion.idCurso,

    },
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    this.router.navigate(['dashboard/estudiantes']);
  });
}

  openDialog(inscripcion: Inscripciones) {
    const dialogRef = this.dialog.open(EditarEstudianteComponent, {
      width: '1000px',
      panelClass: 'makeItMiddle',
      data: {
        idInscripcion: inscripcion.idEstudiante,
        idEstudiante: inscripcion.idEstudiante,
        idCurso:inscripcion.idCurso,
      },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this._inscripcionesService.updateInscripcionSer(result).subscribe(() => {
        // this.store.dispatch(cargarAlumnos());
      });
    });
  }

getInscripcionDetails(idInscripcion:number){
  this._inscripcionesService.getSingleInscripcion(idInscripcion).subscribe(
    (data)=>{
      console.log(data)
    }
  )
}

deleteInscripcion(idInscripcion:number){
  this._inscripcionesService.deleteInscripcion(idInscripcion).subscribe(
    (data)=> {
      this.getInscripciones();
    }
  )
}
}
