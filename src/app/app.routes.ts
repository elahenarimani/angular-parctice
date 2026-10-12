import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { profileRoutes } from './features/profile/profile.routes';
import { taskRoutes } from './features/tasks/tasks.routes';
import { aboutRoutes } from './features/about/about.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },

  { path: 'auth', children: authRoutes },
  { path: 'profile', children: profileRoutes },
  { path: 'tasks', children: taskRoutes },
  {path:  'abouts' , children: aboutRoutes},
  { path: '**', redirectTo: 'tasks' },
];