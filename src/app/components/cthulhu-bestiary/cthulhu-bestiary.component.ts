import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
@Component({
  selector: 'app-cthulhu-bestiary',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './cthulhu-bestiary.component.html',
  styleUrls: ['./cthulhu-bestiary.component.css'],
})
/**
 * Componente Angular de Rolverse para cthulhu bestiary.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class CthulhuBestiaryComponent {
  readonly authService = inject(AuthService);
  readonly cthulhuBestiaryPdfUrl =
    'https://drive.google.com/uc?export=download&id=17wHyVBmMEYylIDZOF4m1NMdsuNdrwA7N';

  creatures = [
    {
      name: 'CTHULHU.CTHULHU_BESTIARY.CTHULHU_BESTIARY.TEXT_1',
      description:
        'CTHULHU.CTHULHU_BESTIARY.CTHULHU_BESTIARY.TEXT_2',
    },
    {
      name: 'Sectarios y adoradores',
      description:
        'CTHULHU.CTHULHU_BESTIARY.CTHULHU_BESTIARY.TEXT_3',
    },
    {
      name: 'CTHULHU.CTHULHU_BESTIARY.CTHULHU_BESTIARY.TEXT_4',
      description:
        'CTHULHU.CTHULHU_BESTIARY.CTHULHU_BESTIARY.TEXT_5',
    },
    {
      name: 'Horrores de las profundidades',
      description:
        'CTHULHU.CTHULHU_BESTIARY.CTHULHU_BESTIARY.TEXT_6',
    },
    {
      name: 'Seres invisibles o extradimensionales',
      description:
        'CTHULHU.CTHULHU_BESTIARY.CTHULHU_BESTIARY.TEXT_7',
    },
    {
      name: 'Objetos malditos y presencias invocadas',
      description:
        'CTHULHU.CTHULHU_BESTIARY.CTHULHU_BESTIARY.TEXT_8',
    },
  ];
}
