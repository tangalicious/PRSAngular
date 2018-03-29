import { Component, OnInit } from '@angular/core';

import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

menuItems: Menu[] = [
	new Menu("Home", "/home", "The Home page", true),
	new Menu ("About", "/about", "The About page", true),
  new Menu ("Users", "/users/list", "The User list display", true),
  new Menu ("Vendors", "/vendors/list", "The Vendor list display", true),
  new Menu ("Products", "/products/list", "The Product list display", true),
  new Menu ("Purchase Requests", "/purchaserequests/list", "The Purchase Request list display", true),
  new Menu ("Purchase Requests Line Item", "/prlis/list", "The Purchase Request Line Item list display", true),
	new Menu ("Contact Us","/contactus", "The Contact Us page", true),
	new Menu ("Help", "/help", "The Help page", true)
];

  constructor() { }

  ngOnInit() {
  }

}
