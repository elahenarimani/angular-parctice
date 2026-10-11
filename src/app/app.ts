import { Component, inject, signal } from '@angular/core';
import { TaskCard } from './task-card/task-card';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  imports: [TaskCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private taskService = inject(TaskService);

  title = 'لیست تسک‌ها';
  showTasks = signal(true);

  readonly tasks = this.taskService.tasks;
  readonly completedCount = this.taskService.completedCount;

  addTask(): void {
    this.taskService.addTask();
  }

  toggleTask(taskId: number): void {
    this.taskService.toggleTask(taskId);
  }

  toggleList(): void {
    this.showTasks.update(value => !value);
  }
}
