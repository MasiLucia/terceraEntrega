import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ListaEstudiantesService } from 'src/app/components/dashboard/feature-estudiantes/services/listaEstudiantes.service';
import { EstudiantesLista } from '../interfaces/estudiantes';
import { Inscripciones } from '../interfaces/inscripciones';

@Pipe({
  name: 'nombreEstudiante',
})
export class NombreEstudiantePipe implements PipeTransform {


  constructor(private estudiantesService: ListaEstudiantesService) {}
  auxPipe: any;
  lista : EstudiantesLista[];
  transform(idEstudiante: number) {

    var values  = JSON.parse(localStorage.getItem('estudiantes')|| 'false');
    return values[idEstudiante-1].apellido + ' ' + values[idEstudiante-1].nombre;
  }
}

@NgModule({
  declarations: [NombreEstudiantePipe],
  exports: [NombreEstudiantePipe],
  imports: [CommonModule]
})
export class NombreEstudiantePipeModule {}
