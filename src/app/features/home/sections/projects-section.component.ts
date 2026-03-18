import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProjectItem } from '../../../core/models/portfolio.models';
import { ProjectCardComponent } from '../../../shared/ui/project-card.component';
import { SectionHeadingComponent } from '../../../shared/ui/section-heading.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [SectionHeadingComponent, ProjectCardComponent],
  template: `
    <section id="proyectos" class="section section-observed">
      <app-section-heading
        eyebrow="Proyectos destacados"
        title="Casos donde arquitectura, backend y entendimiento del dominio se convierten en valor tangible."
        description="Estos proyectos representan el tipo de soluciones que disfruto construir: sistemas claros, útiles y pensados para resolver necesidades reales con una base técnica seria."
      />

      <div class="projects-grid">
        @for (project of projects(); track project.name) {
          <app-project-card [project]="project" />
        }
      </div>
    </section>
  `,
  styles: `
    .projects-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  readonly projects = input.required<ProjectItem[]>();
}
