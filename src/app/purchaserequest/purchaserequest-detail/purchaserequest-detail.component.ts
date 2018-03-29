import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { PurchaseRequest } from '../../models/PurchaseRequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

pagetitle: string = 'Purchase Request Detail';
purchaserequest: PurchaseRequest;
user: User[];
isHidden: boolean = true;

  constructor(
	private PurchaseReqSvc: PurchaseRequestService,
  	private route: ActivatedRoute,
    private router: Router
    ) { }

  verify():void {
    this.isHidden = false;
  }

  remove(): void {
    this.PurchaseReqSvc.Remove(this.purchaserequest)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/purchaserequests/list");
    });
}
 
  getPurchReqById(id) {
  	this.PurchaseReqSvc.Get(id)
  	.subscribe(purchaserequest => {
  		this.purchaserequest = purchaserequest;
  		console.log("Purchaserequest:", purchaserequest);
  	});
  }
  ngOnInit() {
  	this.route.params
  	.subscribe(parms => 
  		{let id = parms["id"];
  			this.getPurchReqById(id);
  }
)};
}
