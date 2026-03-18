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
        eyebrow="Fortalezas"
        title="Capacidades que aportan estructura, velocidad y confiabilidad al desarrollo de productos digitales."
        description="Mi enfoque combina profundidad técnica, criterio de arquitectura y adaptación rápida para resolver problemas complejos sin perder claridad."
      />

      <div class="highlights-grid">
        @for (item of items(); track item.title) {
          <article>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        }

        <article>
          <h3>Especialidades técnicas</h3>
          <ul>
            <li>Arquitectura backend y diseño modular</li>
            <li>Diseño de bases de datos y consistencia de datos</li>
            <li>Seguridad, RBAC, JWT y control de acceso</li>
            <li>APIs REST e integración entre sistemas</li>
            <li>Desarrollo full stack con foco en backend</li>
            <li>Resolución de problemas y aprendizaje acelerado</li>
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
