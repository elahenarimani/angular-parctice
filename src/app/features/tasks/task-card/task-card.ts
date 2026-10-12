import {
  Component,
  input,
  output,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../task.model';
import { CompletedDirective } from '../completed.directive';
import { TaskStatusPipe } from '../task-status.pipe';
@Component({
  selector: 'app-task-card',
 imports: [RouterLink, CompletedDirective, TaskStatusPipe],
  standalone: true,
  templateUrl: './task-card.html',
})
export class TaskCard implements OnInit, OnChanges, OnDestroy {
  task = input.required<Task>();

  toggleRequested = output<number>();

  constructor() {
    console.log('constructor: نمونهٔ کارت ساخته شد');
  }

  ngOnChanges(changes: SimpleChanges): void {
    const taskChange = changes['task'];

    if (taskChange) {
      console.log('ngOnChanges: ورودی تغییر کرد', {
        previous: taskChange.previousValue,
        current: taskChange.currentValue,
        firstChange: taskChange.firstChange,
      });
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit: ورودی اولیه آماده است', this.task().id);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: کارت حذف شد', this.task().id);
  }

  requestToggle(): void {
    this.toggleRequested.emit(this.task().id);
  }
}
