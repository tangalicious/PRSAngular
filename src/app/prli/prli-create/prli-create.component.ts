import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PRLI } from '../../models/PRLI';
import { PRLIService } from '../../services/PRLI.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})

export class PrliCreateComponent implements OnInit {
prli : PRLI = new PRLI (0, 0, 0, 0, 0, 1);
purchaserequestID: number;
pagetitle: string = 'Purchase Request Line Item Create';
products : Product[];

constructor(
    private sys: SystemService,
  	private PRLISvc: PRLIService,
  	private ProductSvc: ProductService,
  	private route: ActivatedRoute,
    private router: Router
    ) { }

compareFn(v1: number, v2: number): boolean {return v1 === v2;}

create(): void {
    this.prli.PurchaseRequestID = this.purchaserequestID;
    console.log(this.prli);
    this.PRLISvc.Create(this.prli)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/purchaseRequests/lines/"+this.purchaserequestID);
      });
  }
getProductsList(): void {
    this.ProductSvc.List()
      .subscribe(products => {
        this.products = products;
        console.log("Products", this.products);
      });    
  }
ngOnInit() {
  	this.route.params
  	.subscribe(parm => 
  		{this.purchaserequestID = +parm["id"];
  			this.getProductsList();
  });
  }
}

 


