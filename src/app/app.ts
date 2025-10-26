import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleConsumer } from './use-cases/design-system/1-simple/simple-consumer';
import { IconConsumer } from './use-cases/design-system/2-with-material-icon/icon-consumer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SimpleConsumer, IconConsumer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('content-projection');
}
