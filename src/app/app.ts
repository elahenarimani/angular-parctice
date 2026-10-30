import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ZorroDemoPage } from './features/zorro-demo/zorro-demo-page/zorro-demo-page';
@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, MatButtonModule, NzButtonModule,ZorroDemoPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly document = inject(DOCUMENT);

  isDark = signal(false);

  toggleTheme(): void {
    this.isDark.update((value) => !value);

    this.document.documentElement.classList.toggle('dark-theme', this.isDark());
  }
}
