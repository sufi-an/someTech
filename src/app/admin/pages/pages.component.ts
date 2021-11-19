import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { menuItemsAdmin, menuItemsEditor, menuItemsSuperAdmin } from 'src/app/core/utils/admin-menu';
import { AdminRoleEnum } from 'src/app/enum/AdminRoleEnum';
import { MenuAdmin } from 'src/app/interfaces/menu-admin';
import { AdminService } from 'src/app/services/admin.service';
import { MenuCtrService } from 'src/app/services/menu-ctr.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

 
  @Output() @ViewChild('sidenav', {static: true}) sidenav;
  @Input() isAdminMenu = false;
  @Input() sideNavMenuList: any[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        return result.matches;
      })
    );

  isMidDevice$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Medium)
    .pipe(
      map(result => {
        return result.matches;
      })
    );

  // Store Data
  menuList: MenuAdmin[] = [];


  constructor(
    private breakpointObserver: BreakpointObserver,
    private meta: Meta,
    private menuCtrService: MenuCtrService,
    private router: Router,
    private adminService: AdminService,
  ) {
  }

  ngOnInit() {
    // Google No Index
    this.googleNoIndex();

    const role = this.adminService.getAdminRole();
    switch (role) {
      case AdminRoleEnum.SUPER_ADMIN: {
        this.menuList = menuItemsSuperAdmin;
        break;
      }
      case AdminRoleEnum.ADMIN: {
        this.menuList = menuItemsAdmin;
        break;
      }
      case AdminRoleEnum.EDITOR: {
        this.menuList = menuItemsEditor;
        break;
      }
      default: {
        this.menuList = [];
        break;
      }
    }
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (window.innerWidth <= 599) {
          this.sidenav.close();
        }
      }
    });
    this.menuCtrService.expandActiveSubMenuAdmin(this.menuList);
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
