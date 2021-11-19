import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pagination } from '../interfaces/pagination';
import { Product } from '../interfaces/product';
import { ProductFilter } from '../interfaces/product-filter';
const API_PRODUCT=environment.apiBaseLink+"/api/product/";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  
  addSingleProduct(data: any) {
    console.log(data)
    return this.httpClient.post<{ message: string }>(API_PRODUCT + 'add-a-product', data);
  }

  editProductById(data: any) {
    return this.httpClient.put<{ message: string }>(API_PRODUCT + 'edit-product-by-id', data);
  }

  getAllProducts(paginate: Pagination, filter?: ProductFilter) {
    return this.httpClient.post<{ data: Product[], count: number, message: string }>(API_PRODUCT + 'get-all-products', {paginate, filter});
  }

  getSingleProductBySlug(slug: string) {
    return this.httpClient.get<{ data: any, message: string }>(API_PRODUCT + 'get-single-product-by-slug/' + slug);
  }

  getSingleProductById(id: string) {
    return this.httpClient.get<{ data: any, message: string }>(API_PRODUCT + 'get-single-product-by-id/' + id);
  }

  deleteProductById(id: string) {
    return this.httpClient.delete<{ message: string }>(API_PRODUCT + 'delete-product-by-id/' + id);
  }

  getRelatedProducts(data: any) {
    return this.httpClient.get<{ data: any, message: string }>(API_PRODUCT + 'get-related-products/' + data.category + '/' + data.subCategory + '/' + data.id);
  }

  productFilterByQuery(query: any, paginate?: any, select?: any) {
    const data = {
      query,
      paginate,
      select
    };
    return this.httpClient.post<{ data: Product[], message: string }>(API_PRODUCT + 'product-filter-query', data);
  }

  getSearchProduct(searchTerm: string, pagination?: Pagination, sort?: string) {
    const paginate = pagination;
    let params = new HttpParams();
    params = params.append('q', searchTerm);
    params = params.append('s', sort);
    // params = params.append('pageSize', productPerPage);
    // params = params.append('page', currentPage);
    return this.httpClient.post<{ data: Product[], count: number }>(API_PRODUCT + 'get-products-by-search', paginate, {params});
  }

  getSearchProductVendor(searchTerm: string, id: string, pagination?: Pagination, sort?: string) {
    const paginate = pagination;
    let params = new HttpParams();
    params = params.append('q', searchTerm);
    params = params.append('s', sort);
    // params = params.append('pageSize', productPerPage);
    // params = params.append('page', currentPage);
    return this.httpClient.post<{ data: Product[], count: number }>(API_PRODUCT + 'get-vendor-products-by-search/' + id, paginate, {params});
  }


  getSpecificProductsById(ids: string[], select?: string) {
    return this.httpClient.post<{ data: Product[] }>(API_PRODUCT + 'get-specific-products-by-ids', {ids, select});
  }

}
