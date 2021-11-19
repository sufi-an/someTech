import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarNotificationComponent } from './components/ui/snackbar-notification/snackbar-notification.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PhoneVerificationDialogComponent } from './lazy-component/phone-verification-dialog/phone-verification-dialog.component';
import { ConfirmDialogComponent } from './components/ui/confirm-dialog/confirm-dialog.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    SnackbarNotificationComponent,
    PhoneVerificationDialogComponent,
    ConfirmDialogComponent,
    ProductCardComponent
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
