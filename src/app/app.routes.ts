import { Routes } from '@angular/router';
import { Inicio } from './sections/inicio/inicio';

export const routes: Routes = [
  { path: '', component: Inicio },

  {
    path: 'historia',
    loadComponent: () =>
      import('./sections/historia/historia').then(m => m.Historia),
  },

  // placeholder de las otras secciones (todavía no existen)
  {
    path: 'legal',
    loadComponent: () =>
      import('./sections/situacion-legal/situacion-legal').then(m => m.SituacionLegal),
  },
  {
    path: 'responsable',
    loadComponent: () =>
      import('./sections/responsable/responsable').then(m => m.Responsable),
  },
  {
    path: 'salud',
    loadComponent: () =>
      import('./sections/salud/salud').then(m => m.Salud),
  },
  {
    path: 'cordoba',
    loadComponent: () =>
      import('./sections/cordoba/cordoba').then(m => m.Cordoba),
  },
  {
    path: 'convocatoria',
    loadComponent: () =>
      import('./sections/convocatoria/convocatoria').then(m => m.Convocatoria),
  },

  { path: '**', redirectTo: '' },
];