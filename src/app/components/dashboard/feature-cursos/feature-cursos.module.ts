import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { CrearCursoComponent } from './cursos/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './cursos/editar-curso/editar-curso.component';
import { MaterialModule } from '../../material/material.module';
import { DetalleCursosComponent } from './cursos/detalle-cursos/detalle-cursos.component';

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
export class FeatureCursosModule { }
