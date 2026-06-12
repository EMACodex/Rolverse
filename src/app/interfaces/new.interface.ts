/**
 * Modelo de datos InternalNews usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface InternalNews {
  id: number;
  title: string;
  summary: string | null;
  content: string;
  image_path: string | null;
  author_id: number;
  author: string;
  author_name?: string;
  created_at: string;
}
