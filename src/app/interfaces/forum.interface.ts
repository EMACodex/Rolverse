/**
 * Modelo de datos ForumInterface usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface ForumInterface {
  id?: number;
  user_id?: number;
  title: string;
  description: string;
  visibility?: 'public' | 'private';
  creation_date?: string;
}

/**
 * Modelo de datos getForumsResponse usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface getForumsResponse {
  message: string;
  data?: ForumInterface[];
}

/**
 * Modelo de datos getForumResponse usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface getForumResponse {
  message: string;
  data?: ForumInterface;
}

/**
 * Modelo de datos createForumResponse usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface createForumResponse {
  message: string;
  data?: ForumInterface;
}

/**
 * Modelo de datos deleteForumResponse usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface deleteForumResponse {
  message: string;
  data: ForumInterface;
}

/**
 * Modelo de datos PrivateForumUser usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface PrivateForumUser {
  id: number;
  name: string;
  email: string;
}

/**
 * Modelo de datos PrivateForumUserResponse usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface PrivateForumUserResponse {
  message: string;
  data: PrivateForumUser[];
}

/**
 * Modelo de datos ForumInvitation usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface ForumInvitation {
  id: number;
  forum_id: number;
  inviter_user_id: number;
  invited_user_id: number;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  title: string;
  description: string;
  inviter_name: string | null;
  inviter_email: string | null;
}

/**
 * Modelo de datos ForumInvitationResponse usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface ForumInvitationResponse {
  message: string;
  data: ForumInvitation[];
}
