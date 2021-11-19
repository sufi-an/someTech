import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductBrand } from '../interfaces/product-brand';

const API_BRAND=environment.apiBaseLink+"/api/brand/";
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private httpClient:HttpClient
  ) { }
  getAllBrands() {
    return this.httpClient.get<{data: ProductBrand[], message?: string}>(API_BRAND + 'get-all-brands');
  }
  addBrand(data: ProductBrand) {
    return this.httpClient.post<{message: string}>(API_BRAND + 'add-brand', data);
  }
  getBrandByBrandID(id: string) {
    return this.httpClient.get<{data: ProductBrand, message?: string}>(API_BRAND + 'get-brand-by-brand-id/' + id);
  }
  editBrandData(data: ProductBrand) {
    return this.httpClient.put<{message?: string}>(API_BRAND + 'edit-brand-by-brand', data);
  }
}
