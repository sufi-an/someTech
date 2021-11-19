import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Admin } from '../interfaces/admin';
const API_ADMIN = environment.apiBaseLink + '/api/admin/';
@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(
    private httpClient:HttpClient,
  ) { }
  getLoginAdminInfo(select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.get<{ data: Admin, message: string }>(API_ADMIN + 'get-logged-in-admin-info', {params});
  }
}
