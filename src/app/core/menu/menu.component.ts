import { Component, OnInit } from '@angular/core';
import { NavItems } from 'src/app/interfaces/nav-items';

import { navitems } from '../utils/nav-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navItems: NavItems[];
  
  
  
  constructor(
    
  ) { }
  ngOnInit(): void {
    this.navItems=navitems
    console.log(navitems)
    //navitem contains all menu data
  }
  /*  */
  
/*  */
}
