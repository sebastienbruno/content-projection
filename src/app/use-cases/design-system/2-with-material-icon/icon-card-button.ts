import { Component, input, output } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-icon-card-button',
  imports: [],
  template: `
    <!-- Debug: inline={{inline()}} -->
    <button type="button" class="card-button" [class.card-button--inline]="inline()" [disabled]="disabled()" (click)="onClick()">
      @if (inline()) {
        @if (icon()) {
          <span class="card-button__icon material-symbols-outlined">{{icon()}}</span>
        }
        <span class="card-button__label">{{label()}}</span>
      } @else {
        @if (icon()) {
          <div class="card-button__icon-container">
            <span class="card-button__icon material-symbols-outlined">{{icon()}}</span>
          </div>
        }
        <span class="card-button__label">{{label()}}</span>
      }
    </button>
  `,
  styleUrl: './icon-card-button.scss',
})
export class IconCardButton {
  disabled = input<boolean, string | boolean>(false, { transform: (value: string | boolean) => coerceBooleanProperty(value) });
  label = input.required<string>();
  icon = input<string | undefined>(undefined);
  inline = input<boolean, string | boolean>(false, { transform: (value: string | boolean) => coerceBooleanProperty(value) });

  clicked = output<void>();

  onClick() {
    this.clicked.emit();
  }
}
