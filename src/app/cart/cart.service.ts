import { Injectable } from '@angular/core';
import {CatalogDataService} from '../catalog/catalog-data.service';
import {CatalogItem} from '../catalog/CatalogItem';

const cartLocalStorageKey = 'cartItemIds';

@Injectable()
export class CartService {
  constructor(private catalogDataService: CatalogDataService) {
    this.cartItemIds = this.getCartItemsFromLocalStorage() || [];
  }

  cartItemIds;

  getCartItems(): CatalogItem[] {
    return this.catalogDataService.getCatalogData().filter(catalogItem => {
      return this.cartItemIds.includes(catalogItem.id);
    });
  }

  addCartItem(catalogItemId) {
    this.cartItemIds.push(catalogItemId);
    this.setCartItemsToLocalStorage(this.cartItemIds);
  }

  removeCartItem(catalogItemId) {
    this.cartItemIds = this.cartItemIds.filter(cartItemId => {
      return cartItemId !== catalogItemId;
    });

    this.setCartItemsToLocalStorage(this.cartItemIds);
  }

  getCartTotalPrice() {
    return this.getCartItems().reduce((result, cartItem) => result += cartItem.price, 0);
  }

  isCatalogItemInCart(catalogItemId) {
    return this.cartItemIds.some(item => item === catalogItemId);
  }

  private getCartItemsFromLocalStorage(): number[] {
    return JSON.parse(localStorage.getItem(cartLocalStorageKey));
  }

  private setCartItemsToLocalStorage(items) {
    localStorage.setItem(cartLocalStorageKey, JSON.stringify(items));
  }
}
