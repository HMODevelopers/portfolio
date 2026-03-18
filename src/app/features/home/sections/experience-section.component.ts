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
        title="Experiencia construyendo software útil, estructurado y listo para operar en contextos exigentes."
        description="He participado en soluciones donde backend, datos, seguridad y operación diaria son determinantes para el éxito del producto."
      />

      <app-experience-timeline [items]="items()" />
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
  readonly items = input.required<ExperienceItem[]>();
}
