import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
/** Root component that hosts the active routed page. */
export class App {
  /** Application name displayed by the root template. */
  protected readonly title = signal('Code-Cuisine');
}
