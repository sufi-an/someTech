import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import { AddNewBrandComponent } from './add-new-brand/add-new-brand.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    BrandComponent,
    AddNewBrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    MaterialModule
  ]
})
export class BrandModule { }
