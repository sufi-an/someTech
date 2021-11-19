import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable()
export class AuthAdminInterceptor implements HttpInterceptor {

  constructor(
    private adminService:AdminService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.adminService.getAdminToken();
    const authRequest = req.clone({
      headers: req.headers.set('Administrator', 'Bearer ' + authToken)
    });
    return next.handle(authRequest);
    
  }
}
