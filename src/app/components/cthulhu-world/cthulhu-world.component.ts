import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-cthulhu-world',
  standalone: true,
  templateUrl: './cthulhu-world.component.html',
  styleUrls: ['./cthulhu-world.component.css'],
})
export class CthulhuWorldComponent {
  readonly authService = inject(AuthService);
  readonly cthulhuMapsPdfUrl =
    'https://drive.google.com/uc?export=download&id=1YyeLC2I16m7tdOpAWmD7eIohBD9DccRX';

  mapTypes = [
    {
      name: 'Ciudades antiguas',
      description:
        'Los mapas urbanos sirven para investigaciones, persecuciones, desapariciones y escenas de tensión. En Cthulhu una ciudad puede esconder bibliotecas prohibidas, sociedades secretas, archivos policiales, hospitales, hoteles y callejones donde nadie debería entrar de noche.',
    },
    {
      name: 'Mansiones y casas aisladas',
      description:
        'Son escenarios clásicos para partidas de misterio. Una mansión puede contener habitaciones cerradas, sótanos ocultos, diarios familiares, símbolos extraños, retratos inquietantes y secretos que conectan a sus habitantes con horrores antiguos.',
    },
    {
      name: 'Ruinas y templos olvidados',
      description:
        'Funcionan muy bien para expediciones arqueológicas, descubrimientos imposibles y encuentros con cultos. Estos lugares suelen revelar que la humanidad no fue la primera en habitar el mundo ni será la última.',
    },
    {
      name: 'Bosques, pantanos y zonas rurales',
      description:
        'Los mapas naturales permiten crear aislamiento, pérdida de orientación y amenaza invisible. Un bosque o pantano puede ocultar aldeas abandonadas, círculos rituales, criaturas antiguas o caminos que no deberían existir.',
    },
    {
      name: 'Laboratorios y hospitales',
      description:
        'Son lugares perfectos para historias de ciencia prohibida, experimentos fallidos y cordura al límite. Pueden incluir salas de observación, quirófanos, archivos médicos, cámaras selladas y pistas sobre investigaciones que salieron mal.',
    },
    {
      name: 'Localizaciones cósmicas',
      description:
        'Algunas partidas pueden llevar a lugares fuera de la realidad normal: sueños, dimensiones extrañas, ciudades imposibles o espacios donde las reglas del tiempo y la geometría dejan de tener sentido.',
    },
  ];
}
