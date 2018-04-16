import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';

import { Product } from '../../models/product';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {
pagetitle: string = 'Purchase Request Create';
purchaserequest: PurchaseRequest = new PurchaseRequest (0, 0, '', 'Not needed', 'Pickup', 'NEW', 0, true, '');
users: User[];         

constructor(
  	private PurchaseReqSvc: PurchaseRequestService,
  	private UserSvc: UserService,
  	private route: ActivatedRoute,
    private router: Router
    ) { }

compareFn(v1: number, v2: number): boolean {return v1 === v2;}

create(): void {
    this.PurchaseReqSvc.Create(this.purchaserequest)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/purchaserequests/list");
    });
}

ngOnInit() {
  this.UserSvc.List()
  .subscribe(users => {
  		this.users = users;
  		console.log("User:", this.users);
  	});
}
}
