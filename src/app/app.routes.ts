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
        (m) => m.AddNewComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'noticias/:id',
    loadComponent: () =>
      import('./components/news/view-news/view-news.component').then(
        (m) => m.ViewNewsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (m) => m.ContactoComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'author/:name',
    loadComponent: () =>
      import('./components/about-view/about-view.component').then(
        (m) => m.AboutViewComponent
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
