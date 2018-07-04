import { NgModule } from '@angular/core';
import {CatalogDataService} from './catalog/catalog-data.service';
import {UserDataService} from './user/user-data.service';
import {CartService} from './cart/cart.service';

@NgModule({
  imports: [],
  exports: [],
  providers: [
    CatalogDataService,
    UserDataService,
    CartService,
  ]
})
export class ServicesModule { }
