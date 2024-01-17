import { IItem } from './item.interface';

export interface IStand {
  id: string;
  name: string;
  type: string[];
  stand_images: string[];
  standUser: string;
  user_images: string[];
  chapter: string[];
  abilities: string[];
  battlecry: string;
  stats: string[];
}
