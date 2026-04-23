export type Category = 'Vintage' | 'Streetwear' | 'Budget Finds' | 'Accessories';

export interface Item {
  id: string;
  storeId: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  badge?: 'New' | 'Popular' | 'One of a kind' | 'Sale';
}

export interface Store {
  id: string;
  name: string;
  vibe: string;
  description: string;
  address: string;
  location: string; // e.g., 'Brooklyn, NY'
  distance: number; // base distance
  thumbnailUrl: string;
  galleryUrls: string[];
  categories: Category[];
  items: Item[];
}

export interface Promo {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  color: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'alert' | 'promo' | 'info';
}

export interface Location {
  id: string;
  name: string;
}