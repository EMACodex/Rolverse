import { Injectable } from '@angular/core';

export type RolverseTheme = 'jedi' | 'sith';

@Injectable({
  providedIn: 'root',
})
/**
 * Aplica el tema visual global Jedi/Sith.
 * La eleccion se guarda en localStorage y se refleja como clase del body.
 */
export class ThemeService {
  private readonly storageKey = 'rolverse_theme';

  currentTheme: RolverseTheme = 'jedi';

  constructor() {
    const savedTheme = localStorage.getItem(this.storageKey) as RolverseTheme | null;
    this.setTheme(savedTheme === 'sith' ? 'sith' : 'jedi');
  }

  /** Cambia el tema global sin alterar la estructura ni rutas de la aplicacion. */
  setTheme(theme: RolverseTheme): void {
    this.currentTheme = theme;
    localStorage.setItem(this.storageKey, theme);

    document.body.classList.remove('theme-jedi', 'theme-sith');
    document.body.classList.add(`theme-${theme}`);
  }
}
