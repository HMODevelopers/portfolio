import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'portfolio-theme';
  readonly theme = signal<ThemeMode>('dark');

  constructor() {
    effect(() => {
      const activeTheme = this.theme();
      this.document.documentElement.dataset['theme'] = activeTheme;
      this.document.documentElement.style.colorScheme = activeTheme;
      localStorage.setItem(this.storageKey, activeTheme);
    });
  }

  init(): void {
    const storedTheme = localStorage.getItem(this.storageKey) as ThemeMode | null;
    if (storedTheme === 'light' || storedTheme === 'dark') {
      this.theme.set(storedTheme);
    }
  }

  toggleTheme(): void {
    this.theme.update((value) => (value === 'dark' ? 'light' : 'dark'));
  }
}
