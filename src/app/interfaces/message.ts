/**
 * Modelo de datos MessageInterface usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface MessageInterface {
  id: number;
  user_id: number;
  user_name: string;
  forum_id: number;
  text: string | null;
  image_path?: string | null;
  creation_date: Date;
}

/**
 * Modelo de datos GetMessagesResponse usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface GetMessagesResponse {
  message: string;
  data: MessageInterface[];
}

/**
 * Modelo de datos GetMessageResponse usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface GetMessageResponse {
  message: string;
  data: MessageInterface;
}
