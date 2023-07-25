interface IMedia {
  type: string;
  url: string;
  thumbnail: string;
}

interface IPrice {
  id: number;
  currency: string;
  amount: number;
  duration: number;
}

export interface IProducts {
  id: number;
  name: string;
  name_en: string;
  image_url: string;
  description: string;
  updated: string;
  prices: IPrice[];
  media: IMedia[];
  hack_status: number;
  status_time: string;
}

export interface ICheats {
  id: number;
  name: string;
  description: string;
  logo_img: string;
  bg_img: string;
  min_price: number;
  main_updated: string;
  main_hack_status: number;
  main_status_time: string;
  media: IMedia[];
  products: IProducts[];
}
