import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private httpclient:HttpClient,) { }
  getRandomOtpCode6(): string {
    return String(Math.floor(100000 + Math.random() * 900000));
  }
  checkValidPhone(phoneNo: string) {
    const re = /^[0-9]*$/;
    return re.test(phoneNo);
  }


}
