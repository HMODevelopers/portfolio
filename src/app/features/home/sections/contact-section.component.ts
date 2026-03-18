import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContactLink } from '../../../core/models/portfolio.models';
import { SectionHeadingComponent } from '../../../shared/ui/section-heading.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  template: `
    <section id="contacto" class="section section-observed contact">
      <app-section-heading
        eyebrow="Contacto"
        title="Listo para conversar sobre oportunidades, productos y retos técnicos con impacto real."
        description="Si buscas a un ingeniero capaz de entender negocio, diseñar backend sólido y entregar soluciones bien estructuradas, será un gusto conectar."
      />

      <div class="contact-card">
        <div class="contact-card__copy">
          <h3>Conectemos</h3>
          <p>
            Estoy abierto a oportunidades remotas, colaboración técnica, consultoría y proyectos donde la
            arquitectura, los datos y la calidad de ejecución sean una prioridad.
          </p>
          <a class="contact-card__button" href="mailto:carlos.lafarga.dev@gmail.com">Enviar mensaje</a>
        </div>

        <div class="contact-card__links">
          @for (link of links(); track link.label) {
            <a [href]="link.href" [target]="link.href.startsWith('http') ? '_blank' : null" rel="noreferrer">
              <span>{{ link.label }}</span>
              <strong>{{ link.value }}</strong>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact-card {
      display: grid;
      gap: 1.25rem;
      grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
      padding: clamp(1.5rem, 4vw, 2rem);
      border-radius: 2rem;
      border: 1px solid var(--color-border);
      background:
        radial-gradient(circle at top right, rgba(96, 165, 250, 0.18), transparent 35%),
        var(--color-surface-elevated);
      box-shadow: var(--shadow-strong);
    }

    .contact-card__copy,
    .contact-card__links {
      display: grid;
      gap: 1rem;
    }

    h3,
    p,
    strong,
    span {
      margin: 0;
    }

    p,
    span {
      color: var(--color-text-muted);
      line-height: 1.8;
    }

    .contact-card__button,
    .contact-card__links a {
      text-decoration: none;
    }

    .contact-card__button {
      width: fit-content;
      padding: 0.95rem 1.25rem;
      border-radius: 999px;
      background: linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary));
      color: white;
      font-weight: 700;
    }

    .contact-card__links a {
      display: grid;
      gap: 0.4rem;
      padding: 1rem;
      border-radius: 1.1rem;
      border: 1px solid var(--color-border);
      background: var(--color-surface-soft);
      color: var(--color-text);
      transition: transform 180ms ease, border-color 180ms ease;
    }

    .contact-card__links a:hover {
      transform: translateY(-2px);
      border-color: var(--color-border-strong);
    }

    @media (max-width: 900px) {
      .contact-card {
        grid-template-columns: 1fr;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  readonly links = input.required<ContactLink[]>();
}
