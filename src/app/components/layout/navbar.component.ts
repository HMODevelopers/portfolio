import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavItem } from '../../core/models/portfolio.models';
import { ThemeToggleComponent } from './theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggleComponent],
  template: `
    <header class="navbar-shell">
      <nav class="navbar" aria-label="Navegación principal">
        <a class="navbar__brand" href="#inicio" aria-label="Ir al inicio">
          <span class="navbar__brand-mark">CL</span>
          <span>
            <strong>Carlos O. Preciado Lafarga</strong>
            <small>Ingeniero en Sistemas</small>
          </span>
        </a>

        <div class="navbar__menu">
          @for (item of items(); track item.id) {
            <a
              [href]="'#' + item.id"
              [class.is-active]="activeId() === item.id"
              [attr.aria-current]="activeId() === item.id ? 'page' : null"
            >
              {{ item.label }}
            </a>
          }
        </div>

        <div class="navbar__actions">
          <a class="navbar__cta" href="#contacto">Hablemos</a>
          <app-theme-toggle />
        </div>
      </nav>
    </header>
  `,
  styles: `
    .navbar-shell {
      position: sticky;
      top: 0;
      z-index: 20;
      padding: 1rem clamp(1rem, 3vw, 2rem) 0;
      backdrop-filter: blur(16px);
    }

    .navbar {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 1rem;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 1.25rem;
      border-radius: 1.25rem;
      border: 1px solid var(--color-border);
      background: color-mix(in srgb, var(--color-surface) 72%, transparent);
      box-shadow: var(--shadow-soft);
    }

    .navbar__brand {
      display: inline-flex;
      align-items: center;
      gap: 0.85rem;
      color: var(--color-text);
      text-decoration: none;
    }

    .navbar__brand-mark {
      display: grid;
      place-items: center;
      width: 2.6rem;
      aspect-ratio: 1;
      border-radius: 0.9rem;
      background: linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary));
      color: white;
      font-weight: 800;
      letter-spacing: 0.04em;
    }

    strong,
    small {
      display: block;
    }

    small {
      color: var(--color-text-muted);
      margin-top: 0.12rem;
    }

    .navbar__menu {
      display: flex;
      justify-content: center;
      gap: 0.25rem;
      flex-wrap: wrap;
    }

    .navbar__menu a,
    .navbar__cta {
      padding: 0.8rem 1rem;
      border-radius: 999px;
      color: var(--color-text-muted);
      text-decoration: none;
      transition: background 180ms ease, color 180ms ease, transform 180ms ease;
    }

    .navbar__menu a:hover,
    .navbar__menu a.is-active,
    .navbar__cta:hover {
      color: var(--color-text);
      background: var(--color-surface-soft);
      transform: translateY(-1px);
    }

    .navbar__actions {
      display: inline-flex;
      align-items: center;
      gap: 0.8rem;
    }

    .navbar__cta {
      background: linear-gradient(135deg, rgba(96, 165, 250, 0.18), rgba(45, 212, 191, 0.16));
      border: 1px solid rgba(96, 165, 250, 0.2);
    }

    @media (max-width: 1024px) {
      .navbar {
        grid-template-columns: 1fr;
      }

      .navbar__menu {
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 0.25rem;
      }

      .navbar__actions {
        justify-content: space-between;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly items = input.required<NavItem[]>();
  readonly activeId = input.required<string>();
}
