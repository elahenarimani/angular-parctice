import { Injectable, computed, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksState = signal<Task[]>([
    { id: 1, title: 'یادگیری Signal', isCompleted: true },
    { id: 2, title: 'یادگیری نمایش لیست', isCompleted: false },
    { id: 3, title: 'تمرین انگولار', isCompleted: false },
    { id: 4, title: 'یادگیری Lifecycle', isCompleted: false },
  ]);

  readonly tasks = this.tasksState.asReadonly();

  readonly completedCount = computed(() =>
    this.tasksState().filter(task => task.isCompleted).length
  );

  private nextId = 5;

  addTask(): void {
    const newTask: Task = {
      id: this.nextId++,
      title: 'تسک جدید',
      isCompleted: false,
    };

    this.tasksState.update(tasks => [...tasks, newTask]);
  }

  toggleTask(taskId: number): void {
    this.tasksState.update(tasks =>
      tasks.map(task =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  }
}
