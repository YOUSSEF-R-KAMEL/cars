import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home',  loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent)},
  {path: 'all-cars',  loadComponent: () => import('./feature/all-cars/all-cars.component').then(m => m.AllCarsComponent)},
];
