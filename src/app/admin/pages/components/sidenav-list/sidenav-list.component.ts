import { Component, Input, OnInit } from '@angular/core';
import { MenuAdmin } from 'src/app/interfaces/menu-admin';
import { MenuCtrService } from 'src/app/services/menu-ctr.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

 
  @Input() menuItems: MenuAdmin[];
  @Input() menuParentId: string = null;

  parentMenu: MenuAdmin[] = [];


  constructor(
    private menuCtrService: MenuCtrService
  ) {
  }

  ngOnInit() {
    this.parentMenu = this.menuItems.filter(item => item.parentId === this.menuParentId);
    console.log(this.parentMenu)
  }

  onClick(menuId) {
    this.menuCtrService.toggleMenuItemAdmin(menuId);
    this.menuCtrService.closeOtherSubMenusAdmin(this.menuItems, menuId);
  }

}
