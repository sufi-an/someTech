import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const SMS_API=environment.apiBaseLink+'/api/sms-service/';
@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor(private httpclient: HttpClient) { }

  sendSingleSms(phoneNo:string,message:string){
    return this.httpclient.post<{success: boolean; message: string}>
    (SMS_API+'send-sms',{phoneNo,message});
  }
}
