export interface ForumInterface {
  id?: number;
  user_id?: number;
  title: string;
  description: string;
  visibility?: 'public' | 'private';
  creation_date?: string;
}

export interface getForumsResponse {
  message: string;
  data?: ForumInterface[];
}

export interface getForumResponse {
  message: string;
  data?: ForumInterface;
}

export interface createForumResponse {
  message: string;
  data?: ForumInterface;
}

export interface deleteForumResponse {
  message: string;
  data: ForumInterface;
}

export interface PrivateForumUser {
  id: number;
  name: string;
  email: string;
}

export interface PrivateForumUserResponse {
  message: string;
  data: PrivateForumUser[];
}

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

export interface ForumInvitationResponse {
  message: string;
  data: ForumInvitation[];
}
