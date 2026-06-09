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

export interface personalUserResponse {
  data: personalUser;
  message: string;
}

export interface profileImageResponse {
  data: {
    id: number;
    name: string;
    email: string;
    profile_image_path: string | null;
  };
  message: string;
}
