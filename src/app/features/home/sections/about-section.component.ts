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
        title="Ingeniería orientada a resolver procesos reales con claridad técnica y visión de producto."
        description="Combino enfoque backend, diseño de arquitectura y entendimiento del negocio para construir soluciones mantenibles, escalables y alineadas a objetivos operativos."
      />

      <div class="about-grid">
        <article>
          <h3>Quién soy</h3>
          <p>
            Soy Carlos Lafarga, Ingeniero de Software con experiencia desarrollando plataformas y sistemas
            que deben responder bien bajo reglas reales de operación, restricciones institucionales y
            crecimiento funcional sostenido.
          </p>
        </article>

        <article>
          <h3>Qué hago</h3>
          <p>
            Diseño y desarrollo backend, APIs empresariales, modelos de datos, módulos de seguridad,
            integraciones y experiencias full stack donde la consistencia técnica importa tanto como el
            resultado para el usuario final.
          </p>
        </article>

        <article>
          <h3>Valor que aporto</h3>
          <p>
            Aporto estructura, criterio y ejecución. Puedo entrar a un dominio complejo, entender sus flujos,
            proponer una arquitectura viable y convertirla en software confiable con foco en mantenibilidad,
            trazabilidad y escalabilidad.
          </p>
        </article>

        <article>
          <h3>Tipo de proyectos</h3>
          <p>
            He trabajado en sistemas para educación, gobierno, inventarios, control administrativo, plataformas
            de análisis y soluciones empresariales donde backend, base de datos y reglas de negocio son el centro.
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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {}
