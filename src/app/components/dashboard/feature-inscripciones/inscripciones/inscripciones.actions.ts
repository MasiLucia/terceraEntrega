import { createAction, props } from '@ngrx/store';
import { Inscripciones } from 'src/app/shared/interfaces/inscripciones';

export const cargarInscripciones = createAction(
  '[Lista Inscripciones] Cargar Inscripciones'
);
