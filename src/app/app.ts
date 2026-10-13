import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
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
