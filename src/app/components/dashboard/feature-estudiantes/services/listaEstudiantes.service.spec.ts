import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListaEstudiantesService } from './listaEstudiantes.service';
import { EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';



describe('ListaEstudiantesService', () => {
  let service: ListaEstudiantesService;
  let mockList = [
    {
      idEstudiante: 6,
      nombre: 'Toni',
      apellido: 'Kuvalis',
      edad:11,
      correo: 'Jarvis.Fadel@gmail.com',
      telefono: '682-939-0148'
    }
  ]
  let httpController: HttpTestingController;
  let url= 'https://62af7944b0a980a2ef40b08d.mockapi.io/campus/v1/estudiantes/'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ListaEstudiantesService);
    httpController= TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it( 'deberia obtener la lista', ()=> {
    service.getEstudiantesList().subscribe(
      (res)=> {
        expect(res).toEqual(mockList)
      }
    )
    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`
    })
    req.flush(mockList)
  })


it('deberia ejecutar el delete estudiante',
 () =>
{ service.deleteEstudiante(1).subscribe(
  (res)=> {
    expect(res).toEqual(mockList[0])
  }
)
const req = httpController.expectOne( {
  method: 'DELETE',
  url: `${url}1`
})
req.flush(mockList[0]);
});




// it('deberia ejecutar crear un estudiante',
//  () =>
// { service.createEstudiante(datosAgregarCurso[0]).subscribe(
//   (res)=> {
//     expect(res).toEqual(mockList[0])
//   }
// )
// const req = httpController.expectOne( {
//   method: 'POST',
//   url: `${url}1`
// })
// req.flush(mockList[0]);
// });
// })



// it('Agregar un estudiante', inject(
//   [HttpTestingController, ListaEstudiantesService],
//   (httpMock: HttpTestingController, service: ListaEstudiantesService) => {
//     const mock: EstudiantesLista[] = [
//       {
//         idEstudiante: 6,
//       nombre: 'Toni',
//       apellido: 'Kuvalis',
//       edad:11,
//       correo: 'Jarvis.Fadel@gmail.com',
//       telefono: '682-939-0148'
//       },
//     ];
//     const datosAgregarEst: EstudiantesLista[]  = [
//       {
//         idEstudiante: 9,
//       nombre: 'Toni',
//       apellido: 'Kuvalis',
//       edad:11,
//       correo: 'Jarvis.Fadel@gmail.com',
//       telefono: '682-939-0148'
//       },
//     ];

//     service.createEstudiante(datosAgregarEst[0]).subscribe((data) => {
//       expect(data).toEqual(mock);
//     });

//     const req = httpMock.expectOne({
//       method: 'POST',
//       url: `https://62af7944b0a980a2ef40b08d.mockapi.io/campus/v1/estudiantes/`,
//     });
//     req.flush(mock);

//     expect(service).toBeTruthy;
//   }
// ));

})


