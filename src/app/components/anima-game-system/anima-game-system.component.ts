import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AnimaBeyondFantasyComponent } from './anima-beyond-fantasy/anima-beyond-fantasy.component';
import { AnimaCoreExxetComponent } from './anima-core-exxet/anima-core-exxet.component';
import { AnimaShadowOmegaComponent } from './anima-shadow-omega/anima-shadow-omega.component';
import { AnimaBeyondGoodEvilComponent } from './anima-beyond-good-evil/anima-beyond-good-evil.component';
import { AnimaTwilightGodsComponent } from './anima-twilight-gods/anima-twilight-gods.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

type AnimaSystemTab =
  | 'resumen'
  | 'beyondFantasy'
  | 'coreExxet'
  | 'shadowOmega'
  | 'beyondGoodEvil'
  | 'twilightGods';

@Component({
  selector: 'app-anima-game-system',
  standalone: true,
  imports: [
    TranslatePipe,
    AnimaBeyondFantasyComponent,
    AnimaCoreExxetComponent,
    AnimaShadowOmegaComponent,
    AnimaBeyondGoodEvilComponent,
    AnimaTwilightGodsComponent,
  ],
  templateUrl: './anima-game-system.component.html',
  styleUrls: ['./anima-game-system.component.css'],
})
/**
 * Componente Angular de Rolverse para anima game system.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AnimaGameSystemComponent {
  readonly authService = inject(AuthService);
  selectedTab: AnimaSystemTab = 'resumen';

  readonly animaGameSystemPdfUrl =
    'https://drive.google.com/uc?export=download&id=1nctXQM-gPl5uuNBPFJnZz9olNGGT25Sa';

  /** Gestiona la accion setTab dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  setTab(tab: AnimaSystemTab): void {
    this.selectedTab = tab;
  }
}
