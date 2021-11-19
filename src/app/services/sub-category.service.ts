import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductSubCategory } from '../interfaces/product-sub-category';
const API_SUB_CATEGORY= environment.apiBaseLink+"/api/product-sub-category/";
@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(
    private httpClient:HttpClient
  ) { }
  getSubCategoryByCategoryId(id: string) {
    return this.httpClient.get<{data: ProductSubCategory[], message?: string}>(API_SUB_CATEGORY + 'get-sub-category-by-category-id/' + id);
  }
}
