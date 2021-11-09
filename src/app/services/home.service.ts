import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const JSON_API='https://jsonplaceholder.typicode.com/photos';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpclient:HttpClient,) { }

  getAllData(){
   return this.httpclient.get(JSON_API)
  }

}
