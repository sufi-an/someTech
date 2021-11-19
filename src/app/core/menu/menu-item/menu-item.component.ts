import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NavItems} from '../../../interfaces/nav-items';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItems[]|null;
  @ViewChild('childMenu', {static: true}) public childMenu;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}
//solution ref
//https://stackoverflow.com/questions/51548225/error-error-mat-menu-trigger-must-pass-in-an-mat-menu-instance