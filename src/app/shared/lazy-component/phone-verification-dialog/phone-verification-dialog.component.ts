import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SmsService } from 'src/app/services/sms.service';
import { UiService } from 'src/app/services/ui.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-phone-verification-dialog',
  templateUrl: './phone-verification-dialog.component.html',
  styleUrls: ['./phone-verification-dialog.component.scss']
})
export class PhoneVerificationDialogComponent implements OnInit {

  verificationForm: FormGroup;
  submitted = false;
  phoneNo: string;
  
  //counter
  countDown = 0;
  timeInstance = null;

  //otp
  generatedOtpCode: string;
  expireCountDown = 0;
  timeInstanceExpire = null;
  otpMatched = false;

  constructor(
    private fb:FormBuilder,
    private _uiService:UiService,
    private _smsService:SmsService,
    private _utilService:UtilsService,
    public dialogRef:MatDialogRef<PhoneVerificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.phoneNo = this.data.phoneNo;
      this.generatedOtpCode = this.data.otpCode;
      this.countOtpExpireTime(300);
      this.countResendTime(60);
    }

    this.verificationForm = this.fb.group({
      code1: ['', Validators.required],
      code2: ['', Validators.required],
      code3: ['', Validators.required],
      code4: ['', Validators.required],
      code5: ['', Validators.required],
      code6: ['', Validators.required],
    });
  }
  nextStep(event,step:number):void{
    if(this.verificationForm.valid){
      this.onSubmit();
    }
    const prevElement = document.getElementById('code' + (step - 1));
    const nextElement = document.getElementById('code' + (step + 1));
    if (event.code === 'Backspace' && event.target.value === '') {
      // event.target.parentElement.parentElement.children[step - 2 > 0 ? step - 2 : 0].children[0].value = ''
      if (prevElement) {
        prevElement.focus();
        return;
      }
    } else {
      if (nextElement) {
        nextElement.focus();
        return;
      } else {

      }
    }
  }
  paste(event) {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData.getData('text');
    this.verificationForm.setValue({
      code1: pastedText.charAt(0),
      code2: pastedText.charAt(1),
      code3: pastedText.charAt(2),
      code4: pastedText.charAt(3),
      code5: pastedText.charAt(4),
      code6: pastedText.charAt(5),
    });
    this.onSubmit();
  }

  focused(step) {
    if (step === 2) {
      if (this.verificationForm.controls.code1.value === '') {
        document.getElementById('code1').focus();
      }
    }
    if (step === 3) {
      if (this.verificationForm.controls.code1.value === '' || this.verificationForm.controls.code2.value === '') {
        document.getElementById('code2').focus();
      }
    }

    if (step === 4) {
      if (this.verificationForm.controls.code1.value === '' || this.verificationForm.controls.code2.value === '' || this.verificationForm.controls.code3.value === '') {
        document.getElementById('code3').focus();
      }
    }

    if (step === 5) {
      if (this.verificationForm.controls.code1.value === ''
        || this.verificationForm.controls.code2.value === ''
        || this.verificationForm.controls.code3.value === ''
        || this.verificationForm.controls.code4.value === ''
      ) {
        document.getElementById('code4').focus();
      }
    }

    if (step === 6) {
      if (this.verificationForm.controls.code1.value === ''
        || this.verificationForm.controls.code2.value === ''
        || this.verificationForm.controls.code3.value === ''
        || this.verificationForm.controls.code4.value === ''
        || this.verificationForm.controls.code5.value === ''
      ) {
        document.getElementById('code5').focus();
      }
    }
  }
  //subimt
  onSubmit(): void {
    this.submitted = true;
    if (this.verificationForm.invalid) {
      return;
    }
    const code = this.verificationForm.value.code1 +
      this.verificationForm.value.code2 +
      this.verificationForm.value.code3 +
      this.verificationForm.value.code4 +
      this.verificationForm.value.code5 +
      this.verificationForm.value.code6;

    this.verifyOtpCode(code);

  }
  //OPT verification
  verifyOtpCode(code: string) {
    if (this.generatedOtpCode) {
      if (code === this.generatedOtpCode) {
        this.dialogRef.close({otpMatched: true});
      } else {
        //impliment _uiservice.wrong here 
        this._uiService.warn('Your OTP code is incorrect!');
      }
    } else {
      this.dialogRef.close({otpMatched: false});
      //impliment _uiservice.wrong here 
      this._uiService.warn('Your OTP code is expired! Please try again');
    }
  }
  //resend sms
  resendLoginCode(){

  }
  ///counter functions
  countResendTime(time?) {
    const count = (num) => () => {
      this.countDown = num;
      num = num === 0 ? 0 : num - 1;
      if (num <= 0) {
        clearInterval(this.timeInstance);
        this.countDown = 0;
      }
    };

    this.timeInstance = setInterval(count(time), 1000);
  }

  countOtpExpireTime(time: number) {
    const count = (num) => () => {
      this.expireCountDown = num;
      num = num === 0 ? 0 : num - 1;
      if (num <= 0) {
        clearInterval(this.timeInstanceExpire);
        this.expireCountDown = 0;
        this.generatedOtpCode = null;
      }
    };

    this.timeInstanceExpire = setInterval(count(time), 1000);
  }

  ngOnDestroy() {
    if (this.timeInstance) {
      clearInterval(this.timeInstance);
    }

    if (this.timeInstanceExpire) {
      clearInterval(this.timeInstanceExpire);
    }

    this.otpMatched = false;
  }
}
