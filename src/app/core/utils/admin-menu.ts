import { MenuAdmin } from "src/app/interfaces/menu-admin";

export const menuItemsSuperAdmin: MenuAdmin[] = [

    // Parent Dashboard
    {
      id: '1',
      title: 'Dashboard',
      icon: 'dashboard',
      hasSubMenu: false,
      parentId: null,
      routerLink: 'dashboard',
      href: null,
      target: null
    },
    {
      id: '2',
      title: 'Brand',
      icon: 'dashboard',
      hasSubMenu: false,
      parentId: null,
      routerLink: "brand",
      href: null,
      target: null
    },
    {
      id: '3',
      title: 'Product',
      icon: 'dashboard',
      hasSubMenu: false,
      parentId: null,
      routerLink: "product",
      href: null,
      target: null
    },
    


]

export const menuItemsAdmin: MenuAdmin[] = [

    // Parent Dashboard
    {
      id: '1',
      title: 'Dashboard',
      icon: 'dashboard',
      hasSubMenu: false,
      parentId: null,
      routerLink: 'dashboard',
      href: null,
      target: null
    },
    {
      id: '2',
      title: 'Brand',
      icon: 'brand',
      hasSubMenu: false,
      parentId: null,
      routerLink: null,
      href: null,
      target: null
    },
    

]
export const menuItemsEditor: MenuAdmin[] = [

    // Parent Dashboard
    {
      id: '1',
      title: 'Dashboard',
      icon: 'dashboard',
      hasSubMenu: false,
      parentId: null,
      routerLink: 'dashboard',
      href: null,
      target: null
    },
    {
      id: '2',
      title: 'Brand',
      icon: 'dashboard',
      hasSubMenu: false,
      parentId: null,
      routerLink: null,
      href: null,
      target: null
    },

]