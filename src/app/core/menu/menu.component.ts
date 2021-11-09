import { Component, OnInit } from '@angular/core';

import { navitems } from '../utils/nav-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  
  
  constructor(
    
  ) { }
  ngOnInit(): void {
    console.log(navitems)
    //navitem contains all menu data
  }
  /*  */
  
/*  */
}
