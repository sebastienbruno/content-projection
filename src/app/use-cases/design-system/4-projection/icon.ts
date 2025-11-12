import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <div>
      <span class="card-button__icon material-symbols-outlined"><ng-content /></span>
    </div>
  `,
  host: {
    slot: 'icon',
  },
})
export class Icon {}
