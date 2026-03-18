import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button
      class="theme-toggle"
      type="button"
      (click)="toggleTheme()"
      [attr.aria-label]="themeService.theme() === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
    >
      <span>{{ themeService.theme() === 'dark' ? '☀️' : '🌙' }}</span>
      <span>{{ themeService.theme() === 'dark' ? 'Light' : 'Dark' }}</span>
    </button>
  `,
  styles: `
    .theme-toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      padding: 0.72rem 1rem;
      border-radius: 999px;
      border: 1px solid var(--color-border);
      background: var(--color-surface-soft);
      color: var(--color-text);
      cursor: pointer;
      transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
    }

    .theme-toggle:hover {
      transform: translateY(-1px);
      border-color: var(--color-border-strong);
      background: var(--color-surface-elevated);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
  readonly themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
