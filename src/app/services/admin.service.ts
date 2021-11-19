import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DATABASE_KEY } from '../core/utils/global-variables';
import { Admin } from '../interfaces/admin';
import { StorageService } from './storage.service';
import { UiService } from './ui.service';
const API_URL_ADMIN = environment.apiBaseLink + '/api/admin/'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private token: string;
  private isAdmin = false;
  private adminRole: string = null;
  private adminStatusListener = new Subject<boolean>();
  // Hold The Count Time..
  private tokenTimer: any;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private uiService: UiService,
    private storageService: StorageService,
  ) { }
  adminLogin(data: any) {
   
    console.log("ADMIN")
    this.httpClient.put<{ success: boolean; message: string; token: string; expiredIn: number; role: string }>
    (API_URL_ADMIN + 'login', data)
      .subscribe(res => {
        if (res.success) {
          console.log("admin logged "+res)
          this.token = res.token;
          this.adminRole = res.role;
          if (res.token) {
            this.isAdmin = true;
            this.adminStatusListener.next(true);
            // For Token Expired Time..
            const expiredInDuration = res.expiredIn;
            this.setSessionTimer(expiredInDuration);
            // Save Login Time & Expiration Time & Token to Local Storage..
            const now = new Date();
            const expirationDate = new Date(now.getTime() + expiredInDuration * 1000);
            // Store to Local
            this.saveAdminData(res.token, expirationDate, res.role);
            //this.spinner.hide();
            // Snack bar..
            this.uiService.success(res.message);
            // Navigate..
            this.router.navigate([environment.adminBaseUrl]);
          }
        } else {
          this.uiService.wrong(res.message);
          //this.spinner.hide();
          this.adminStatusListener.next(false);
        }

      }, error => {
        //this.spinner.hide();
        this.adminStatusListener.next(false);
        // console.log(error);
      });
  }
  // For Set Time Duration in ms..
  private setSessionTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.adminLogOut();
    }, duration * 1000); // 1s = 1000ms
    // console.log('Setting Time: ' + duration);
  }
  protected clearAdminData() {
    this.storageService.removeDataFromEncryptLocal(DATABASE_KEY.encryptAdminLogin);
  }

  adminLogOut() {
    this.token = null;
    this.isAdmin = false;
    this.adminStatusListener.next(false);
    // Clear Token from Storage..
    this.clearAdminData();
    // Clear The Token Time..
    clearTimeout(this.tokenTimer);
    // Navigate..
    this.router.navigate([environment.adminLoginUrl]);
  }
  


// For Save Token on Browser Storage..
  protected saveAdminData(token: string, expiredDate: Date, role: string) {
    const data = {
      token,
      expiredDate,
      role
    };
    this.storageService.addDataToEncryptLocal(data, DATABASE_KEY.encryptAdminLogin);
  }

  getAdminStatus(){
    return this.isAdmin;
  }
  getAdminRole() {
    return this.adminRole;
  }
  getAdminShortData() {
    return this.httpClient.get<{ data: Admin }>(API_URL_ADMIN + 'get-logged-in-admin-info');
  }
  getAdminToken() {
    return this.token;
  }
}
