import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Scale | Home' },
  {
    path: 'listafuncionarios',
    loadChildren: () =>
      import('./employees-list/employees-list.module').then(
        (m) => m.EmployeesListModule
      ),
    title: 'Scale | Lista Funcionários',
  },
  {
    path: 'listaescalas',
    loadChildren: () =>
      import('./scale-list/scale-list.module').then((m) => m.ScaleListModule),
    title: 'Scale | Lista Escalas',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];
