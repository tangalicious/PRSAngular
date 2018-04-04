  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PurchaseRequestService} from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PRLI } from '../../models/PRLI';
import { PRLIService } from '../../services/PRLI.service';

@Component({
  selector: 'app-prli-list',
  templateUrl: './prli-list.component.html',
  styleUrls: ['./prli-list.component.css']
})
export class PrliListComponent implements OnInit {
pagetitle: string = "Purchase Request List";
pagetitle2: string = "Purchase Request Line Item List";

prlis: PRLI[];
purchaserequests: PurchaseRequest[];

  constructor(
  	private PRLISvc: PRLIService,
  	 private PurchaseReqSvc: PurchaseRequestService
     ) { }

ngOnInit() {
  	this.PRLISvc.List()
  	.subscribe(prlis => {
  		console.log(prlis);
      this.prlis = prlis;
  	})

    this.PurchaseReqSvc.List()
    .subscribe(purchaserequests => {
      console.log(purchaserequests);
      this.purchaserequests = purchaserequests;
    })
}


  	
}