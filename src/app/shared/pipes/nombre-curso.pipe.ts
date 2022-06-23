import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CursosService } from 'src/app/components/dashboard/feature-cursos/cursos/services/cursos.service';
import { Cursos } from '../interfaces/cursos';

@Pipe({
  name: 'nombreCurso',
})
export class NombreCursoPipe implements PipeTransform {

  auxCurso: Cursos;
  constructor(private cursoService: CursosService) {}

  transform(id: number) {


    var values  = JSON.parse(localStorage.getItem('cursos')|| 'false');
    return values[id].cursoNombre;

    /*console.log('pipe');
    console.log(id);
    return this.cursoService.getSingleCurso(id).pipe(
      map((response) => {
        return response.nombreCurso;
      })
    );*/
  }
}

@NgModule({
  declarations: [NombreCursoPipe],
  exports: [NombreCursoPipe],
  imports: [CommonModule],
})
export class NombreCursoPipeModule {}
