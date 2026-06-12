/**
 * Modelo de datos Person usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface Person {
  name: string;
  img: string;
  desc: string;
}

/**
 * Modelo de datos NewsItem usado por Rolverse para tipar respuestas y vistas Angular.
 */
export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  image_path: string;
  author: string;
  created_at: string;
}
