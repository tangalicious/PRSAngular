import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Menu } from './menu';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string;
   loggedInUser: User;

menuItems: Menu[] = [
  new Menu ("Purchase Request System (PRS)", "", "", true),
	new Menu("Home", "/home", "The Home page", true),
	new Menu ("About", "/about", "The About page", true),
  new Menu ("Users", "/users/list", "The User list display", true),
  new Menu ("Vendors", "/vendors/list", "The Vendor list display", true),
  new Menu ("Products", "/products/list", "The Product list display", true),
  new Menu ("Requests", "/purchaserequests/list", "The Purchase Request list display", true),
  new Menu ("Review", "/purchaserequests/review", "The Purchase Request review display", true),
	new Menu ("Contact Us","/contactus", "The Contact Us page", true),
	new Menu ("Help", "/help", "The Help page", true),
  new Menu ("Log-in", "/users/login", "The Log-in page", true)
];

  constructor(
 private sys: SystemService,
    ) { }

  ngOnInit() {
  /*  this.sys.loggedInUser
    .subscribe(user => this.loggedInUser = user);
  }*/

}
