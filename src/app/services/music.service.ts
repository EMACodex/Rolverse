import { Injectable, NgZone, inject } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
  providedIn: 'root',
})
/**
 * Gestiona la musica de fondo con Howler.
 * Mantiene una unica instancia de audio para evitar duplicados al navegar.
 */
export class MusicService {
  private readonly ngZone = inject(NgZone);
  private sound: Howl | null = null;

  private readonly volumeKey = 'rolverse_music_volume';
  private readonly enabledKey = 'rolverse_music_enabled';
  private readonly musicUrl = 'assets/audio/rolverse-theme.mp3';

  isPlaying = false;
  isEnabled = localStorage.getItem(this.enabledKey) === 'true';
  volume = this.getSavedVolume();

  private getSavedVolume(): number {
    const savedVolume = Number(localStorage.getItem(this.volumeKey));

    if (Number.isNaN(savedVolume)) {
      return 0.35;
    }

    return Math.min(Math.max(savedVolume, 0), 1);
  }

  private setPlaying(isPlaying: boolean): void {
    this.ngZone.run(() => {
      this.isPlaying = isPlaying;
    });
  }

  private initMusic(): void {
    if (this.sound) {
      return;
    }

    this.sound = new Howl({
      src: [this.musicUrl],
      loop: true,
      volume: this.volume,
      html5: true,
      preload: true,
      onplay: () => {
        this.setPlaying(true);
      },
      onpause: () => {
        this.setPlaying(false);
      },
      onstop: () => {
        this.setPlaying(false);
      },
      onend: () => {
        this.setPlaying(false);
      },
      onloaderror: (_id, error) => {
        console.error('Error cargando audio Rolverse:', error);
      },
      onplayerror: (_id, error) => {
        console.error('Error reproduciendo audio Rolverse:', error);

        (this.sound as any)?.once('unlock', () => {
          if (this.isEnabled) {
            this.sound?.play();
          }
        });
      },
    });
  }

  /** Activa la musica tras una interaccion del usuario para respetar autoplay. */
  play(): void {
    this.initMusic();

    if (!this.sound || this.sound.playing()) {
      return;
    }

    this.isEnabled = true;
    localStorage.setItem(this.enabledKey, 'true');
    this.sound.play();
  }

  /** Pausa la musica y guarda la preferencia del usuario. */
  pause(): void {
    if (!this.sound) {
      this.isEnabled = false;
      localStorage.setItem(this.enabledKey, 'false');
      this.setPlaying(false);
      return;
    }

    this.isEnabled = false;
    localStorage.setItem(this.enabledKey, 'false');
    this.sound.pause();
  }

  /** Metodo del servicio que encapsula la operacion stop sin exponer detalles del backend al componente. */
  stop(): void {
    if (!this.sound) {
      this.isEnabled = false;
      localStorage.setItem(this.enabledKey, 'false');
      this.setPlaying(false);
      return;
    }

    this.isEnabled = false;
    localStorage.setItem(this.enabledKey, 'false');
    this.sound.stop();
  }

  /** Alterna entre reproducir y pausar desde el control del header. */
  toggle(): void {
    this.initMusic();

    if (this.sound?.playing()) {
      this.pause();
      return;
    }

    this.play();
  }

  /** Ajusta el volumen dentro del rango seguro 0..1 y lo persiste localmente. */
  setVolume(volume: number): void {
    const safeVolume = Math.min(Math.max(volume, 0), 1);

    this.volume = safeVolume;
    localStorage.setItem(this.volumeKey, String(safeVolume));

    if (this.sound) {
      this.sound.volume(safeVolume);
    }
  }
}
