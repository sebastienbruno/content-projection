import { Component } from '@angular/core';
import { CardButton } from './projection-card-button';
import { Icon } from './icon';

@Component({
  selector: 'app-projection-consumer',
  styleUrl: './projection-consumer.scss',
  template: `
    <h3>Projection Card Button</h3>
    <app-projection-card-button>
      <div class="card-button">
        <div class="icon-container">
          <span class="icon material-symbols-outlined">refresh</span>
        </div>
        <span class="label">Please refresh</span>
      </div>
    </app-projection-card-button>
    <app-projection-card-button>
      <div class="card-button inline">
        <span class="icon material-symbols-outlined">refresh</span>
        <span class="label">Inline refresh</span>
      </div>
    </app-projection-card-button>
    <app-projection-card-button class="inline">
      <div class="card-button inline">
        <span class="label">Close endIcon</span>
        <span class="icon material-symbols-outlined">close</span>
      </div>
    </app-projection-card-button>
    <app-projection-card-button>
      <span class="card-button label">Click on me</span>
    </app-projection-card-button>
  `,
  imports: [CardButton],
})
export class ProjectionConsumer {}
