import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { User } from 'src/app/interfaces/user';
import { SmsService } from 'src/app/services/sms.service';
import { UiService } from 'src/app/services/ui.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { UtilsService } from 'src/app/services/utils.service';
import { PhoneVerificationDialogComponent } from 'src/app/shared/lazy-component/phone-verification-dialog/phone-verification-dialog.component';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  public dataForm: FormGroup;
  //OTP
  generatedOtpCode: string;
  isHiddenPass = true;
  isHiddenConPass = true;
  constructor(
    private _userService:UserServiceService,
    private fb: FormBuilder,
    private _uiService:UiService,
    private _utilsService:UtilsService,
    private _smsService:SmsService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      phoneNo: [null, Validators.required],
      email: [null, [Validators.email]],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName:[null,Validators.required],
      address:[null,Validators.required],
      gender: [null, Validators.required],
      agree: [true, Validators.required],
    });
  }
  /* 
  * ui component
  */
  public openComponentDialog(){
    console.log('inside dialog func')
    const mData={
      otpCode:this.generatedOtpCode,
      phoneNo:this.dataForm.value.phoneNo
    };

    const dialogRef = this.dialog.open(PhoneVerificationDialogComponent,{
      data: mData,
      panelClass: ['theme-dialog', 'dialog-no-radius', 'small-padding-sm'],
      width: '95%',
      maxWidth: '400px',
      autoFocus: false,
      disableClose: true,
    })
    dialogRef.afterClosed().subscribe(dialogResult=>{
      if(dialogResult.otpMatched){
        const registrationData={
          fullName: this.dataForm.value.firstName+ " " + this.dataForm.value.lastName,
          phoneNo: this.dataForm.value.phoneNo,
          email: this.dataForm.value.email,
          password:this.dataForm.value.password,
          gender:this.dataForm.value.gender,
          isPhoneVerified: true,
          registrationType: 'phone',
          isEmailVerified: false,
          hasAccess: true,
          username: this.dataForm.value.phoneNo,
        }
        this._userService.userRegistration(registrationData)
      
      }
    })
  }
    
  /* 
  * http handler
  */
 private showMessage(phoneNo:string,message:string){
   console.log("Inside Show Mcg")
   this._smsService.sendSingleSms(phoneNo,message)
   .subscribe(res=>{

     //loading and spinner impliment 
     console.log(res);
     if(res.success){
       this.openComponentDialog();
     }
   })
  //this._smsService
 }
  private checkAndGetUserByPhone(phoneNo:string){
    console.log('inside checkAndGetUserByPhone')
    this._userService.checkAndGetUserByPhone(phoneNo)
    .subscribe(res =>{
      const status=res.data;
      console.log(res.data);
      if(!status){
        this.generatedOtpCode=this._utilsService.getRandomOtpCode6();
        const finalPhone='88'+phoneNo;
        const message = this.generatedOtpCode + ' is your OTP Code';
        console.log(finalPhone+" "+message);
        this.showMessage(finalPhone, message);
      }
    },error=>{
      console.log(error)
    });
  }
  onSubmitRegister():void{
    if (this.dataForm.invalid) {
      this.dataForm.markAllAsTouched();
      this._uiService.warn('Please complete all the required field');
      return;
    }
    if (this.dataForm.value.password !== this.dataForm.value.confirmPassword) {
      this._uiService.warn('Password and confirm password not matched');
      return;
    }

    if (!this._utilsService.checkValidPhone(this.dataForm.value.phoneNo) || this.dataForm.value.phoneNo.length !== 11) {
      this.dataForm.get('phoneNo').setErrors({invalid: true});
      this._uiService.warn('Please enter a valid 11 digit phone no');
      return;
    }

    if (this.dataForm.value.password.length < 6) {
      this._uiService.warn('Password must be at lest 6 characters!');
      return;
    }

    this.checkAndGetUserByPhone(this.dataForm.value.phoneNo);
    //console.log(registrationData)
  }
}


/* 

if(this.dataForm.value.password==this.dataForm.value.confirmPassword){ 

    const registrationData={
      fullName: this.dataForm.value.firstName+ " " + this.dataForm.value.lastName,
      phoneNo: this.dataForm.value.phoneNo,
      email: this.dataForm.value.email,
      password:this.dataForm.value.password,
      gender:this.dataForm.value.gender,
      isPhoneVerified: true,
      registrationType: 'phone',
      isEmailVerified: false,
      hasAccess: true,
      username: this.dataForm.value.phoneNo,
    }
    this._userService.userRegistration(registrationData)
  }
  else{
    alert("MisMatchedPass")
  }

*/