/**
 * Configuracion de produccion.
 * La web desplegada y el instalador final de Electron consumen el backend remoto.
 */
export const environment = {
  production: true,
  apiUrl: 'https://rolverseproyecto.onrender.com',
};

export const RUTA_API = environment.apiUrl + '/';
