import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }
  private getUserData() {
    this.adminService.getAdminShortData()
      .subscribe(res => {
      });
  }

}
