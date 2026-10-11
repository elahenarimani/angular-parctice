import { Component, inject, signal, OnInit, DestroyRef } from '@angular/core';
import { TaskCard } from './task-card/task-card';
import { TaskService } from './task.service';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [TaskCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private taskService = inject(TaskService);
  loading = signal(false);
  errorMessage = signal('');
  title = 'لیست تسک‌ها';
  showTasks = signal(true);
  readonly tasks = this.taskService.tasks;
  readonly completedCount = this.taskService.completedCount;
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    this.loading.set(true);

    this.taskService
      .getTasks()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (receivedTasks) => {
          this.taskService.setTasks(receivedTasks);
          this.loading.set(false);
        },
        error: (error) => {
          console.error(error);
          this.errorMessage.set('دریافت تسک‌ها انجام نشد.');
          this.loading.set(false);
        },
      });
  }
  addTask(): void {
    this.taskService.addTask();
  }

  toggleTask(taskId: number): void {
    this.taskService.toggleTask(taskId);
  }

  toggleList(): void {
    this.showTasks.update((value) => !value);
  }
}
