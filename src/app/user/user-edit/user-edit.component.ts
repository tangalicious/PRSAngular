import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
pagetitle: string = 'User Edit';

user: User;

  constructor(
  	private UserSvc: UserService,
	  private route: ActivatedRoute,
    private router: Router
	) { }

change(): void {
    this.UserSvc.Change(this.user)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/users/list");
    });
}
 
  getUserById(id) {
  	this.UserSvc.Get(id)
  	.subscribe(user => {
  		this.user = user;
  		console.log("User:", user);
  	});
  }

  ngOnInit() {
  	this.route.params
  	.subscribe(parms => 
  		{let id = parms["id"];
  			this.getUserById(id);
  }
)};
}





