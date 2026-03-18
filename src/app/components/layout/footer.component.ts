import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_WHATSAPP_URL } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div>
        <strong>Carlos Octavio Preciado Lafarga</strong>
        <p>Ingeniero en Sistemas de Información · Full Stack Developer con enfoque en soluciones funcionales, estables y mantenibles.</p>
      </div>
      <div class="footer__links">
        <a href="mailto:carloslafarga22@gmail.com">Correo</a>
        <a [href]="whatsappHref" target="_blank" rel="noopener noreferrer" aria-label="Abrir conversación de WhatsApp con Carlos al +52 662 395 3551">WhatsApp</a>
        <a href="https://github.com/HMODevelopers" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/carlos-octavio-preciado-lafarga-0423a5ba/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem clamp(1rem, 3vw, 2rem) 3.5rem;
      color: var(--color-text-muted);
    }

    strong {
      display: block;
      color: var(--color-text);
      margin-bottom: 0.45rem;
    }

    p {
      margin: 0;
      max-width: 36rem;
      line-height: 1.7;
    }

    .footer__links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      transition: color 180ms ease;
    }

    a:hover {
      color: var(--color-text);
    }

    a:focus-visible {
      outline: 3px solid color-mix(in srgb, var(--color-accent) 55%, white 45%);
      outline-offset: 3px;
      border-radius: 0.5rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly whatsappHref = CONTACT_WHATSAPP_URL;
}
