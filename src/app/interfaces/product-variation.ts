import {Product} from './product';
import {ProductAttribute} from './product-attribute';

export interface ProductVariation {
  _id?: string;
  product: string | Product;
  attributes: string[] | ProductAttribute[];
  images?: string[];
  price: number;
  discountAmount: number;
  quantity: number;
  soldQuantity: number;
}
