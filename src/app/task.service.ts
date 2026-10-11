import { Injectable, computed, signal } from '@angular/core';
import { Task } from './task.model';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private tasksState = signal<Task[]>([]);
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks.json');
  }
  setTasks(tasks: Task[]): void {
    this.tasksState.set(tasks);
    this.nextId = Math.max(0, ...tasks.map((task) => task.id)) + 1;
  }
  readonly tasks = this.tasksState.asReadonly();
  readonly completedCount = computed(
    () => this.tasksState().filter((task) => task.isCompleted).length,
  );

  private nextId = 5;

  addTask(): void {
    const newTask: Task = {
      id: this.nextId++,
      title: 'تسک جدید',
      isCompleted: false,
    };

    this.tasksState.update((tasks) => [...tasks, newTask]);
  }

  toggleTask(taskId: number): void {
    this.tasksState.update((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }
}
