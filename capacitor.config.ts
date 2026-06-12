import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // Identificador nativo de la app movil.
  appId: 'com.rolverse.app',
  // Nombre visible de la app en Android/iOS.
  appName: 'Rolverse',
  // Capacitor empaqueta el build Angular; no incluye backend ni base de datos.
  webDir: 'dist/rolverse/browser',
};

export default config;
