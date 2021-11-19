import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {EncryptStorage} from 'encrypt-storage';
// Encrypt
const encryptStorage = new EncryptStorage(environment.storageSecret);
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  addDataToEncryptLocal(data: any, key: string) {
    encryptStorage.setItem(key, data);
  }
  removeDataFromEncryptLocal(key: string) {
    encryptStorage.removeItem(key);
  }
  getStoredInput(key: string): any {
    const data = sessionStorage.getItem(key);
    return JSON.parse(data);
  }

  storeInputData(data: any, key: string) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  removeSessionData(key: string) {
    sessionStorage.removeItem(key);
  }
}
