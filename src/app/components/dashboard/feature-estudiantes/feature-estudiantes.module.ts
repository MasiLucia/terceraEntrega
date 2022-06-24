import { ListaEstudiantesComponent } from 'src/app/components/dashboard/feature-estudiantes/estudiantes/listaEstudiantes.component';
import { DetalleComponent } from './estudiantes/detalle/detalle.component';
import { CrearListaEstudiantesComponent } from './estudiantes/crear-lista-estudiantes/crear-lista-estudiantes.component';
import { EditarEstudianteComponent } from './estudiantes/editar-estudiante/editar-estudiante.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
// import { ListaEstudiantes } from './services/lista-estudiantes.service.spec.ts/lista-estudiantes.service.spec.ts.component';

@NgModule({
  declarations: [


    // ListaEstudiantes.Service.Spec.TsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    RouterModule,

   ]
})
export class FeatureEstudiantesModule { }
