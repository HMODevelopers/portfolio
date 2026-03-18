import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div>
        <strong>Carlos Lafarga</strong>
        <p>Software Engineer · Backend, arquitectura de sistemas y soluciones escalables.</p>
      </div>
      <div class="footer__links">
        <a href="mailto:carlos.lafarga.dev@gmail.com">Correo</a>
        <a href="https://github.com/carloslafarga" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/carlos-lafarga" target="_blank" rel="noreferrer">LinkedIn</a>
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
    }

    a:hover {
      color: var(--color-text);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
