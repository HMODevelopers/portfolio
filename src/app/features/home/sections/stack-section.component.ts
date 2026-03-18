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
        eyebrow="Stack & Tecnologías"
        title="Tecnología aplicada con criterio arquitectónico, enfoque de negocio y mantenibilidad."
        description="Mi stack está orientado a construir servicios confiables, experiencias integradas y bases técnicas sólidas para productos que evolucionan."
      />

      <div class="stack-grid">
        @for (category of categories(); track category.title) {
          <article class="stack-card">
            <h3>{{ category.title }}</h3>
            <p>{{ category.description }}</p>
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
      gap: 1rem;
      padding: 1.5rem;
      border-radius: 1.5rem;
      border: 1px solid var(--color-border);
      background: var(--color-surface-elevated);
      box-shadow: var(--shadow-soft);
    }

    h3,
    p {
      margin: 0;
    }

    h3 {
      font-size: 1.2rem;
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
