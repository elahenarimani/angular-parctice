import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail-page',
  standalone: true,
  template: `
    <section dir="rtl">
      <h1>جزئیات تسک</h1>
      <p>شناسهٔ تسک: {{ taskId }}</p>
    </section>
  `,
})
export class TaskDetailPage {
  private readonly route = inject(ActivatedRoute);

  readonly taskId = this.route.snapshot.paramMap.get('id');
}