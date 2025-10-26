import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-projection-card-button',
  imports: [],
  template: `
    <button type="button" class="button-card" [disabled]="disabled()" (click)="onClick()">
      <div class="icon-slot">
        <ng-content select="[slot=icon]" />
      </div>
      <div class="button-content">
        <ng-content />
      </div>
    </button>
  `,
  styleUrl: './projection-card-button.scss',
})
export class CardButton {
  disabled = input<boolean>(false);
  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
