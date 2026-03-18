import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HeroMetric } from '../../../core/models/portfolio.models';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section id="inicio" class="hero section-observed">
      <div class="hero__copy">
        <span class="hero__eyebrow">Ingeniero en Sistemas de Información · Full Stack · Mejora continua</span>
        <h1>Carlos Octavio Preciado Lafarga</h1>
        <h2>Desarrollo soluciones funcionales que convierten necesidades reales en sistemas claros, estables y mantenibles.</h2>
        <p>
          Cuento con más de 10 años de experiencia creando, mejorando y manteniendo soluciones para
          organizaciones públicas y privadas, con especial enfoque en .NET, Angular, SQL Server,
          Power BI y plataformas orientadas a la operación diaria.
        </p>

        <div class="hero__actions">
          <a class="button button--primary" href="https://github.com/HMODevelopers" target="_blank" rel="noreferrer">
            Ver código en GitHub
          </a>
          <a class="button button--secondary" href="assets/documents/carlos-lafarga-cv.pdf" download>
            Descargar CV
          </a>
          <a class="button button--ghost" href="#contacto">Contactarme</a>
        </div>
      </div>

      <aside class="hero__panel" aria-label="Resumen profesional">
        <div class="hero__badge">
          <span>Ubicación: Hermosillo, Sonora, México. Disponible para colaborar en proyectos con foco en resultados, calidad y continuidad del servicio.</span>
        </div>

        <div class="hero__metrics">
          @for (metric of metrics(); track metric.value) {
            <article>
              <strong>{{ metric.value }}</strong>
              <span>{{ metric.label }}</span>
            </article>
          }
        </div>
      </aside>
    </section>
  `,
  styles: `
    .hero {
      display: grid;
      gap: 2rem;
      align-items: center;
      padding-top: clamp(2.5rem, 6vw, 5rem);
      grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.85fr);
    }

    .hero__copy,
    .hero__panel {
      position: relative;
      z-index: 1;
    }

    .hero__copy {
      display: grid;
      gap: 1.25rem;
    }

    .hero__eyebrow {
      display: inline-flex;
      width: fit-content;
      padding: 0.65rem 0.9rem;
      border-radius: 999px;
      border: 1px solid var(--color-border);
      background: rgba(96, 165, 250, 0.08);
      color: var(--color-accent);
      font-size: 0.82rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h1,
    h2,
    p {
      margin: 0;
    }

    h1 {
      font-family: var(--font-display);
      font-size: clamp(3rem, 8vw, 5.5rem);
      line-height: 0.95;
      letter-spacing: -0.07em;
    }

    h2 {
      font-size: clamp(1.35rem, 3vw, 2.2rem);
      line-height: 1.2;
      color: var(--color-text-soft);
      max-width: 14ch;
      letter-spacing: -0.05em;
    }

    p {
      max-width: 52rem;
      color: var(--color-text-muted);
      font-size: 1.05rem;
      line-height: 1.9;
    }

    .hero__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.9rem;
      margin-top: 0.5rem;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.95rem 1.25rem;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease, border-color 220ms ease;
    }

    .button:hover {
      transform: translateY(-2px);
    }

    .button--primary {
      background: linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary));
      color: white;
      box-shadow: var(--shadow-strong);
    }

    .button--secondary,
    .button--ghost {
      border: 1px solid var(--color-border);
      color: var(--color-text);
      background: var(--color-surface-soft);
    }

    .button--secondary:hover,
    .button--ghost:hover {
      border-color: var(--color-border-strong);
      box-shadow: var(--shadow-soft);
    }

    .hero__panel {
      display: grid;
      gap: 1rem;
      padding: 1.5rem;
      border-radius: 1.75rem;
      border: 1px solid var(--color-border);
      background:
        radial-gradient(circle at top, rgba(96, 165, 250, 0.2), transparent 50%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 35%),
        var(--color-surface-elevated);
      box-shadow: var(--shadow-strong);
      overflow: hidden;
    }

    .hero__panel::before {
      content: '';
      position: absolute;
      inset: auto -40% -45% auto;
      width: 16rem;
      height: 16rem;
      background: radial-gradient(circle, rgba(45, 212, 191, 0.2), transparent 65%);
      pointer-events: none;
    }

    .hero__badge {
      padding: 1rem;
      border-radius: 1.25rem;
      border: 1px solid rgba(96, 165, 250, 0.2);
      background: rgba(8, 15, 30, 0.45);
      color: var(--color-text-soft);
      line-height: 1.7;
    }

    .hero__metrics {
      display: grid;
      gap: 1rem;
    }

    .hero__metrics article {
      display: grid;
      gap: 0.45rem;
      padding: 1rem;
      border-radius: 1.1rem;
      background: var(--color-surface-soft);
      border: 1px solid var(--color-border);
    }

    strong {
      font-size: 1.05rem;
      letter-spacing: -0.02em;
    }

    span {
      color: var(--color-text-muted);
      line-height: 1.7;
    }

    @media (max-width: 920px) {
      .hero {
        grid-template-columns: 1fr;
      }

      h2 {
        max-width: 100%;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly metrics = input.required<HeroMetric[]>();
}
