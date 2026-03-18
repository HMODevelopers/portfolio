import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectItem } from '../../core/models/portfolio.models';
import { ChipListComponent } from './chip-list.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ChipListComponent],
  template: `
    <article class="project-card">
      <div class="project-card__header">
        <div>
          <p class="project-card__kicker">{{ project().timeline }}</p>
          <h3>{{ project().name }}</h3>
        </div>
        <span class="project-card__role">{{ project().role }}</span>
      </div>

      <p class="project-card__description">{{ project().description }}</p>

      <div class="project-card__grid">
        <div>
          <span class="label">Problema</span>
          <p>{{ project().problem }}</p>
        </div>
        <div>
          <span class="label">Valor generado</span>
          <p>{{ project().impact }}</p>
        </div>
      </div>

      <app-chip-list [items]="project().technologies" [ariaLabel]="'Tecnologías del proyecto ' + project().name" />

      <ul class="project-card__highlights">
        @for (highlight of project().highlights; track highlight) {
          <li>{{ highlight }}</li>
        }
      </ul>
    </article>
  `,
  styles: `
    .project-card {
      display: grid;
      gap: 1.35rem;
      padding: 1.5rem;
      border-radius: 1.5rem;
      border: 1px solid var(--color-border);
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 30%),
        var(--color-surface-elevated);
      box-shadow: var(--shadow-soft);
      transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
    }

    .project-card:hover {
      transform: translateY(-6px);
      border-color: var(--color-border-strong);
      box-shadow: var(--shadow-strong);
    }

    .project-card__header {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .project-card__kicker,
    .label {
      margin: 0 0 0.55rem;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: var(--color-accent);
    }

    h3 {
      margin: 0;
      font-size: 1.35rem;
      letter-spacing: -0.03em;
    }

    .project-card__role {
      padding: 0.5rem 0.85rem;
      border-radius: 999px;
      background: rgba(96, 165, 250, 0.12);
      color: var(--color-text);
      font-size: 0.88rem;
      border: 1px solid rgba(96, 165, 250, 0.2);
    }

    .project-card__description,
    .project-card__grid p,
    .project-card__highlights li {
      margin: 0;
      color: var(--color-text-muted);
      line-height: 1.75;
    }

    .project-card__grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      padding: 1rem 0;
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
    }

    .project-card__highlights {
      display: grid;
      gap: 0.75rem;
      padding-left: 1.1rem;
      margin: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<ProjectItem>();
}
