import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-simple-card-button',
  imports: [],
  template: `
    <button type="button" class="card-button" [disabled]="disabled()" (click)="onClick()">
      <span class="card-button__label">{{label()}}</span>
    </button>
  `,
  styleUrl: './simple-card-button.scss',
})
export class SimpleCardButton {
  disabled = input<boolean>(false);
  label = input.required<string>();
  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
