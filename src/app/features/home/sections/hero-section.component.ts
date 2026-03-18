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
          <span class="hero__badge-label">Ubicación</span>
          <p>Hermosillo, Sonora, México · Disponible para colaborar en proyectos con foco en resultados, calidad y continuidad del servicio.</p>
        </div>

        <div class="hero__metrics">
          @for (metric of metrics(); track metric.value) {
            <article class="hero__metric-card">
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
    p,
    .hero__badge p,
    .hero__metric-card span {
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
      gap: 1.25rem;
      padding: 1.75rem;
      border-radius: 1.5rem;
      border: 1px solid var(--color-border);
      background:
        radial-gradient(circle at top, rgba(96, 165, 250, 0.2), transparent 50%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 35%),
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

    .hero__badge,
    .hero__metric-card {
      position: relative;
      display: grid;
      gap: 0.65rem;
      padding: 1.25rem;
      border-radius: 1.25rem;
      border: 1px solid var(--color-border);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
      box-shadow: var(--shadow-soft);
      backdrop-filter: blur(10px);
      transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease, background 220ms ease;
    }

    .hero__badge {
      border-color: rgba(96, 165, 250, 0.24);
      background: linear-gradient(180deg, rgba(8, 15, 30, 0.82), rgba(15, 23, 42, 0.72));
    }

    .hero__badge:hover,
    .hero__metric-card:hover {
      transform: translateY(-2px);
      border-color: var(--color-border-strong);
      box-shadow: var(--shadow-strong);
    }

    .hero__badge-label {
      display: inline-flex;
      width: fit-content;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--color-accent);
    }

    .hero__badge p {
      color: rgba(248, 250, 252, 0.92);
      font-size: 0.98rem;
      line-height: 1.75;
      text-wrap: balance;
    }

    .hero__metrics {
      display: grid;
      gap: 1rem;
    }

    .hero__metric-card strong {
      color: var(--color-text);
      font-size: clamp(1.18rem, 2vw, 1.4rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.15;
    }

    .hero__metric-card span {
      color: var(--color-text-soft);
      font-size: 0.97rem;
      line-height: 1.75;
      max-width: 32ch;
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
