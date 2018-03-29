import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { VendorService } from '../../services/vendor.service';

import { Product } from '../../models/product';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

pagetitle: string = 'Product Create';
product: Product = new Product (0, 0, "", "", 10, "Each", "", true);
vendors: Vendor[];

  constructor(       
    private ProductSvc: ProductService,
    private VendorSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

compareFn(v1: number, v2: number): boolean {return v1 === v2;}

create(): void {
    this.ProductSvc.Create(this.product)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/products/list");
    });
}

ngOnInit() {
  this.VendorSvc.List()
  .subscribe(vendors => {
      this.vendors = vendors;
      console.log("Vendors:", this.vendors);
    });
}
}
