import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirstEditionComponent } from './first-edition/first-edition.component';
import { SecondEditionComponent } from './second-edition/second-edition.component';
import { ThirdEditionComponent } from './third-edition/third-edition.component';
import { FourthEditionComponent } from './fourth-edition/fourth-edition.component';
import { FifthEditionComponent } from './fifth-edition/fifth-edition.component';
import { TranslatePipe } from '../../pipes/translate.pipe';

type FiveRingsSystemTab =
  | 'resumen'
  | 'first'
  | 'second'
  | 'third'
  | 'fourth'
  | 'fifth';

@Component({
  selector: 'app-five-rings-game-system',
  standalone: true,
  imports: [
    TranslatePipe,
    FirstEditionComponent,
    SecondEditionComponent,
    ThirdEditionComponent,
    FourthEditionComponent,
    FifthEditionComponent,
  ],
  templateUrl: './five-rings-game-system.component.html',
  styleUrls: ['./five-rings-game-system.component.css'],
})
/**
 * Componente Angular de Rolverse para five rings game system.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class FiveRingsGameSystemComponent {
  readonly authService = inject(AuthService);
  selectedTab: FiveRingsSystemTab = 'resumen';

  readonly fiveRingsGameSystemPdfUrl =
    'https://drive.google.com/uc?export=download&id=1-EQfjZZ9doVsEMcJiHYMXutOdlBHtA8A';

  /** Gestiona la accion setTab dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  setTab(tab: FiveRingsSystemTab): void {
    this.selectedTab = tab;
  }
}
