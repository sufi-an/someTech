import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { UiService } from './ui.service';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { DATABASE_KEY } from '../core/utils/global-variables';
const BASE_API=environment.apiBaseLink+"/api/user/";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private token: string;
  private isUser = false;
  private userStatusListener = new Subject<boolean>();
  // Hold The Count Time..
  private tokenTimer: any;
  constructor(
    private httpclient:HttpClient,
    private _uiService:UiService,
    private router: Router,
    private _storageService:StorageService,
  ){}
  checkAndGetUserByPhone(phoneNo:string){
    console.log(phoneNo);
    return this.httpclient.get<{ data: boolean, message: string }>(BASE_API + 'check-user-by-phone/' + phoneNo);
  }

  userRegistration(data, redirectForm?: string){
    console.log(data)
    this.httpclient.post<{success:boolean,message:string,token:string,expiredIn:number}>
    (BASE_API+'registration',data).subscribe(res=>{
      if(res.success){ 
        this.token=res.token;
      //console.log(res);
      console.log(redirectForm);
      }
    })
  }

  getUserToken(){
    return this.token;
  }
  //login default
  userLogin(data: { username: string, password: string }, redirectFrom?: string) {

    this.httpclient.put<{ success: boolean; message: string; token: string; expiredIn: number }>
    (BASE_API + 'login', data)
      .subscribe(res => {
        if (res.success) {
          this.token = res.token;
          // Make User Auth True..
          if (res.token) {
            this.onSuccessLogin(res.token, res.expiredIn, redirectFrom);
          }
        } else {
          this._uiService.wrong(res.message);//implement wrong here
          this.isUser = false;
          this.userStatusListener.next(false);
          //this.spinner.hide();
        }

      }, () => {
        this.isUser = false;
        this.userStatusListener.next(false);
      //  this.spinner.hide();
      });
  }
  private onSuccessLogin(token: string, expiredIn: number, redirectFrom?: string, fromRegistration?: boolean) {
    this.isUser = true;
    this.userStatusListener.next(true);

    // For Token Expired Time..
    const expiredInDuration = expiredIn;
    this.setSessionTimer(expiredInDuration);

    // Save Login Time & Expiration Time & Token to Local Storage..
    const now = new Date();
    const expirationDate = new Date(now.getTime() + expiredInDuration * 1000);
    this.saveUserData(token, expirationDate);

    // Snack bar..
    this._uiService.success('Welcome! Login Success.');
    // Spinner
    //this.spinner.hide();

    // SYNC CART ITEM
   //this.getCarsItemFromLocal();

    // Navigate with Auth..
    if (redirectFrom) {
      this.router.navigate([redirectFrom]);
    } else {
      this.router.navigate([environment.userBaseUrl]);
    }
  }
  protected saveUserData(token: string, expiredDate: Date) {
    const data = {
      token,
      expiredDate
    };
    this._storageService.addDataToEncryptLocal(data, DATABASE_KEY.encryptUserLogin);

  }
  private setSessionTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
    }, duration * 1000);
  }
  getUserStatus(){
    return this.isUser;
  }
  
}

