import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RUTA_API } from '../../../../environment';
import { Match } from '../../../interfaces/match.interface';
import { AuthService } from '../../../services/auth.service';
import { MatchService } from '../../../services/match.service';

@Component({
  selector: 'app-matches-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './matches-list.component.html',
  styleUrl: './matches-list.component.css',
})
export class MatchesListComponent implements OnInit {
  matches: Match[] = [];
  search = '';
  loading = false;
  error = '';
  currentPage = 1;
  itemsPerPage = 8;
  showCreateModal = false;
  createError = '';
  creating = false;
  showEditModal = false;
  editError = '';
  editing = false;
  editingMatch: Match | null = null;
  selectedCover: File | null = null;
  selectedEditCover: File | null = null;
  form = {
    title: '',
    short_description: '',
    full_description: '',
    rules: '',
    system_name: '',
    access_type: 'public' as 'public' | 'private',
  };
  editForm = {
    title: '',
    short_description: '',
    full_description: '',
    rules: '',
    system_name: '',
    access_type: 'public' as 'public' | 'private',
  };

  private apiBase = RUTA_API.replace(/\/$/, '');
  readonly fallbackCover = 'assets/img/partidas/partidas.png';

  constructor(
    public authService: AuthService,
    private matchService: MatchService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const page = Number(params.get('page'));
      if (page > 0) {
        this.currentPage = page;
      }
    });
    this.loadMatches();
  }

  get paginatedMatches(): Match[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.matches.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.matches.length / this.itemsPerPage));
  }

  loadMatches(): void {
    this.loading = true;
    this.error = '';

    this.matchService.getMatches(this.search).subscribe({
      next: (response) => {
        this.matches = response.data || [];
        this.currentPage = 1;
      },
      error: (error) => {
        this.matches = [];
        this.error = error.error?.message || 'No se pudieron cargar las partidas.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  coverUrl(match: Match): string {
    const cover = match.cover_image_path;
    if (!cover) return this.fallbackCover;
    if (cover.startsWith('http://') || cover.startsWith('https://')) return cover;
    return `${this.apiBase}${cover.startsWith('/') ? cover : `/${cover}`}`;
  }

  openCreateModal(): void {
    this.showCreateModal = true;
    this.createError = '';
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
    this.createError = '';
    this.selectedCover = null;
    this.form = {
      title: '',
      short_description: '',
      full_description: '',
      rules: '',
      system_name: '',
      access_type: 'public',
    };
  }

  onCoverSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedCover = input.files?.[0] || null;
  }

  createMatch(): void {
    this.createError = '';
    const title = this.form.title.trim();
    const shortDescription = this.form.short_description.trim();
    const systemName = this.form.system_name.trim();

    if (!title || !shortDescription || !systemName) {
      this.createError = 'Titulo, descripcion corta y sistema son obligatorios.';
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('short_description', shortDescription.slice(0, 500));
    formData.append('description', shortDescription.slice(0, 500));
    formData.append('full_description', this.form.full_description.trim());
    formData.append('rules', this.form.rules.trim());
    formData.append('system_name', systemName);
    formData.append('access_type', this.form.access_type);

    if (this.selectedCover) {
      formData.append('cover', this.selectedCover);
    }

    this.creating = true;
    this.matchService.createMatch(formData).subscribe({
      next: () => {
        this.closeCreateModal();
        this.loadMatches();
      },
      error: (error) => {
        this.createError = error.error?.message || 'No se pudo crear la partida.';
        this.creating = false;
      },
      complete: () => {
        this.creating = false;
      },
    });
  }

  canEditMatch(match: Match): boolean {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      return false;
    }

    return (
      this.authService.isAdmin() ||
      Number(match.creator_user_id) === Number(currentUser.id)
    );
  }

  openEditMatch(match: Match): void {
    this.editingMatch = match;
    this.showEditModal = true;
    this.editError = '';
    this.selectedEditCover = null;
    this.editForm = {
      title: match.title || '',
      short_description: match.short_description || match.description || '',
      full_description: match.full_description || '',
      rules: match.rules || '',
      system_name: match.system_name || '',
      access_type: match.access_type || 'public',
    };
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.editError = '';
    this.editing = false;
    this.editingMatch = null;
    this.selectedEditCover = null;
  }

  onEditCoverSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedEditCover = input.files?.[0] || null;
  }

  saveEditedMatch(): void {
    if (!this.editingMatch) {
      return;
    }

    this.editError = '';
    const title = this.editForm.title.trim();
    const shortDescription = this.editForm.short_description.trim();
    const systemName = this.editForm.system_name.trim();

    if (!title || !shortDescription || !systemName) {
      this.editError = 'Titulo, descripcion corta y sistema son obligatorios.';
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('short_description', shortDescription.slice(0, 500));
    formData.append('description', shortDescription.slice(0, 500));
    formData.append('full_description', this.editForm.full_description.trim());
    formData.append('rules', this.editForm.rules.trim());
    formData.append('system_name', systemName);
    formData.append('access_type', this.editForm.access_type);

    if (this.selectedEditCover) {
      formData.append('cover', this.selectedEditCover);
    }

    this.editing = true;
    this.matchService.updateMatch(this.editingMatch.id, formData).subscribe({
      next: (response) => {
        const updatedMatch = response.data;
        this.matches = this.matches.map((match) =>
          match.id === updatedMatch.id ? updatedMatch : match,
        );
        this.closeEditModal();
      },
      error: (error) => {
        this.editError = error.error?.message || 'No se pudo editar la partida.';
        this.editing = false;
      },
      complete: () => {
        this.editing = false;
      },
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
