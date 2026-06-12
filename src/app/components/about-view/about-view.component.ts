import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Person } from '../../interfaces/about.interface';
import { NewsItem } from '../../interfaces/about.interface';

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css'],
})
/**
 * Componente Angular de Rolverse para about view.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AboutViewComponent implements OnInit {
  apiBase = environment.apiUrl;
  authorName = '';
  person: Person | null = null;
  reviews: NewsItem[] = [];
  loading = true;
  error = '';

  people: Person[] = [
    {
      name: 'Erik Bolsón',
      img: 'assets/img/erik.png',
      desc: 'Melómano impenitente de noche y programador de día, se sumerge entre acordes y algoritmos con la misma pasión. Devorador de redbulls y líneas de código, su verdadero hogar está en la mesa de juego: un amateur en juegos de tablero y estratega en vivo, siempre al acecho de nuevas partidas épicas. Cuando no está afinando un script, planea la próxima campaña o sintoniza su playlist favorita para inspirarse. En Rolverse lo encontrarás orquestando aventuras, así como componiendo melodías, listo para convertir cada partida en una experiencia inolvidable.',
    },
  ];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  async ngOnInit() {
    // 1) se recoge el parámetro “name” de la ruta
    this.authorName = this.route.snapshot.paramMap.get('name') || '';

    // 2) busqueda de la persona para la tarjeta
    this.person =
      this.people.find(
        (p) => p.name.toLowerCase() === this.authorName.toLowerCase()
      ) || null;

    try {
      // 3) se trae todas las noticias
      const all: NewsItem[] = await firstValueFrom(
        this.http.get<NewsItem[]>(`${environment.apiUrl}/news`)
      );

      // 4) Generar un “target” que solo sea la primera palabra del nombre
      const target = this.authorName.toLowerCase().split(' ')[0];

      // 5) Filtro
      this.reviews = all.filter((n) => n.author.toLowerCase().includes(target));
    } catch (err: any) {
      console.error('Error al cargar reseñas:', err);
      this.error = 'Error al cargar reseñas.';
    } finally {
      this.loading = false;
    }
  }
}
