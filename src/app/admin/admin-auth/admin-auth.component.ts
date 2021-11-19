import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { AdminService } from 'src/app/services/admin.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.scss']
})
export class AdminAuthComponent implements OnInit {
 // Reactive Form
 loginForm: FormGroup;
 username = new FormControl('', [Validators.required]);
 password = new FormControl('', [Validators.required]);

 constructor(
   private uiService: UiService,
   private adminService: AdminService,
   private meta: Meta,
   //private spinner: NgxSpinnerService,
 ) {
   this.googleNoIndex();
 }

 ngOnInit(): void {
   // Main reactive form..
   this.loginForm = new FormGroup({
     username: this.username,
     password: this.password
   });

 }

 // Main Login Method..
 onLogin() {
   if (this.loginForm.invalid) {
     this.uiService.wrong('Invalid Input field!');
     return;
   }
   // Spinner..
   //this.spinner.show();
   // Form Data..
   const username = this.loginForm.value.username.trim().toLowerCase();
   const password = this.loginForm.value.password;

   const data = {username, password};


   this.adminService.adminLogin(data);
 }



 /**
  * SEO TITLE
  * SEO META TAGS
  */

 private googleNoIndex() {
   this.meta.updateTag({name: 'robots', content: 'noindex'});
   this.meta.updateTag({name: 'googlebot', content: 'noindex'});
 }


}
