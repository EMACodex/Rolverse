/**
 * Modelo de datos personalUser usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface personalUser {
  name: string;
  email: string;
  message_count: number;
  carisma?: number;
  frikipuntos?: number;
  is_game_master?: boolean;
  last_login?: string | null;
  profile_image_path?: string | null;
  creation_date: Date;
}

/**
 * Modelo de datos personalUserResponse usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface personalUserResponse {
  data: personalUser;
  message: string;
}

/**
 * Modelo de datos profileImageResponse usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface profileImageResponse {
  data: {
    id: number;
    name: string;
    email: string;
    profile_image_path: string | null;
  };
  message: string;
}
