import { Component, inject, signal, OnInit, DestroyRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskCard } from './task-card/task-card';
import { TaskService } from './task.service';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [TaskCard, ReactiveFormsModule],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.scss',
})
export class TasksPage implements OnInit {
  private taskService = inject(TaskService);
  loading = signal(false);
  errorMessage = signal('');
  title = 'لیست تسک‌ها';
  showTasks = signal(true);
  taskForm = new FormGroup({
  title: new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
    ],
  }),
});
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
  const titleControl = this.taskForm.controls.title;

  // فاصله‌های ابتدا و انتها را حذف و اعتبارسنجی را تازه می‌کنیم.
  titleControl.setValue(titleControl.value.trim());

  if (this.taskForm.invalid) {
    this.taskForm.markAllAsTouched();
    return;
  }

  this.taskService.addTask(titleControl.value);
  this.taskForm.reset();
}

  toggleTask(taskId: number): void {
    this.taskService.toggleTask(taskId);
  }

  toggleList(): void {
    this.showTasks.update((value) => !value);
  }
}
