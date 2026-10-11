import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appCompleted]',
  standalone: true,
  host: {
    '[style.color]': 'appCompleted() ? "green" : null',
    '[style.text-decoration]':
      'appCompleted() ? "line-through" : null',
  },
})
export class CompletedDirective {
  appCompleted = input(false);
}
