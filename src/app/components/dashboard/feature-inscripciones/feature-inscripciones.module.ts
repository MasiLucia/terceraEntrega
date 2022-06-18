import { EditarInscripcionComponent } from './editar-inscripcion/editar-inscripcion.component';
import { CrearInscripcionComponent } from './crear-inscripcion/crear-inscripcion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { DetalleInscripcionesComponent } from './detalle-inscripciones/detalle-inscripciones.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { RouterModule } from '@angular/router';
import { EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';


@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    RouterModule
  ]
})
export class FeatureInscripcionesModule { }
