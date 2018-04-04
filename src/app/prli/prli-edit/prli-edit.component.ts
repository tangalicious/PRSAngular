import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PRLI } from '../../models/PRLI';
import { PRLIService } from '../../services/PRLI.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-prli-edit',
  templateUrl: './prli-edit.component.html',
  styleUrls: ['./prli-edit.component.css']
})

export class PrliEditComponent implements OnInit {
prli : PRLI;
pagetitle: string = 'Purchase Request Line Item Change';
purchaserequest: PurchaseRequest;
products : Product[];


constructor(
  	private PurchaseReqSvc: PurchaseRequestService,
  	private PRLISvc: PRLIService,
  	private ProductSvc: ProductService,
  	private route: ActivatedRoute,
    private router: Router
  	) { }
 
compareFn(v1: number, v2: number): boolean {return v1 === v2;}

change(): void {
    this.PRLISvc.Change(this.prli)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/prlis/list");
    });
}

getPRLIById(id) {
    this.PRLISvc.Get(id)
    .subscribe(prli => {
      this.prli = prli;
      console.log("PRLI:", prli);
    });
 }

ngOnInit() {
	this.route.params
  	.subscribe(parms => 
  		{let id = parms["id"];
  			this.getPRLIById(id);
  });
}
}



 


