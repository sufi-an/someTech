import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { ExtendedModule } from '@angular/flex-layout';
import { PhoneVerificationDialogComponent } from './phone-verification-dialog.component';



@NgModule({
  declarations: [PhoneVerificationDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ExtendedModule,
    
  ]
})
export class PhoneVerificationDialogModule { }
