import { Routes } from '@angular/router';
import { TasksPage } from './tasks-page/tasks-page';
import { TaskDetailPage } from './task-detail-page/task-detail-page';

export const taskRoutes: Routes = [
  { path: '', component: TasksPage },
  { path: ':id', component: TaskDetailPage },
];