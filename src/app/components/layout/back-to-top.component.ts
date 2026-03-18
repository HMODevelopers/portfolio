import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    @if (isVisible()) {
      <button class="back-to-top" type="button" (click)="scrollToTop()" aria-label="Volver arriba">
        ↑
      </button>
    }
  `,
  styles: `
    .back-to-top {
      position: fixed;
      right: 1.5rem;
      bottom: 1.5rem;
      z-index: 25;
      width: 3rem;
      aspect-ratio: 1;
      border: none;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-accent), var(--color-accent-secondary));
      color: white;
      cursor: pointer;
      box-shadow: var(--shadow-strong);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackToTopComponent {
  readonly isVisible = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isVisible.set(window.scrollY > 720);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
