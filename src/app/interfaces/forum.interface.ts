

export interface ForumInterface {
  id?: string;
  title: string;
  description: string;
}

export interface getForumResponse {
  message: string;
  data?: ForumInterface[];
}

export interface ForumResponse {
  message: string;
  data?: ForumInterface[];
}
