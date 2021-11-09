import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UiService } from 'src/app/services/ui.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData:FormGroup
  isHiddenPass = true;
  constructor(
    private fb:FormBuilder,
    private _uiService:UiService,
    private _utilsService:UtilsService,
    private _userService:UserServiceService,
  ) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  onSubmitForm(){

    if(this.formData.invalid){
      this.formData.markAllAsTouched();
      this._uiService.warn('Please complete all the required field');
      return;
    }
    if(!this._utilsService.checkValidPhone(this.formData.value.username)){
      console.log(this.formData.value.username)
      this.formData.markAllAsTouched();
      this._uiService.warn('Please insert a valid phone number');
      return;
    }
    if (this.formData.value.password.length < 6) {
      this._uiService.warn('Password must be at lest 6 characters!');
      return;
    }
    //this.spinner.show();
    this._userService.userLogin(this.formData.value);
  }

}
