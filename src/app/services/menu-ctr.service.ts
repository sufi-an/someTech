import { Injectable } from '@angular/core';
import { MenuAdmin } from '../interfaces/menu-admin';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class MenuCtrService {

  constructor(
    private location: Location
  ) { }
  public expandActiveSubMenuAdmin(menu: MenuAdmin[]) {
    const url = this.location.path();
    const routerLink = decodeURIComponent(url);
    const activeMenuItem = menu.filter(item => {
      return `/admin/${item.routerLink}` === routerLink;
    });
    if (activeMenuItem[0]) {
      let menuItem = activeMenuItem[0];
      while (menuItem.parentId !== null) {
        menuItem = menu.filter(item => item.id === menuItem.parentId)[0];
        this.toggleMenuItemAdmin(menuItem.id);
      }
    }
  }
  public toggleMenuItemAdmin(menuId) {
    const menuItem = document.getElementById('menu-item-admin-' + menuId);
    const subMenu = document.getElementById('sub-menu-admin-' + menuId);
    if (subMenu) {
      if (subMenu.classList.contains('show')) {
        subMenu.classList.remove('show');
        menuItem.classList.remove('expanded');
      } else {
        subMenu.classList.add('show');
        menuItem.classList.add('expanded');
      }
    }
  }
  public closeOtherSubMenusAdmin(menu: any[], menuId) {
    const currentMenuItem = menu.filter(item => item.id === menuId)[0];
    menu.forEach(item => {
      if (
        (item.id !== menuId && item.parentId === currentMenuItem.parentId) ||
        (currentMenuItem.parentId === null && item.id !== menuId)
      ) {
        const subMenu = document.getElementById('sub-menu-admin-' + item.id);
        const menuItem = document.getElementById('menu-item-admin-' + item.id);
        if (subMenu) {
          if (subMenu.classList.contains('show')) {
            subMenu.classList.remove('show');
            menuItem.classList.remove('expanded');
          }
        }
      }
    });
  }
}
