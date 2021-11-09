import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MenuItemComponent } from './menu-item/menu-item.component';


@NgModule({
  declarations: [MenuComponent, MenuItemComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }
