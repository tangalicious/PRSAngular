import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequest } from '../../models/PurchaseRequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PRLI } from '../../models/PRLI';
import { PRLIService } from '../../services/PRLI.service';


@Component({
  selector: 'app-purchaserequest-lineitems',
  templateUrl: './purchaserequest-lineitems.component.html',
  styleUrls: ['./purchaserequest-lineitems.component.css']
})
export class PurchaseRequestLineItemsComponent implements OnInit {

pagetitle: string = "Purchase Request List";
pagetitle2: string = "Purchase Request Line Item List";
purchaserequest: PurchaseRequest;

isHidden: boolean = true;
  constructor(
  	private PurchaseReqSvc: PurchaseRequestService,
    private PRLISvc: PRLIService,
  	private route: ActivatedRoute,
    private router: Router
    ) { }

  review (): void {
    this.purchaserequest.Status = (this.purchaserequest.Total <= 50)? "APPROVED" : "REVIEW";
    this.PurchaseReqSvc.Change(this.purchaserequest)
    .subscribe(res => {
      console.log(res);
    this.router.navigateByUrl("/purchaserequests/list")
  });
  }

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

