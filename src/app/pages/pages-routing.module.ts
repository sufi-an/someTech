import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {
        path:'',
        loadChildren:()=> import('./home/home.module').then(m => m.HomeModule),
        //data:{preload : true,delay:false}
      },
      {
        path:'registration',
        loadChildren:()=> import('./user/registration/registration.module').then(m => m.RegistrationModule),
        //data:{preload : true,delay:false}
      },
      {
        path:'login',
        loadChildren:()=> import('./user/login/login.module').then(m => m.LoginModule),
        //data:{preload : true,delay:false}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
