import { Component, computed, signal } from '@angular/core';
import { Task } from './task.model';
import { TaskCard } from './task-card/task-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [TaskCard],
})
export class App {
  title = 'لیست تسک‌ها';
  tasks = signal<Task[]>([
    { id: 1, title: 'یادگیری Signal', isCompleted: true },
    { id: 2, title: 'یادگیری نمایش لیست', isCompleted: false },
    { id: 3, title: 'تمرین انگولار', isCompleted: false },
    { id: 4, title: 'یادگیری Lifecycle', isCompleted: false },
  ]);
  private nextId = 5;
  completedCount = computed(() =>
    this.tasks().filter(task => task.isCompleted).length
  );
  addTask(): void {
    const newTask: Task = {
      id: this.nextId,
      title: `تسک شمارهٔ ${this.nextId}`,
      isCompleted: false,
    };
    this.tasks.update(previousTasks => [
      ...previousTasks,
      newTask,
    ]);
    this.nextId++;
  }
  toggleTask(taskId: number): void {
    this.tasks.update(previousTasks =>
      previousTasks.map(task =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  }
}