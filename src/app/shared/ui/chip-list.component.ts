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
      display: inline-flex;
      align-items: center;
      min-height: 2.65rem;
      max-width: 100%;
      padding: 0.72rem 0.95rem;
      border-radius: 999px;
      border: 1px solid var(--color-border);
      background: var(--color-surface-soft);
      color: var(--color-text);
      font-size: 0.92rem;
      font-weight: 500;
      line-height: 1.2;
      white-space: nowrap;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
      transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;
    }

    .chip-list li:hover {
      transform: translateY(-1px);
      border-color: var(--color-border-strong);
      background: color-mix(in srgb, var(--color-surface-soft) 82%, var(--color-accent) 18%);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipListComponent {
  readonly items = input.required<string[]>();
  readonly ariaLabel = input<string>('Lista de tecnologías');
}
