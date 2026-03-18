import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  standalone: true,
  template: `
    <ul class="chip-list" [attr.aria-label]="ariaLabel()">
      @for (item of items(); track item) {
        <li>{{ item }}</li>
      }
    </ul>
  `,
  styles: `
    .chip-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .chip-list li {
      padding: 0.72rem 0.95rem;
      border-radius: 999px;
      border: 1px solid var(--color-border);
      background: var(--color-surface-soft);
      color: var(--color-text);
      font-size: 0.92rem;
      line-height: 1;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipListComponent {
  readonly items = input.required<string[]>();
  readonly ariaLabel = input<string>('Lista de tecnologías');
}
