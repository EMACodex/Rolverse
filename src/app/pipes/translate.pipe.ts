import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
/**
 * Pipe de traduccion usado en templates Angular.
 * Resuelve una clave fija mediante TranslateService y se mantiene impuro
 * para reflejar cambios de idioma en la interfaz.
 */
export class TranslatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  /** Devuelve el texto traducido asociado a la clave recibida. */
  transform(key: string): string {
    return this.translateService.translate(key);
  }
}
