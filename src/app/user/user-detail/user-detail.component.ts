import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  pagetitle: string = "User Detail"
	user: User;

  constructor(
  	private UserSvc: UserService,
	  private route: ActivatedRoute,
    private router: Router
  	) { }

remove(): void {
    this.UserSvc.Remove(this.user)
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
  });
  }
}



