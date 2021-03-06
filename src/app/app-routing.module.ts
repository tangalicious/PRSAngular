import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user/user-list/user-list.component'
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { MenuComponent} from './support/menu/menu.component';
import { Menu} from './support/menu/menu';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';
import { ContactusComponent } from './support/contactus/contactus.component';
import { HelpComponent } from './support/help/help.component';
import { VendorService} from './services/vendor.service';
import { Vendor } from './models/vendor';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

import { PurchaseRequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestDetailComponent } from './purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestCreateComponent } from './purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestEditComponent } from './purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestLineItemsComponent } from './purchaserequest/purchaserequest-lineitems/purchaserequest-lineitems.component';
import { PurchaseRequestReviewComponent } from './purchaserequest/purchaserequest-review/purchaserequest-review.component';

import { PrliListComponent } from './prli/prli-list/prli-list.component';
import { PrliDetailComponent } from './prli/prli-detail/prli-detail.component';
import { PrliEditComponent } from './prli/prli-edit/prli-edit.component';
import { PrliCreateComponent } from './prli/prli-create/prli-create.component';

const routes: Routes = [
{path: "", redirectTo: "/home", pathMatch: "full"}, 
{ path: "users/detail/:id", component: UserDetailComponent},
{ path: "users/edit/:id", component: UserEditComponent},
{ path: "users/list", component: UserListComponent}, 
{ path: "users/create", component: UserCreateComponent},
{ path: "users/login", component: UserLoginComponent },

{ path: "vendors/detail/:id", component: VendorDetailComponent},
{ path: "vendors/edit/:id", component: VendorEditComponent},
{ path: "vendors/list", component: VendorListComponent},
{ path: "vendors/create", component: VendorCreateComponent},

{ path: "products/detail/:id", component: ProductDetailComponent},
{ path: "products/edit/:id", component: ProductEditComponent},
{ path: "products/list", component: ProductListComponent},
{ path: "products/create", component: ProductCreateComponent},

{ path: "purchaserequests/detail/:id", component: PurchaseRequestDetailComponent},
{ path: "purchaserequests/edit/:id", component: PurchaseRequestEditComponent},
{ path: "purchaserequests/list", component: PurchaseRequestListComponent},
{ path: "purchaserequests/lineitems/:id", component: PurchaseRequestLineItemsComponent},
{ path: "purchaserequests/review", component: PurchaseRequestReviewComponent},
{ path: "purchaserequests/create", component: PurchaseRequestCreateComponent},

{ path: "prlis/detail/:id", component: PrliDetailComponent},
{ path: "prlis/edit/:id", component: PrliEditComponent}, 
{ path: "prlis/list", component: PrliListComponent},
{ path: "prlis/create", component: PrliCreateComponent},

{ path: "contactus", component: ContactusComponent }, 
{ path: "help", component: HelpComponent }, 
{ path: "home", component: HomeComponent }, 
{ path: "about", component: AboutComponent}, 
{ path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
