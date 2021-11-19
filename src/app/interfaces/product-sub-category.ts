import {ProductBrand} from './product-brand';
import {ProductCategory} from './product-category';
import {ProductAttribute} from './product-attribute';

export interface ProductSubCategory {
  _id?: string;
  readOnly?: boolean;
  subCategoryName: string;
  subCategorySlug: string;
  brand: string | ProductBrand;
  category: string | ProductCategory;
  attributes: string[] |  ProductAttribute[];
}
