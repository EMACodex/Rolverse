import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { RUTA_API } from '../../../../environment';
import {
  Match,
  MatchAction,
  MatchBoard,
  MatchCharacter,
  MatchMessage,
  MatchModule,
  MatchUserSearchResult,
} from '../../../interfaces/match.interface';
import { AuthService } from '../../../services/auth.service';
import { MatchService } from '../../../services/match.service';

@Component({
  selector: 'app-match-scene',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatTabsModule],
  templateUrl: './match-scene.component.html',
  styleUrl: './match-scene.component.css',
})
export class MatchSceneComponent implements OnInit {
  @ViewChild('messageImageInput') messageImageInput?: ElementRef<HTMLInputElement>;
  @ViewChild('characterImageInput') characterImageInput?: ElementRef<HTMLInputElement>;
  @ViewChild('moduleFileInput') moduleFileInput?: ElementRef<HTMLInputElement>;
  @ViewChild('boardImageInput') boardImageInput?: ElementRef<HTMLInputElement>;
  @ViewChild('coverInput') coverInput?: ElementRef<HTMLInputElement>;

  match: Match | null = null;
  messages: MatchMessage[] = [];
  characters: MatchCharacter[] = [];
  modules: MatchModule[] = [];
  boards: MatchBoard[] = [];
  actions: MatchAction[] = [];
  loading = true;
  error = '';
  sceneMessage = '';
  editMode = false;
  editError = '';
  selectedCover: File | null = null;
  editForm = {
    title: '',
    short_description: '',
    full_description: '',
    rules: '',
    system_name: '',
    access_type: 'public' as 'public' | 'private',
  };
  messageForm = { text: '' };
  selectedMessageImage: File | null = null;
  characterForm = { name: '', description: '' };
  selectedCharacterImage: File | null = null;
  moduleForm = { title: '', description: '' };
  selectedModuleFile: File | null = null;
  boardForm = { title: '' };
  selectedBoardImage: File | null = null;
  actionText = '';
  actionRollDice = false;
  reviewResponses: Record<number, string> = {};
  inviteEmail = '';
  inviteResults: MatchUserSearchResult[] = [];
  selectedInviteUser: MatchUserSearchResult | null = null;
  inviteMessage = '';

  private apiBase = RUTA_API.replace(/\/$/, '');
  readonly fallbackCover = 'assets/img/partidas/partidas.png';
  readonly fallbackCharacter = 'assets/img/perfil.png';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    private matchService: MatchService,
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  get matchId(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  get canInteract(): boolean {
    return Boolean(this.match?.canPlay);
  }

  get canManage(): boolean {
    return Boolean(this.match?.canManage);
  }

  loadAll(): void {
    if (!this.matchId) {
      this.error = 'Partida no encontrada.';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.matchService.getMatchById(this.matchId).subscribe({
      next: (response) => {
        this.match = response.data;
        this.syncEditForm();
        this.loadSections();
      },
      error: (error) => {
        this.error = error.error?.message || 'No se pudo cargar la partida.';
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  loadSections(): void {
    this.loadMessages();
    this.loadCharacters();
    this.loadModules();
    this.loadBoards();
    this.loadActions();
  }

  loadMessages(): void {
    this.matchService.getMessages(this.matchId).subscribe({
      next: (response) => (this.messages = response.data || []),
      error: () => (this.messages = []),
    });
  }

  loadCharacters(): void {
    this.matchService.getCharacters(this.matchId).subscribe({
      next: (response) => (this.characters = response.data || []),
      error: () => (this.characters = []),
    });
  }

  loadModules(): void {
    this.matchService.getModules(this.matchId).subscribe({
      next: (response) => (this.modules = response.data || []),
      error: () => (this.modules = []),
    });
  }

  loadBoards(): void {
    this.matchService.getBoards(this.matchId).subscribe({
      next: (response) => (this.boards = response.data || []),
      error: () => (this.boards = []),
    });
  }

  loadActions(): void {
    this.matchService.getActions(this.matchId).subscribe({
      next: (response) => (this.actions = response.data || []),
      error: () => (this.actions = []),
    });
  }

  syncEditForm(): void {
    if (!this.match) return;
    this.editForm = {
      title: this.match.title || '',
      short_description: this.match.short_description || this.match.description || '',
      full_description: this.match.full_description || '',
      rules: this.match.rules || '',
      system_name: this.match.system_name || '',
      access_type: this.match.access_type || 'public',
    };
  }

  assetUrl(path: string | null | undefined, fallback: string): string {
    if (!path) return fallback;
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    return `${this.apiBase}${path.startsWith('/') ? path : `/${path}`}`;
  }

  onFileSelected(event: Event, target: 'cover' | 'message' | 'character' | 'module' | 'board'): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;

    if (target === 'cover') this.selectedCover = file;
    if (target === 'message') this.selectedMessageImage = file;
    if (target === 'character') this.selectedCharacterImage = file;
    if (target === 'module') this.selectedModuleFile = file;
    if (target === 'board') this.selectedBoardImage = file;
  }

  saveEdit(): void {
    if (!this.match) return;
    this.editError = '';

    const formData = new FormData();
    formData.append('title', this.editForm.title.trim());
    formData.append('short_description', this.editForm.short_description.trim().slice(0, 500));
    formData.append('description', this.editForm.short_description.trim().slice(0, 500));
    formData.append('full_description', this.editForm.full_description.trim());
    formData.append('rules', this.editForm.rules.trim());
    formData.append('system_name', this.editForm.system_name.trim());
    formData.append('access_type', this.editForm.access_type);
    if (this.selectedCover) formData.append('cover', this.selectedCover);

    this.matchService.updateMatch(this.match.id, formData).subscribe({
      next: (response) => {
        this.match = { ...this.match!, ...response.data };
        this.editMode = false;
        this.selectedCover = null;
        if (this.coverInput?.nativeElement) this.coverInput.nativeElement.value = '';
      },
      error: (error) => {
        this.editError = error.error?.message || 'No se pudo editar la partida.';
      },
    });
  }

  finishMatch(): void {
    if (!this.match || !window.confirm('Finalizar esta partida?')) return;
    this.matchService.finishMatch(this.match.id).subscribe({
      next: (response) => (this.match = { ...this.match!, ...response.data }),
      error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo finalizar.'),
    });
  }

  deleteMatch(): void {
    if (!this.match || !window.confirm('Eliminar esta partida?')) return;
    this.matchService.deleteMatch(this.match.id).subscribe({
      next: () => this.router.navigate(['/partidas']),
      error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo eliminar.'),
    });
  }

  sendMessage(): void {
    if (!this.canInteract) return;
    const text = this.messageForm.text.trim();
    if (!text && !this.selectedMessageImage) return;
    const formData = new FormData();
    formData.append('text', text);
    if (this.selectedMessageImage) formData.append('image', this.selectedMessageImage);
    this.matchService.sendMessage(this.matchId, formData).subscribe({
      next: () => {
        this.messageForm.text = '';
        this.selectedMessageImage = null;
        if (this.messageImageInput?.nativeElement) this.messageImageInput.nativeElement.value = '';
        this.loadMessages();
      },
      error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo enviar.'),
    });
  }

  rollDice(): void {
    if (!this.canInteract) return;
    this.matchService.rollDice(this.matchId).subscribe({
      next: () => this.loadMessages(),
      error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo tirar dados.'),
    });
  }

  saveCharacter(): void {
    if (!this.canInteract) return;
    const name = this.characterForm.name.trim();
    const description = this.characterForm.description.trim();
    if (!name || !description) return;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (this.selectedCharacterImage) formData.append('image', this.selectedCharacterImage);
    this.matchService.createOrUpdateCharacter(this.matchId, formData).subscribe({
      next: () => {
        this.characterForm = { name: '', description: '' };
        this.selectedCharacterImage = null;
        if (this.characterImageInput?.nativeElement) this.characterImageInput.nativeElement.value = '';
        this.loadCharacters();
      },
      error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo guardar personaje.'),
    });
  }

  uploadModule(): void {
    if (!this.canManage || !this.selectedModuleFile || !this.moduleForm.title.trim()) return;
    const formData = new FormData();
    formData.append('title', this.moduleForm.title.trim());
    formData.append('description', this.moduleForm.description.trim());
    formData.append('file', this.selectedModuleFile);
    this.matchService.uploadModule(this.matchId, formData).subscribe({
      next: () => {
        this.moduleForm = { title: '', description: '' };
        this.selectedModuleFile = null;
        if (this.moduleFileInput?.nativeElement) this.moduleFileInput.nativeElement.value = '';
        this.loadModules();
      },
      error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo subir modulo.'),
    });
  }

  deleteModule(moduleId: number): void {
    this.matchService.deleteModule(this.matchId, moduleId).subscribe({
      next: () => this.loadModules(),
      error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo eliminar modulo.'),
    });
  }

  uploadBoard(): void {
    if (!this.canManage || !this.selectedBoardImage || !this.boardForm.title.trim()) return;
    const formData = new FormData();
    formData.append('title', this.boardForm.title.trim());
    formData.append('image', this.selectedBoardImage);
    this.matchService.uploadBoard(this.matchId, formData).subscribe({
      next: () => {
        this.boardForm = { title: '' };
        this.selectedBoardImage = null;
        if (this.boardImageInput?.nativeElement) this.boardImageInput.nativeElement.value = '';
        this.loadBoards();
      },
      error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo subir tablero.'),
    });
  }

  deleteBoard(boardId: number): void {
    this.matchService.deleteBoard(this.matchId, boardId).subscribe({
      next: () => this.loadBoards(),
      error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo eliminar tablero.'),
    });
  }

  sendAction(): void {
    if (!this.canInteract || !this.actionText.trim()) return;
    this.matchService
      .createAction(this.matchId, {
        action_text: this.actionText.trim(),
        rollDice: this.actionRollDice,
      })
      .subscribe({
        next: () => {
          this.actionText = '';
          this.actionRollDice = false;
          this.loadActions();
        },
        error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo enviar accion.'),
      });
  }

  reviewAction(action: MatchAction, status: 'approved' | 'rejected'): void {
    const response = this.reviewResponses[action.id] || '';
    this.matchService.reviewAction(this.matchId, action.id, status, response).subscribe({
      next: () => {
        this.reviewResponses[action.id] = '';
        this.loadActions();
      },
      error: (error) => (this.sceneMessage = error.error?.message || 'No se pudo revisar accion.'),
    });
  }

  searchInviteUsers(): void {
    const email = this.inviteEmail.trim();
    this.selectedInviteUser = null;
    this.inviteMessage = '';

    if (email.length < 3 || !this.canManage) {
      this.inviteResults = [];
      return;
    }

    this.matchService.searchUser(this.matchId, email).subscribe({
      next: (response) => {
        this.inviteResults = response.data || [];
        if (this.inviteResults.length === 0) {
          this.inviteMessage = 'No existe ningun usuario registrado con ese email.';
        }
      },
      error: (error) => {
        this.inviteResults = [];
        this.inviteMessage =
          error.error?.message || 'No existe ningun usuario registrado con ese email.';
      },
    });
  }

  selectInviteUser(user: MatchUserSearchResult): void {
    this.selectedInviteUser = user;
    this.inviteEmail = user.email;
    this.inviteResults = [];
    this.inviteMessage = '';
  }

  inviteSelectedUser(): void {
    if (!this.selectedInviteUser || !this.canManage) return;
    this.matchService.inviteUser(this.matchId, this.selectedInviteUser.email).subscribe({
      next: (response) => {
        this.inviteMessage = response.message || 'Invitacion enviada correctamente.';
        this.inviteEmail = '';
        this.selectedInviteUser = null;
      },
      error: (error) => {
        this.inviteMessage = error.error?.message || 'No se pudo enviar la invitacion.';
      },
    });
  }
}
