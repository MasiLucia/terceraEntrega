import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from '../../shared/interfaces/menu';
import { CursosService } from './feature-cursos/cursos/services/cursos.service';
import { ListaEstudiantesService } from './feature-estudiantes/services/listaEstudiantes.service';
import { InscripcionesService } from './feature-inscripciones/services/inscripciones.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    menu: Menu[]=[];
    opened = false;
    admin: boolean = false;
    constructor(private menuService: MenuService, private _inscripcionesService: InscripcionesService,
      private _cursosService:CursosService,
      private _estudiantesListaService:ListaEstudiantesService ) { }

    ngOnInit(): void {
      this.loadView();
    }

    loadView(){
      this.cargarMenu();
      this._cursosService.getCursosList().subscribe((data)=> {
         localStorage.setItem('cursos', JSON.stringify(data));
         console.log("data de cursos");
         console.log(data);
        })
      this._inscripcionesService.getInscripcionesList().subscribe((data) => {
        localStorage.setItem('inscripciones', JSON.stringify(data));
        console.log("inscripciones");
         console.log(data);
      });

      this._estudiantesListaService.getEstudiantesList().subscribe(
        (data)=> {
        localStorage.setItem('estudiantes', JSON.stringify(data));
         console.log("Estudiantes");
         console.log(data);
        })
    }

    cargarMenu(): void {
      this.menuService.getMenu().subscribe(data => {
        this.menu = data;
      });
    }
    ingresarAdmin(){
      this.admin = true;
    }
    ingresarUsuario(){
      this.admin = false;
    }

  }

