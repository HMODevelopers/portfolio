import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ExperienceItem } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  template: `
    <div class="timeline">
      @for (item of items(); track item.role + item.period) {
        <article class="timeline__item">
          <div class="timeline__rail" aria-hidden="true"></div>
          <div class="timeline__content">
            <p class="timeline__period">{{ item.period }}</p>
            <div class="timeline__heading">
              <div>
                <h3>{{ item.role }}</h3>
                <p class="timeline__company">{{ item.company }}</p>
              </div>
              <span>{{ item.type }}</span>
            </div>
            <p class="timeline__summary">{{ item.summary }}</p>
            <div class="timeline__columns">
              <section>
                <h4>Responsabilidades clave</h4>
                <ul>
                  @for (responsibility of item.responsibilities; track responsibility) {
                    <li>{{ responsibility }}</li>
                  }
                </ul>
              </section>
              <section>
                <h4>Impacto</h4>
                <ul>
                  @for (result of item.impact; track result) {
                    <li>{{ result }}</li>
                  }
                </ul>
              </section>
            </div>
          </div>
        </article>
      }
    </div>
  `,
  styles: `
    .timeline {
      display: grid;
      gap: 1.5rem;
    }

    .timeline__item {
      position: relative;
      display: grid;
      grid-template-columns: 1.5rem minmax(0, 1fr);
      gap: 1rem;
    }

    .timeline__rail {
      position: relative;
    }

    .timeline__rail::before,
    .timeline__rail::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .timeline__rail::before {
      top: 0;
      bottom: -1.5rem;
      width: 1px;
      background: linear-gradient(180deg, var(--color-accent), rgba(148, 163, 184, 0.15));
    }

    .timeline__rail::after {
      top: 0.45rem;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: var(--color-accent);
      box-shadow: 0 0 0 8px rgba(96, 165, 250, 0.12);
    }

    .timeline__content {
      display: grid;
      gap: 1rem;
      padding: 1.5rem;
      border-radius: 1.5rem;
      border: 1px solid var(--color-border);
      background: var(--color-surface-elevated);
      box-shadow: var(--shadow-soft);
    }

    .timeline__period,
    h4 {
      margin: 0;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--color-accent);
    }

    .timeline__heading {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .timeline__heading h3,
    .timeline__company,
    .timeline__summary,
    li,
    span {
      margin: 0;
    }

    .timeline__heading h3 {
      font-size: 1.25rem;
      letter-spacing: -0.03em;
    }

    .timeline__company,
    .timeline__summary,
    li,
    span {
      color: var(--color-text-muted);
      line-height: 1.7;
    }

    .timeline__columns {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    section {
      display: grid;
      gap: 0.8rem;
    }

    ul {
      display: grid;
      gap: 0.8rem;
      margin: 0;
      padding-left: 1.1rem;
    }

    @media (max-width: 640px) {
      .timeline__item {
        grid-template-columns: 1rem minmax(0, 1fr);
      }

      .timeline__content {
        padding: 1.2rem;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceTimelineComponent {
  readonly items = input.required<ExperienceItem[]>();
}
