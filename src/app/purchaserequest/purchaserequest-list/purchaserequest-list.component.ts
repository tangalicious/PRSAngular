import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService} from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

  pagetitle: string = "Purchase Request List";
  purchaserequests: PurchaseRequest[];

  constructor(
    private PurchaseReqSvc: PurchaseRequestService
     ) { }

  ngOnInit() {
  	this.PurchaseReqSvc.List()
  	.subscribe(purchaserequests => {
  		console.log(purchaserequests);
      this.purchaserequests = purchaserequests;
  	})
  }
}