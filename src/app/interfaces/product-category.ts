import {ProductAttribute} from './product-attribute';

export interface ProductCategory {
  _id?: string;
  readOnly?: boolean;
  categoryName: string;
  categorySlug: string;
  attributes: string[] | ProductAttribute[];
  image: string;
}
