import { Routes } from '@angular/router';
import { Inicio } from './sections/inicio/inicio';

export const routes: Routes = [
  { path: '', component: Inicio },

  {
    path: 'historia',
    loadComponent: () =>
      import('./sections/historia/historia').then(m => m.Historia),
  },

  { path: '**', redirectTo: '' },
];