import { Routes } from '@angular/router';
import { TasksPage } from './tasks-page';
import { AboutPage } from './about-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: TasksPage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
  {
    path: '**',
    redirectTo: 'tasks',
  },
];
