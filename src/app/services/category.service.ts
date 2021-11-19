import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductCategory } from '../interfaces/product-category';
const API_CATEGORY= environment.apiBaseLink+ '/api/product-category/';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  getAllCategory() {
    return this.httpClient.get<{ data: ProductCategory[], message?: string }>(API_CATEGORY + 'get-all-categories');
  }
}
