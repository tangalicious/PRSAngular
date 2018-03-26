import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pagetitle: string = 'Product Edit';
product: Product;

  constructor(  	
  	private ProductSvc: ProductService,
  	private route: ActivatedRoute,
    private router: Router
    ) { }

  change(): void {
    this.ProductSvc.Change(this.product)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/products/list");
    });
}
 
  getVendorById(id) {
  	this.ProductSvc.Get(id)
  	.subscribe(product => {
  		this.product = product;
  		console.log("Product:", product);
  	});
  }
  ngOnInit() {
  	this.route.params
  	.subscribe(parms => 
  		{let id = parms["id"];
  			this.getVendorById(id);
  }
)};
}
