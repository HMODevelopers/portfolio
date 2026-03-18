import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import {
  CONTACT_LINKS,
  EXPERIENCE_ITEMS,
  HERO_METRICS,
  HIGHLIGHTS,
  NAV_ITEMS,
  PROJECT_ITEMS,
  TECHNOLOGY_CATEGORIES,
} from '../../../core/data/portfolio.data';
import { BackToTopComponent } from '../../../components/layout/back-to-top.component';
import { FooterComponent } from '../../../components/layout/footer.component';
import { NavbarComponent } from '../../../components/layout/navbar.component';
import { AboutSectionComponent } from '../sections/about-section.component';
import { ContactSectionComponent } from '../sections/contact-section.component';
import { ExperienceSectionComponent } from '../sections/experience-section.component';
import { HeroSectionComponent } from '../sections/hero-section.component';
import { HighlightsSectionComponent } from '../sections/highlights-section.component';
import { ProjectsSectionComponent } from '../sections/projects-section.component';
import { StackSectionComponent } from '../sections/stack-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    StackSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    HighlightsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    BackToTopComponent,
  ],
  template: `
    <div class="page-shell">
      <app-navbar [items]="navItems" [activeId]="activeSection()" />

      <main class="page-main">
        <section class="hero-wrapper">
          <div class="glow glow--one" aria-hidden="true"></div>
          <div class="glow glow--two" aria-hidden="true"></div>
          <app-hero-section [metrics]="heroMetrics" />
        </section>

        <app-about-section />
        <app-stack-section [categories]="technologyCategories" />
        <app-experience-section [items]="experienceItems" />
        <app-projects-section [projects]="projectItems" />
        <app-highlights-section [items]="highlights" />
        <app-contact-section [links]="contactLinks" />
      </main>

      <app-footer />
      <app-back-to-top />
    </div>
  `,
  styles: `
    :host {
      display: block;
      min-height: 100dvh;
      background:
        radial-gradient(circle at top left, rgba(96, 165, 250, 0.08), transparent 28%),
        radial-gradient(circle at top right, rgba(45, 212, 191, 0.08), transparent 25%),
        var(--color-background);
      color: var(--color-text);
    }

    .page-main {
      display: grid;
      gap: clamp(4rem, 8vw, 7rem);
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 clamp(1rem, 3vw, 2rem);
    }

    .hero-wrapper {
      position: relative;
      overflow: clip;
      min-height: min(85svh, 980px);
    }

    .glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(40px);
      pointer-events: none;
    }

    .glow--one {
      top: 6rem;
      right: 10%;
      width: 16rem;
      height: 16rem;
      background: rgba(96, 165, 250, 0.18);
    }

    .glow--two {
      top: 12rem;
      left: 5%;
      width: 13rem;
      height: 13rem;
      background: rgba(45, 212, 191, 0.12);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);

  readonly activeSection = signal('inicio');
  readonly navItems = NAV_ITEMS;
  readonly heroMetrics = HERO_METRICS;
  readonly highlights = HIGHLIGHTS;
  readonly technologyCategories = TECHNOLOGY_CATEGORIES;
  readonly experienceItems = EXPERIENCE_ITEMS;
  readonly projectItems = PROJECT_ITEMS;
  readonly contactLinks = CONTACT_LINKS;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const id = visibleSection?.target.getAttribute('id');
        if (id) {
          this.activeSection.set(id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.15, 0.3, 0.45, 0.6],
      },
    );

    const sections = Array.from(document.querySelectorAll<HTMLElement>('.section-observed'));
    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
