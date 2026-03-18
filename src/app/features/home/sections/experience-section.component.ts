import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ExperienceItem } from '../../../core/models/portfolio.models';
import { ExperienceTimelineComponent } from '../../../shared/ui/experience-timeline.component';
import { SectionHeadingComponent } from '../../../shared/ui/section-heading.component';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [SectionHeadingComponent, ExperienceTimelineComponent],
  template: `
    <section id="experiencia" class="section section-observed">
      <app-section-heading
        eyebrow="Experiencia"
        title="Trayectoria desarrollando software que respalda procesos críticos, académicos y administrativos."
        description="Mi experiencia combina desarrollo, mantenimiento, soporte, optimización y evolución de sistemas utilizados por instituciones públicas y privadas."
      />

      <app-experience-timeline [items]="items()" />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
  readonly items = input.required<ExperienceItem[]>();
}
