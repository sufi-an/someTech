import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarNotificationComponent } from './components/ui/snackbar-notification/snackbar-notification.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PhoneVerificationDialogComponent } from './lazy-component/phone-verification-dialog/phone-verification-dialog.component';



@NgModule({
  declarations: [
    SnackbarNotificationComponent,
    PhoneVerificationDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,

  ],
  exports:[
    SnackbarNotificationComponent,
  ]
})
export class SharedModule { }
