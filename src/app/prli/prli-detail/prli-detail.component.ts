import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PRLI } from '../../models/PRLI';
import { PRLIService } from '../../services/PRLI.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-prli-detail',
  templateUrl: './prli-detail.component.html',
  styleUrls: ['./prli-detail.component.css']
})
export class PrliDetailComponent implements OnInit {
prli : PRLI;
pagetitle: string = 'Purchase Request Line Item Change';
purchaserequest: PurchaseRequest;
products : Product[];
isHidden: boolean = true;

  constructor(
  	private PurchaseReqSvc: PurchaseRequestService,
	  private PRLISvc: PRLIService,
  	private ProductSvc: ProductService,
  	private route: ActivatedRoute,
    private router: Router
    ) { }

verify():void {
    this.isHidden = false;
  }

 remove(): void {
    this.PRLISvc.Remove(this.prli)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/prlis/list");
    });
}

  getPRLIById(id) {
  	this.PRLISvc.Get(id)
  	.subscribe(prli => {
  		this.prli = prli;
  		console.log("Purchase Request Line Item:", prli);
  	});
	}
ngOnInit() {
  	 	this.route.params
  	.subscribe(parms => 
  		{let id = parms["id"];
  			this.getPRLIById(id);
  });
}

