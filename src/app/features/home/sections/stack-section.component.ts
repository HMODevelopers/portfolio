import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TechCategory } from '../../../core/models/portfolio.models';
import { ChipListComponent } from '../../../shared/ui/chip-list.component';
import { SectionHeadingComponent } from '../../../shared/ui/section-heading.component';

@Component({
  selector: 'app-stack-section',
  standalone: true,
  imports: [SectionHeadingComponent, ChipListComponent],
  template: `
    <section id="stack" class="section section-observed">
      <app-section-heading
        eyebrow="Stack tecnológico"
        title="Tecnologías y herramientas utilizadas en el desarrollo de soluciones reales."
        description="Capacidades técnicas organizadas por especialidad para construir productos estables, escalables y alineados a operación, mantenimiento y evolución continua."
      />

      <div class="stack-grid">
        @for (category of categories(); track category.title) {
          <article class="stack-card">
            <div class="stack-card__header">
              <h3>{{ category.title }}</h3>
              <p>{{ category.description }}</p>
            </div>
            <app-chip-list [items]="category.items" [ariaLabel]="category.title" />
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .stack-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }

    .stack-card {
      display: grid;
      gap: 1.25rem;
      padding: 1.5rem;
      border-radius: 1.5rem;
      border: 1px solid var(--color-border);
      background: var(--color-surface-elevated);
      box-shadow: var(--shadow-soft);
      transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
    }

    .stack-card:hover {
      transform: translateY(-4px);
      border-color: var(--color-border-strong);
      box-shadow: var(--shadow-strong);
    }

    .stack-card__header {
      display: grid;
      gap: 0.8rem;
    }

    h3,
    p {
      margin: 0;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 750;
      letter-spacing: -0.03em;
    }

    p {
      color: var(--color-text-muted);
      line-height: 1.8;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackSectionComponent {
  readonly categories = input.required<TechCategory[]>();
}
