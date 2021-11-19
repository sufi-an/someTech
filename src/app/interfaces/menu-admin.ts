export interface MenuAdmin {
    id: string ;
    parentId: string;
    title: string;
    routerLink?: string;
    hasSubMenu: boolean;
    href?: string;
    icon?: string;
    target?: string;
}
