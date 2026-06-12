/**
 * Representa una partida creada en Rolverse.
 * Incluye permisos calculados por backend para decidir que acciones mostrar.
 */
export interface Match {
  id: number;
  title: string;
  description?: string;
  creator_user_id: number;
  short_description: string;
  full_description?: string | null;
  rules?: string | null;
  system_name: string;
  cover_image_path?: string | null;
  access_type: 'public' | 'private';
  status: 'active' | 'finished';
  created_at?: string;
  updated_at?: string;
  creator_name?: string;
  canPlay?: boolean;
  canManage?: boolean;
  isMaster?: boolean;
  isAdmin?: boolean;
  isMember?: boolean;
  membershipRole?: string | null;
  role?: 'master' | 'player' | string | null;
}

/** Envoltorio comun de respuestas del backend para endpoints de partidas. */
export interface MatchResponse<T> {
  message: string;
  data: T;
}

/** Mensaje publicado dentro de una partida, incluyendo tiradas de dados. */
export interface MatchMessage {
  id: number;
  match_id: number;
  user_id: number;
  text?: string | null;
  image_path?: string | null;
  message_type: 'message' | 'dice' | string;
  dice_one?: number | null;
  dice_two?: number | null;
  dice_total?: number | null;
  master_decision?: string | null;
  created_at?: string;
  user_name?: string;
}

/** Personaje asociado a una partida y a un usuario concreto. */
export interface MatchCharacter {
  id: number;
  match_id: number;
  user_id: number;
  name: string;
  description: string;
  image_path?: string | null;
  user_name?: string;
}

/** Documento o modulo subido por el director/jugadores a una partida. */
export interface MatchModule {
  id: number;
  match_id: number;
  uploader_user_id: number;
  title: string;
  description?: string | null;
  file_path: string;
}

/** Tablero visual usado como apoyo de escena en una partida. */
export interface MatchBoard {
  id: number;
  match_id: number;
  uploader_user_id: number;
  title: string;
  image_path: string;
}

/** Accion narrativa enviada por un jugador y revisada por el master. */
export interface MatchAction {
  id: number;
  match_id: number;
  user_id: number;
  action_text: string;
  dice_one?: number | null;
  dice_two?: number | null;
  dice_total?: number | null;
  status: 'pending' | 'approved' | 'rejected';
  master_response?: string | null;
  reviewed_by_user_id?: number | null;
  user_name?: string;
}

/** Invitacion pendiente o resuelta para acceder a una partida privada. */
export interface MatchInvitation {
  id: number;
  match_id: number;
  inviter_user_id: number;
  invited_user_id: number;
  status: 'pending' | 'accepted' | 'rejected';
  title: string;
  short_description?: string;
  description?: string;
  inviter_name?: string;
  inviter_email?: string;
  created_at?: string;
}

/** Resultado minimo para invitar usuarios por email sin exponer mas datos. */
export interface MatchUserSearchResult {
  id: number;
  name: string;
  email: string;
}
