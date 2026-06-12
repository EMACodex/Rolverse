import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';

interface Pregunta {
  texto: string;
  opciones: { label: string; key: keyof Puntuaciones }[];
}

interface Puntuaciones {
  Hobbit: number;
  Elfo: number;
  GuerreroHumano: number;
  Enano: number;
  Mago: number;
}

@Component({
  selector: 'app-thecreator',
  standalone: true,
  imports: [
    TranslatePipe,
    CommonModule, FormsModule
  ],
  templateUrl: './thecreator.component.html',
  styleUrls: ['./thecreator.component.css'],
})
/**
 * Componente Angular de Rolverse para thecreator.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class TheCreatorComponent {
  // Índice de la pregunta actual (0…9)
  idx = 0;

  // Acumulador de puntuaciones
  scores: Puntuaciones = {
    Hobbit: 0,
    Elfo: 0,
    GuerreroHumano: 0,
    Enano: 0,
    Mago: 0,
  };

  // Una vez acabadas las 10 preguntas, aquí queda el resultado final
  resultado: keyof Puntuaciones | null = null;

  // Las 10 preguntas con sus opciones
  preguntas: Pregunta[] = [
    {
      texto: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_1',
      opciones: [
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_2', key: 'Hobbit' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_3', key: 'Mago' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_4', key: 'Elfo' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_5', key: 'GuerreroHumano' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_35', key: 'Enano' },
      ],
    },
    {
      texto: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_6',
      opciones: [
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_36', key: 'Hobbit' },
        {
          label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_37',
          key: 'Mago',
        },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_38', key: 'Elfo' },
        {
          label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_39',
          key: 'GuerreroHumano',
        },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_7', key: 'Enano' },
      ],
    },
    {
      texto: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_8',
      opciones: [
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_40', key: 'Hobbit' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_9', key: 'Mago' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_41', key: 'Elfo' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_42', key: 'GuerreroHumano' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_43', key: 'Enano' },
      ],
    },
    {
      texto: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_10',
      opciones: [
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_11', key: 'Hobbit' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_12', key: 'Mago' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_13', key: 'Elfo' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_14', key: 'GuerreroHumano' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_15', key: 'Enano' },
      ],
    },
    {
      texto: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_16',
      opciones: [
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_17', key: 'Hobbit' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_18', key: 'Mago' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_44', key: 'Elfo' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_19', key: 'GuerreroHumano' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_20', key: 'Enano' },
      ],
    },
    {
      texto: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_21',
      opciones: [
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_45', key: 'Hobbit' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_46', key: 'Mago' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_22', key: 'Elfo' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_47', key: 'GuerreroHumano' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_48', key: 'Enano' },
      ],
    },
    {
      texto: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_23',
      opciones: [
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_49', key: 'Hobbit' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_24', key: 'Mago' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_50', key: 'Elfo' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_51', key: 'GuerreroHumano' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_52', key: 'Enano' },
      ],
    },
    {
      texto: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_25',
      opciones: [
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_53', key: 'Enano' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_54', key: 'Elfo' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_26', key: 'Mago' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_55', key: 'Hobbit' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_56', key: 'GuerreroHumano' },
      ],
    },
    {
      texto: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_27',
      opciones: [
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_28', key: 'Hobbit' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_29', key: 'Mago' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_57', key: 'Elfo' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_58', key: 'GuerreroHumano' },
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_59', key: 'Enano' },
      ],
    },
    {
      texto: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_30',
      opciones: [
        { label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_31', key: 'Hobbit' },
        {
          label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_32',
          key: 'Mago',
        },
        {
          label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_33',
          key: 'Elfo',
        },
        {
          label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_34',
          key: 'GuerreroHumano',
        },
        {
          label: 'HOME_CHARACTER_CREATOR.THECREATOR.THECREATOR.TEXT_60',
          key: 'Enano',
        },
      ],
    },
  ];

  /**
   * Se llama al hacer clic en cualquiera de las opciones.
   * Suma +1 al arquetipo correspondiente y pasa a la siguiente pregunta
   * o, si era la última, calcula resultado.
   */
  /** Gestiona la accion elegir dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  elegir(key: keyof Puntuaciones) {
    this.scores[key]++;
    if (this.idx < this.preguntas.length - 1) {
      this.idx++;
    } else {
      this.calcularResultado();
    }
  }

  /**
   * Ordena las puntuaciones y elige la clave con mayor valor.
   */
  calcularResultado() {
    const sorted = Object.entries(this.scores) as [
      keyof Puntuaciones,
      number
    ][];
    sorted.sort((a, b) => b[1] - a[1]);
    this.resultado = sorted[0][0];
  }
}
