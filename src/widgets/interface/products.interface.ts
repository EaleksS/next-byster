export interface IMedia {
  type: string;
  url: string;
}

interface IRotaions {
  description: string;
  description_en: string;
  id: number;
  klass: string;
  media: IMedia[];
  name: string;
  role_type: string;
  specialization: string;
  type: string;
}

export interface IProduct {
  currency: string;
  description: string;
  description_en: string;
  duration: number;
  id: number;
  image_url: string;
  is_bundle: true;
  media: IMedia[];
  name: string;
  name_en: string;
  price: number;
  rotations: IRotaions[];
}
