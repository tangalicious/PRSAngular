import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {

pagetitle: string = 'Purchase Request Change';
purchaserequest: PurchaseRequest;
users: User[];

  constructor(
  	private PurchaseReqSvc: PurchaseRequestService,
  	private UserSvc: UserService,
  	private route: ActivatedRoute,
    private router: Router
    ) { }

  compareFn(v1: number, v2: number): boolean {return v1 === v2;}

change(): void {
    this.PurchaseReqSvc.Change(this.purchaserequest)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/purchaserequests/list");
    });
}
getPurchaseRequestById(id) {
    this.PurchaseReqSvc.Get(id)
    .subscribe(purchaserequest => {
      this.purchaserequest = purchaserequest;
      console.log("Purchaserequest:", purchaserequest);
    });
 }

ngOnInit() {
  this.UserSvc.List()
  .subscribe(users => {
  		this.users = users;
  		console.log("User:", users);
  	});
  
  	this.route.params
  	.subscribe(parms => 
  		{let id = parms["id"];
  			this.getPurchaseRequestById(id);
  });
}
}

