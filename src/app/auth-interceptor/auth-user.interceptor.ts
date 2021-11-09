import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { UserServiceService } from '../services/user-service.service';

@Injectable()
export class AuthUserInterceptor implements HttpInterceptor {

  constructor(private userService: UserServiceService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      console.log("inside Interceptor")
    const authToken = this.userService.getUserToken();
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken)
    });
    return next.handle(authRequest);
  }
}

