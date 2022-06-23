import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCursoComponent } from './editar-curso.component';

xdescribe('EditarCursoComponent', () => {
  let component: EditarCursoComponent;
  let fixture: ComponentFixture<EditarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
