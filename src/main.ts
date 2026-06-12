import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Punto de arranque de Angular para web, Electron y Capacitor.
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
