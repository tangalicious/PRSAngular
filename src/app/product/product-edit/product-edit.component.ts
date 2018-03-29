import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { VendorService } from '../../services/vendor.service';

import { Product } from '../../models/product';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {

pagetitle: string = 'Product Change';
product: Product;
vendors: Vendor[];

  constructor( 	  	
  	private ProductSvc: ProductService,
    private VendorSvc: VendorService,
  	private route: ActivatedRoute,
    private router: Router
    ) { }
compareFn(v1: number, v2: number): boolean {return v1 === v2;}

change(): void {
    this.ProductSvc.Change(this.product)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/products/list");
    });
}
getProductById(id) {
    this.ProductSvc.Get(id)
    .subscribe(product => {
      this.product = product;
      console.log("Product:", product);
    });
 }

ngOnInit() {
  this.VendorSvc.List()
  .subscribe(vendors => {
  		this.vendors = vendors;
  		console.log("Vendor:", vendors);
  	});
  
  
  	this.route.params
  	.subscribe(parms => 
  		{let id = parms["id"];
  			this.getProductById(id);
  });
}
}

