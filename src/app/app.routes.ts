import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page.component').then((module) => module.HomePageComponent),
    title: 'Carlos Lafarga | Software Engineer',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
