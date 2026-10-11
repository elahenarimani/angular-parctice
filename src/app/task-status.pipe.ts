import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskStatus',
  standalone: true,
})
export class TaskStatusPipe implements PipeTransform {
  transform(isCompleted: boolean): string {
    return isCompleted ? 'انجام شده ✅' : 'در حال انجام ⏳';
  }
}