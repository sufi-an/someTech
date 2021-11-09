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
}
