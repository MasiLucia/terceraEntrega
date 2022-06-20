import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
// import { EstudiantesComponent } from '../../components/dashboard/feature-inscripciones/estudiantes/estudiantes.component';
import { ListaEstudiantesComponent } from 'src/app/components/dashboard/feature-estudiantes/estudiantes/listaEstudiantes.component';
import { EstudiantesLista } from '../interfaces/estudiantes';


@Pipe({
  name: 'apellidoPipe'
})
export class ApellidoPipe implements PipeTransform {

  transform(value: EstudiantesLista){
    return value.apellido;
  }



}

@NgModule({
  declarations: [ApellidoPipe],
  exports: [ApellidoPipe],
  imports: [CommonModule]
})
export class ApellidoPipeModule {}
