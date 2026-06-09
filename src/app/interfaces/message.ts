export interface MessageInterface {
  id: number;
  user_id: number;
  user_name: string;
  forum_id: number;
  text: string | null;
  image_path?: string | null;
  creation_date: Date;
}

export interface GetMessagesResponse {
  message: string;
  data: MessageInterface[];
}

export interface GetMessageResponse {
  message: string;
  data: MessageInterface;
}
