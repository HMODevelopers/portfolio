import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HighlightItem } from '../../../core/models/portfolio.models';
import { SectionHeadingComponent } from '../../../shared/ui/section-heading.component';

@Component({
  selector: 'app-highlights-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  template: `
    <section id="fortalezas" class="section section-observed">
      <app-section-heading
        eyebrow="Competencias"
        title="Habilidades personales y profesionales que fortalecen cada solución que desarrollo."
        description="Además del conocimiento técnico, aporto criterio, responsabilidad y comunicación clara para acompañar proyectos que deben funcionar bien en el día a día."
      />

      <div class="highlights-grid">
        @for (item of items(); track item.title) {
          <article>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        }

        <article>
          <h3>Otras competencias clave</h3>
          <ul>
            <li>Comunicación con usuarios no técnicos</li>
            <li>Orientación a resultados</li>
            <li>Mejora continua</li>
            <li>Responsabilidad</li>
            <li>Trabajo colaborativo con equipos multidisciplinarios</li>
            <li>Capacidad para mantener y evolucionar sistemas productivos</li>
          </ul>
        </article>
      </div>
    </section>
  `,
  styles: `
    .highlights-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    article {
      display: grid;
      gap: 0.85rem;
      padding: 1.5rem;
      border-radius: 1.5rem;
      border: 1px solid var(--color-border);
      background: var(--color-surface-elevated);
      box-shadow: var(--shadow-soft);
    }

    h3,
    p,
    ul {
      margin: 0;
    }

    h3 {
      font-size: 1.1rem;
      letter-spacing: -0.03em;
    }

    p,
    li {
      color: var(--color-text-muted);
      line-height: 1.8;
    }

    ul {
      padding-left: 1.1rem;
      display: grid;
      gap: 0.65rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightsSectionComponent {
  readonly items = input.required<HighlightItem[]>();
}
