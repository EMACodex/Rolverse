import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { notAuthGuard } from './guards/not-auth.guard';
import { SendMailComponent } from './components/auth/recover-password/send-mail/send-mail.component';
import { ResetPassComponent } from './components/auth/recover-password/reset-pass/reset-pass.component';
import { PersonalComponent } from './components/profile/personal/personal.component';
import { ForumPageComponent } from './components/forum/forum-page/forum-page.component';
import { ForumDetailComponent } from './components/forum/forum-detail/forum-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'session/login',
    component: LoginComponent,
    canActivate: [notAuthGuard],
  },
  {
    path: 'session/register',
    component: RegisterComponent,
    canActivate: [notAuthGuard],
  },
  {
    path: 'session/sendRecover',
    component: SendMailComponent,
    canActivate: [notAuthGuard],
  },
  {
    path: 'session/recover/:token',
    component: ResetPassComponent,
    canActivate: [notAuthGuard],
  },
  {
    path: 'profile',
    component: PersonalComponent,
    canActivate: [authGuard],
  },
  {
    path: 'noticias/agregar',
    loadComponent: () =>
      import('./components/news/add-new/add-new.component').then(
        (m) => m.AddNewComponent,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'noticias/:id',
    loadComponent: () =>
      import('./components/news/view-news/view-news.component').then(
        (m) => m.ViewNewsComponent,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactoComponent,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent,
      ),
  },
  {
    path: 'author/:name',
    loadComponent: () =>
      import('./components/about-view/about-view.component').then(
        (m) => m.AboutViewComponent,
      ),
  },
  {
    path: 'personajes',
    loadComponent: () =>
      import('./components/dungeon-characters/dungeon-character.component').then(
        (m) => m.DungeonCharacterComponent,
      ),
  },
  {
    path: 'mapas',
    loadComponent: () =>
      import('./components/dungeon-world/dungeon-world.component').then(
        (m) => m.DungeonWorldComponent,
      ),
  },
  {
    path: 'sistema-de-juego',
    loadComponent: () =>
      import('./components/dungeon-game-system/dungeon-game-system.component').then(
        (m) => m.DungeonGameSystemComponent,
      ),
  },
  {
    path: 'historias-dungeon',
    loadComponent: () =>
      import('./components/dungeon-stories/dungeon-stories.component').then(
        (m) => m.DungeonStoriesComponent,
      ),
  },
  {
    path: 'bestiario-dungeon',
    loadComponent: () =>
      import('./components/dungeon-bestiary/dungeon-bestiary.component').then(
        (m) => m.DungeonBestiaryComponent,
      ),
  },
  {
    path: 'pathfinder-personajes',
    loadComponent: () =>
      import('./components/pathfinder-characters/pathfinder-character.component').then(
        (m) => m.PathfinderCharacterComponent,
      ),
  },
  {
    path: 'pathfinder-mapas',
    loadComponent: () =>
      import('./components/pathfinder-world/pathfinder-world.component').then(
        (m) => m.PathfinderWorldComponent,
      ),
  },
  {
    path: 'pathfinder-sistema-de-juego',
    loadComponent: () =>
      import('./components/pathfinder-game-system/pathfinder-game-system.component').then(
        (m) => m.PathfinderGameSystemComponent,
      ),
  },
  {
    path: 'pathfinder-historias',
    loadComponent: () =>
      import('./components/pathfinder-stories/pathfinder-stories.component').then(
        (m) => m.PathfinderStoriesComponent,
      ),
  },
  {
    path: 'pathfinder-bestiario',
    loadComponent: () =>
      import('./components/pathfinder-bestiary/pathfinder-bestiary.component').then(
        (m) => m.PathfinderBestiaryComponent,
      ),
  },
  {
    path: 'anima-personajes',
    loadComponent: () =>
      import('./components/anima-characters/anima-character.component').then(
        (m) => m.AnimaCharacterComponent,
      ),
  },
  {
    path: 'anima-mapas',
    loadComponent: () =>
      import('./components/anima-world/anima-world.component').then(
        (m) => m.AnimaWorldComponent,
      ),
  },
  {
    path: 'anima-sistema-de-juego',
    loadComponent: () =>
      import('./components/anima-game-system/anima-game-system.component').then(
        (m) => m.AnimaGameSystemComponent,
      ),
  },
  {
    path: 'anima-historias',
    loadComponent: () =>
      import('./components/anima-stories/anima-stories.component').then(
        (m) => m.AnimaStoriesComponent,
      ),
  },
  {
    path: 'anima-bestiario',
    loadComponent: () =>
      import('./components/anima-bestiary/anima-bestiary.component').then(
        (m) => m.AnimaBestiaryComponent,
      ),
  },
  {
    path: 'warhammer-personajes',
    loadComponent: () =>
      import('./components/warhammer-characters/warhammer-character.component').then(
        (m) => m.WarhammerCharacterComponent,
      ),
  },
  {
    path: 'warhammer-mapas',
    loadComponent: () =>
      import('./components/warhammer-world/warhammer-world.component').then(
        (m) => m.WarhammerWorldComponent,
      ),
  },
  {
    path: 'warhammer-sistema-de-juego',
    loadComponent: () =>
      import('./components/warhammer-game-system/warhammer-game-system.component').then(
        (m) => m.WarhammerGameSystemComponent,
      ),
  },
  {
    path: 'warhammer-historias',
    loadComponent: () =>
      import('./components/warhammer-stories/warhammer-stories.component').then(
        (m) => m.WarhammerStoriesComponent,
      ),
  },
  {
    path: 'warhammer-bestiario',
    loadComponent: () =>
      import('./components/warhammer-bestiary/warhammer-bestiary.component').then(
        (m) => m.WarhammerBestiaryComponent,
      ),
  },
  {
    path: 'cthulhu-personajes',
    loadComponent: () =>
      import('./components/cthulhu-characters/cthulhu-character.component').then(
        (m) => m.CthulhuCharacterComponent,
      ),
  },
  {
    path: 'cthulhu-mapas',
    loadComponent: () =>
      import('./components/cthulhu-world/cthulhu-world.component').then(
        (m) => m.CthulhuWorldComponent,
      ),
  },
  {
    path: 'cthulhu-sistema-de-juego',
    loadComponent: () =>
      import('./components/cthulhu-game-system/cthulhu-game-system.component').then(
        (m) => m.CthulhuGameSystemComponent,
      ),
  },
  {
    path: 'cthulhu-historias',
    loadComponent: () =>
      import('./components/cthulhu-stories/cthulhu-stories.component').then(
        (m) => m.CthulhuStoriesComponent,
      ),
  },
  {
    path: 'cthulhu-bestiario',
    loadComponent: () =>
      import('./components/cthulhu-bestiary/cthulhu-bestiary.component').then(
        (m) => m.CthulhuBestiaryComponent,
      ),
  },
  {
    path: 'leyenda-5-anillos-personajes',
    loadComponent: () =>
      import('./components/five-rings-characters/five-rings-character.component').then(
        (m) => m.FiveRingsCharacterComponent,
      ),
  },
  {
    path: 'leyenda-5-anillos-mapas',
    loadComponent: () =>
      import('./components/five-rings-world/five-rings-world.component').then(
        (m) => m.FiveRingsWorldComponent,
      ),
  },
  {
    path: 'leyenda-5-anillos-sistema-de-juego',
    loadComponent: () =>
      import('./components/five-rings-game-system/five-rings-game-system.component').then(
        (m) => m.FiveRingsGameSystemComponent,
      ),
  },
  {
    path: 'leyenda-5-anillos-historias',
    loadComponent: () =>
      import('./components/five-rings-stories/five-rings-stories.component').then(
        (m) => m.FiveRingsStoriesComponent,
      ),
  },
  {
    path: 'leyenda-5-anillos-bestiario',
    loadComponent: () =>
      import('./components/five-rings-bestiary/five-rings-bestiary.component').then(
        (m) => m.FiveRingsBestiaryComponent,
      ),
  },
  {
    path: 'starwars/personajes',
    loadComponent: () =>
      import('./components/starwars-character/starwars-character.component').then(
        (m) => m.StarwarsCharacterComponent,
      ),
  },
  {
    path: 'starwars/planetas',
    loadComponent: () =>
      import('./components/starwars-world/starwars-world.component').then(
        (m) => m.StarwarsWorldComponent,
      ),
  },
  {
    path: 'starwars/sistema-de-juego',
    loadComponent: () =>
      import('./components/starwars-game-system/starwars-game-system.component').then(
        (m) => m.StarwarsGameSystemComponent,
      ),
  },
  {
    path: 'starwars/historias',
    loadComponent: () =>
      import('./components/starwars-stories/starwars-stories.component').then(
        (m) => m.StarwarsStoriesComponent,
      ),
  },
  {
    path: 'starwars/bestiario',
    loadComponent: () =>
      import('./components/starwars-bestiary/starwars-bestiary.component').then(
        (m) => m.StarwarsBestiaryComponent,
      ),
  },
  {
    path: 'forum',
    component: ForumPageComponent,
  },
  {
    path: 'forum/:id',
    component: ForumDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
