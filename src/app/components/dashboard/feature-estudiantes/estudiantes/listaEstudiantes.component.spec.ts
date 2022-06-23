// import { HttpClientModule } from '@angular/common/http';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { BrowserModule } from '@angular/platform-browser';
// import { ListaEstudiantesService } from '../services/listaEstudiantes.service';
// import { of } from 'rxjs';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// import { ListaEstudiantesComponent } from './listaEstudiantes.component';

// describe('ReportesComponent', () => {
//   let component: ListaEstudiantesComponent;
//   let fixture: ComponentFixture<ListaEstudiantesComponent>;
//   let estudiantesService: ListaEstudiantesService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ListaEstudiantesComponent],
//       imports: [BrowserModule, HttpClientModule],
//       providers: [ListaEstudiantesService],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ListaEstudiantesComponent);
//     component = fixture.componentInstance;
//     // spyOn(estudiantesService, "getEstudiantesList").and.returnValue(
//     //   of(
//     //     [
//     //       {
//     //         idEstudiante: 2,
//     //         nombre:'Oceane',
//     //         apellido: 'Feest',
//     //         edad: 9,
//     //         correo: 'Parker36@gmail.com',
//     //         telefono: '861-668-7533'
//     //       }
//     //     ]
//     //   )
//     // )
//     component.ngOnInit();
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it('should have studentsList property filled when initialized'),
//     () => {
//       expect(component.lista.length > 0).toBeTruthy();
//     };
// });
// it(
//   'deberia llamar al metodo delete estudiante al momento de presionar el boton'
// ),
//   () => {
//     const deleteSpy = spyOn(
//       estudiantesService,
//       'deleteEstudiante'
//     ).and.returnValue(
//       of({
//         idEstudiante: 2,
//         nombre: 'Oceane',
//         apellido: 'Feest',
//         edad: 9,
//         correo: 'Parker36@gmail.com',
//         telefono: '861-668-7533',
//       })
//     );

//     component.deleteEstudiante(1);
//     expect(deleteSpy).toHaveBeenCalled();
//   };
// it('deberia llamar al updateEstudiante en el servicio');
// }

