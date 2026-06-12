import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';
import { InternalNews } from '../../../interfaces/new.interface';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-add-new',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslatePipe],
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
})
/**
 * Componente Angular de Rolverse para add new.
 * Encapsula la vista, estado local y acciones de usuario de esta pantalla sin alterar rutas ni permisos.
 */
export class AddNewComponent implements OnInit {
  newsForm!: FormGroup;
  currentUser: { id: number; name: string } | null = null;
  currentDate = new Date();
  imagePreview: string | null = null;
  selectedImage: File | null = null;
  errorMessage: string | null = null;
  newsId: number | null = null;
  isEditMode = false;

  private apiBase = environment.apiUrl;

  fechaActual = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  /** Gestiona la accion ngOnInit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser() as {
      id: number;
      name: string;
    } | null;

    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      summary: [''],
      content: ['', Validators.required],
      image: [null],
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    this.newsId = idParam ? Number(idParam) : null;
    this.isEditMode = !!this.newsId;

    if (this.newsId) {
      this.loadNewsForEdit(this.newsId);
    }
  }

  /** Gestiona la accion loadNewsForEdit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  async loadNewsForEdit(newsId: number): Promise<void> {
    try {
      const news = await firstValueFrom(
        this.http.get<InternalNews>(`${environment.apiUrl}/news/${newsId}`)
      );

      this.newsForm.patchValue({
        title: news.title,
        summary: news.summary || '',
        content: news.content,
      });
      this.imagePreview = news.image_path ? this.getUploadUrl(news.image_path) : null;
    } catch (error) {
      console.error('Error cargando noticia para editar:', error);
      this.errorMessage = 'No se pudo cargar la noticia para editar.';
    }
  }

  /** Gestiona la accion onImageSelected dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    this.selectedImage = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  /** Gestiona la accion onSubmit dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  async onSubmit(): Promise<void> {
    const title = this.newsForm.value.title?.trim();
    const summary = this.newsForm.value.summary?.trim() || '';
    const content = this.newsForm.value.content?.trim();

    if (!title || !content) {
      this.errorMessage =
        'Debe rellenar titulo y descripcion antes de guardar.';
      return;
    }

    if (this.newsForm.invalid || !this.currentUser) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('summary', summary);
    formData.append('content', content);
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Tu sesion ha expirado. Por favor, vuelve a iniciar sesion.');
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    try {
      if (this.isEditMode && this.newsId) {
        await firstValueFrom(
          this.http.put(`${environment.apiUrl}/news/${this.newsId}`, formData, { headers })
        );
      } else {
        await firstValueFrom(
          this.http.post(`${environment.apiUrl}/news`, formData, { headers })
        );
      }

      alert(
        this.isEditMode
          ? 'Noticia actualizada correctamente'
          : 'Noticia publicada correctamente'
      );
      this.router.navigate(
        this.isEditMode && this.newsId ? ['/noticias', this.newsId] : ['/noticias']
      );
    } catch (error: any) {
      console.error('Error al guardar noticia:', error);
      this.errorMessage =
        error.error?.message ||
        error.error?.error ||
        'Ocurrio un error al guardar la noticia';
    }
  }

  /** Gestiona la accion getUploadUrl dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  getUploadUrl(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }

    return `${this.apiBase}${path.startsWith('/') ? path : `/${path}`}`;
  }

  /** Gestiona la accion closeError dentro de esta vista sin cambiar responsabilidades de rutas o servicios. */
  closeError(): void {
    this.errorMessage = null;
  }
}
