import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../shared/ui/section-heading.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  template: `
    <section id="sobre-mi" class="section section-observed">
      <app-section-heading
        eyebrow="Sobre mí"
        title="Ingeniero en Sistemas enfocado en construir soluciones claras, funcionales y sostenibles para necesidades reales."
        description="Cuento con más de 10 años de experiencia creando, mejorando y manteniendo sistemas para organizaciones públicas y privadas, siempre con foco en resultados, calidad y continuidad del servicio."
      />

      <div class="about-grid">
        <article>
          <h3>Perfil profesional</h3>
          <p>
            Soy Carlos Octavio Preciado Lafarga, Ingeniero en Sistemas de Información radicado en
            Hermosillo, Sonora, México. Me enfoco en transformar necesidades reales en herramientas
            claras y funcionales que apoyen la operación diaria de cada organización.
          </p>
        </article>

        <article>
          <h3>Enfoque de trabajo</h3>
          <p>
            Disfruto aprender, optimizar sistemas y asegurar que sean fáciles de usar, estables y
            sencillos de mantener. Trabajo con visión práctica, entendiendo el problema antes de
            construir la solución.
          </p>
        </article>

        <article>
          <h3>Formación y certificaciones</h3>
          <p>
            Ingeniería en Sistemas de Información por la Universidad de Sonora (2009–2015).
            Certificaciones: Oracle Java SE 6 (2015) y Power BI (2023).
          </p>
        </article>

        <article>
          <h3>Idiomas</h3>
          <div class="language-list" aria-label="Idiomas y nivel">
            <p class="language-item">
              <strong>Español</strong>
              <span>— Nativo</span>
            </p>
            <p class="language-item">
              <strong>Inglés</strong>
              <span>— Básico (A2)</span>
            </p>
          </div>
          <p>
            Inglés con comprensión lectora básica, capacidad de entender conversaciones simples y
            comunicación limitada. Actualmente en proceso de mejora para desarrollar mayor fluidez.
          </p>
        </article>
      </div>
    </section>
  `,
  styles: `
    .about-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    article {
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
      margin-bottom: 0.85rem;
      font-size: 1.1rem;
      letter-spacing: -0.03em;
    }

    p {
      color: var(--color-text-muted);
      line-height: 1.85;
    }

    .language-list {
      display: grid;
      gap: 0.35rem;
      margin-bottom: 0.85rem;
    }

    .language-item {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 0.35rem;
      line-height: 1.6;
    }

    .language-item strong {
      color: var(--color-text);
      font-weight: 700;
    }

    .language-item span {
      color: var(--color-text-muted);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {}
