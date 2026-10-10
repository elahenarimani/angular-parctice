import { Component, input, output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card.html',
})

export class TaskCard {
    constructor() {
  console.log('نمونهٔ کارت ساخته شد');
}
  task = input.required<Task>();

  toggleRequested = output<number>();

  requestToggle(): void {
    this.toggleRequested.emit(this.task().id);
  }
}