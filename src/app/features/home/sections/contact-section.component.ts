import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CONTACT_WHATSAPP_URL } from '../../../core/data/portfolio.data';
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
        title="Disponible para colaborar en soluciones que necesiten estabilidad, claridad técnica y enfoque en resultados."
        description="Si buscas un perfil con experiencia en sistemas, backend, frontend y mejora continua, será un gusto conversar contigo."
      />

      <div class="contact-card">
        <div class="contact-card__copy">
          <h3>Conectemos</h3>
          <p>
            Actualmente me encuentro en Hermosillo, Sonora, México. Estoy abierto a conversar sobre
            oportunidades profesionales, mantenimiento evolutivo, desarrollo de plataformas y mejora
            de sistemas existentes.
          </p>
        </div>

        <div class="contact-card__links">
          @for (link of links(); track link.label) {
            <a
              [href]="link.href"
              [target]="isExternal(link.href) ? '_blank' : null"
              [attr.rel]="isExternal(link.href) ? 'noopener noreferrer' : null"
              [attr.aria-label]="getAriaLabel(link)"
              [class.contact-card__link--whatsapp]="isWhatsAppLink(link)"
            >
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

    .contact-card__copy {
      align-content: start;
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
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 3.5rem;
      width: fit-content;
      max-width: 100%;
      padding: 0.95rem 1.5rem;
      border-radius: 1rem;
      background: linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary));
      color: white;
      font-weight: 700;
      letter-spacing: 0.01em;
      box-shadow: 0 18px 35px -24px rgba(37, 99, 235, 0.85);
      cursor: pointer;
      transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
    }

    .contact-card__button:hover {
      transform: translateY(-2px);
      box-shadow: 0 22px 38px -24px rgba(37, 99, 235, 0.95);
      filter: saturate(1.08);
    }

    .contact-card__button:focus-visible,
    .contact-card__links a:focus-visible {
      outline: 3px solid color-mix(in srgb, var(--color-accent) 55%, white 45%);
      outline-offset: 3px;
    }

    .contact-card__links a {
      display: grid;
      gap: 0.4rem;
      padding: 1rem;
      border-radius: 1.1rem;
      border: 1px solid var(--color-border);
      background: var(--color-surface-soft);
      color: var(--color-text);
      cursor: pointer;
      transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
    }

    .contact-card__links a:hover {
      transform: translateY(-2px);
      border-color: var(--color-border-strong);
      box-shadow: var(--shadow-soft);
    }

    .contact-card__link--whatsapp {
      background: linear-gradient(180deg, color-mix(in srgb, var(--color-surface-soft) 82%, #25d366 18%), var(--color-surface-soft));
      border-color: color-mix(in srgb, var(--color-border) 68%, #25d366 32%);
    }

    .contact-card__link--whatsapp strong {
      color: var(--color-text);
    }

    @media (max-width: 900px) {
      .contact-card {
        grid-template-columns: 1fr;
      }

      .contact-card__button {
        width: 100%;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  readonly links = input.required<ContactLink[]>();
  readonly whatsappHref = CONTACT_WHATSAPP_URL;

  protected isExternal(href: string): boolean {
    return href.startsWith('http');
  }

  protected isWhatsAppLink(link: ContactLink): boolean {
    return link.href === this.whatsappHref;
  }

  protected getAriaLabel(link: ContactLink): string {
    if (this.isWhatsAppLink(link)) {
      return `Abrir conversación de WhatsApp con Carlos al ${link.value}`;
    }

    return `Abrir ${link.label}: ${link.value}`;
  }
}
