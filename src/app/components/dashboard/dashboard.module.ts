
import { EditarCursoComponent } from './feature-cursos/cursos/editar-curso/editar-curso.component';
import { CursosComponent } from './feature-cursos/cursos/cursos.component';
import { InscripcionesComponent } from './feature-inscripciones/inscripciones/inscripciones.component';
import { DetalleInscripcionesComponent } from './feature-inscripciones/detalle-inscripciones/detalle-inscripciones.component';
import { EditarEstudianteComponent } from './feature-estudiantes/estudiantes/editar-estudiante/editar-estudiante.component';
import { ListaEstudiantesComponent } from 'src/app/components/dashboard/feature-estudiantes/estudiantes/listaEstudiantes.component';
import { DetalleComponent } from './feature-estudiantes/estudiantes/detalle/detalle.component';
import { EditarInscripcionComponent } from './feature-inscripciones/editar-inscripcion/editar-inscripcion.component';
import { CrearCursoComponent } from './feature-cursos/cursos/crear-curso/crear-curso.component';
import { CrearInscripcionComponent } from './feature-inscripciones/crear-inscripcion/crear-inscripcion.component';
import { FeatureEstudiantesModule } from './feature-estudiantes/feature-estudiantes.module';
import { FeatureCursosModule } from './feature-cursos/feature-cursos.module';
import { TwentyDirective } from 'src/app/shared/directivas/twenty.directive';
import { NavbarComponent } from '../../core/navbar/navbar.component';
import { InicioComponent } from '../../core/inicio/inicio.component';
import { MaterialModule } from '../material/material.module';
import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { FeatureInscripcionesModule } from './feature-inscripciones/feature-inscripciones.module';
import { CrearListaEstudiantesComponent } from './feature-estudiantes/estudiantes/crear-lista-estudiantes/crear-lista-estudiantes.component';
import { DetalleCursosComponent } from './feature-cursos/cursos/detalle-cursos/detalle-cursos.component';
import { ApellidoPipeModule } from 'src/app/shared/pipes/apellido.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    TwentyDirective,
    FooterComponent,
    CrearListaEstudiantesComponent,
    CrearCursoComponent,
    DetalleComponent,
    ListaEstudiantesComponent,
    EditarInscripcionComponent,
    DetalleInscripcionesComponent,
    CursosComponent,
    EditarCursoComponent,
    DetalleCursosComponent,
    InscripcionesComponent,
    CrearInscripcionComponent,
    EditarEstudianteComponent,

    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    MatDialogModule,
    FeatureInscripcionesModule,
    FeatureCursosModule,
    FeatureEstudiantesModule,
    ApellidoPipeModule,
    HttpClientModule
    ], exports: [
    MaterialModule,
    FeatureInscripcionesModule,
    FeatureCursosModule,
    FeatureEstudiantesModule,
    ApellidoPipeModule,
    HttpClientModule


  ]


})
export class DashboardModule { }
