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
    :host {
      display: block;
      width: 100%;
    }

    .chip-list {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      gap: 0.65rem;
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
    }

    .chip-list li {
      display: inline-flex;
      align-items: center;
      min-height: 2.5rem;
      max-width: 100%;
      padding: 0.68rem 0.95rem;
      border-radius: 999px;
      border: 1px solid var(--color-border);
      background: var(--color-surface-soft);
      color: var(--color-text);
      box-sizing: border-box;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.35;
      white-space: normal;
      overflow-wrap: anywhere;
      word-break: break-word;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
      transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;
    }

    .chip-list li:hover {
      transform: translateY(-1px);
      border-color: var(--color-border-strong);
      background: color-mix(in srgb, var(--color-surface-soft) 82%, var(--color-accent) 18%);
    }

    @media (max-width: 640px) {
      .chip-list {
        gap: 0.55rem;
      }

      .chip-list li {
        min-height: 2.35rem;
        padding: 0.62rem 0.85rem;
        font-size: 0.86rem;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipListComponent {
  readonly items = input.required<string[]>();
  readonly ariaLabel = input<string>('Lista de tecnologías');
}
