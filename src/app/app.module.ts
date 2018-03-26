import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MenuComponent} from './support/menu/menu.component';
import { MenuItemComponent} from './support/menu/menu-item.component';

import { UserService } from './services/user.service';
import { VendorService } from './services/vendor.service';
import { ProductService } from './services/product.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';
import { ContactusComponent } from './support/contactus/contactus.component';
import { HelpComponent } from './support/help/help.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
     MenuItemComponent,
     ContactusComponent,
     HelpComponent,
     VendorListComponent,
     VendorDetailComponent,
     VendorCreateComponent,
     VendorEditComponent,
     ProductListComponent,
     ProductEditComponent,
     ProductDetailComponent,
     ProductCreateComponent,
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  UserService,
  VendorService,
  ProductService
  ],
  bootstrap: [
  AppComponent
  ]
})
export class AppModule { }
