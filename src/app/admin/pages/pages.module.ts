import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
/* import { TilesComponent } from './components/tiles/tiles.component';
import { InfoCardsComponent } from './components/info-cards/info-cards.component'; */


@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    SidenavListComponent,
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    
  ]
})
export class PagesModule { }
