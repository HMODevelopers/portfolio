import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="section-heading">
      <span class="eyebrow">{{ eyebrow() }}</span>
      <h2>{{ title() }}</h2>
      <p>{{ description() }}</p>
    </div>
  `,
  styles: `
    .section-heading {
      display: grid;
      gap: 1rem;
      max-width: 46rem;
      margin-bottom: clamp(2.25rem, 4vw, 3.25rem);
    }

    .eyebrow {
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--color-accent);
    }

    h2 {
      margin: 0;
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 3.25rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.04em;
    }

    p {
      margin: 0;
      color: var(--color-text-muted);
      font-size: 1rem;
      line-height: 1.8;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeadingComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
