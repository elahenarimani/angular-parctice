import { Component, signal } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-zorro-demo-page',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './zorro-demo-page.html',
  styleUrl: './zorro-demo-page.scss',
})
export class ZorroDemoPage {
  readonly loading = signal(false);

  start(): void {
    this.loading.set(true);
  }

  stop(): void {
    this.loading.set(false);
  }
}
