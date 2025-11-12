import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-projection-card-button',
  imports: [],
  styleUrl: './projection-card-button.scss',
  template: `
    <button
      type="button"
      class="card-button button-card--primary"
      [disabled]="disabled()"
      (click)="onClick()"
    >
      <div class="button-content">
        <ng-content />
      </div>
    </button>
  `,
})
export class CardButton {
  disabled = input<boolean>(false);
  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
