import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleConsumer } from './use-cases/design-system/1-simple/simple-consumer';
import { IconConsumer } from './use-cases/design-system/2-with-material-icon/icon-consumer';
import { CustomIconConsumer } from './use-cases/design-system/3-with-custom-icon/custom-icon-consumer';
import { CardButton } from './use-cases/design-system/4-projection/projection-card-button';
import { ProjectionConsumer } from './use-cases/design-system/4-projection/projection-consumer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SimpleConsumer, IconConsumer, CustomIconConsumer, ProjectionConsumer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('content-projection');
}
