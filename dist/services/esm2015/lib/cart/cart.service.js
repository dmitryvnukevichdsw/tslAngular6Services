/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CatalogDataService } from '../catalog/catalog-data.service';
const /** @type {?} */ cartLocalStorageKey = 'cartItemIds';
export class CartService {
    /**
     * @param {?} catalogDataService
     */
    constructor(catalogDataService) {
        this.catalogDataService = catalogDataService;
        this.cartItemIds = this.getCartItemsFromLocalStorage() || [];
    }
    /**
     * @return {?}
     */
    getCartItems() {
        return this.catalogDataService.getCatalogData().filter(catalogItem => {
            console.log(catalogItem.id);
            return this.cartItemIds.includes(catalogItem.id);
        });
    }
    /**
     * @param {?} catalogItemId
     * @return {?}
     */
    addCartItem(catalogItemId) {
        this.cartItemIds.push(catalogItemId);
        this.setCartItemsToLocalStorage(this.cartItemIds);
        return this.cartItemIds;
    }
    /**
     * @param {?} catalogItemId
     * @return {?}
     */
    removeCartItem(catalogItemId) {
        this.cartItemIds = this.cartItemIds.filter(cartItemId => {
            return cartItemId !== catalogItemId;
        });
        this.setCartItemsToLocalStorage(this.cartItemIds);
    }
    /**
     * @param {?} catalogItemId
     * @return {?}
     */
    isCatalogItemInCart(catalogItemId) {
        return this.cartItemIds.some(item => item === catalogItemId);
    }
    /**
     * @return {?}
     */
    getCartItemsFromLocalStorage() {
        return JSON.parse(localStorage.getItem(cartLocalStorageKey));
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setCartItemsToLocalStorage(items) {
        localStorage.setItem(cartLocalStorageKey, JSON.stringify(items));
    }
}
CartService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CartService.ctorParameters = () => [
    { type: CatalogDataService }
];
function CartService_tsickle_Closure_declarations() {
    /** @type {?} */
    CartService.prototype.cartItemIds;
    /** @type {?} */
    CartService.prototype.catalogDataService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyLyIsInNvdXJjZXMiOlsibGliL2NhcnQvY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBR25FLHVCQUFNLG1CQUFtQixHQUFHLGFBQWEsQ0FBQztBQUcxQyxNQUFNOzs7O0lBQ0osWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDOUQ7Ozs7SUFJRCxZQUFZO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRCxDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCxXQUFXLENBQUMsYUFBYTtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUVELGNBQWMsQ0FBQyxhQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEQsTUFBTSxDQUFDLFVBQVUsS0FBSyxhQUFhLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNuRDs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxhQUFhO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsQ0FBQztLQUM5RDs7OztJQUVPLDRCQUE0QjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBR3ZELDBCQUEwQixDQUFDLEtBQUs7UUFDdEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7WUF2Q3BFLFVBQVU7Ozs7WUFMSCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhdGFsb2dEYXRhU2VydmljZX0gZnJvbSAnLi4vY2F0YWxvZy9jYXRhbG9nLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge0NhdGFsb2dJdGVtfSBmcm9tICcuLi9jYXRhbG9nL0NhdGFsb2dJdGVtJztcblxuY29uc3QgY2FydExvY2FsU3RvcmFnZUtleSA9ICdjYXJ0SXRlbUlkcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2F0YWxvZ0RhdGFTZXJ2aWNlOiBDYXRhbG9nRGF0YVNlcnZpY2UpIHtcbiAgICB0aGlzLmNhcnRJdGVtSWRzID0gdGhpcy5nZXRDYXJ0SXRlbXNGcm9tTG9jYWxTdG9yYWdlKCkgfHwgW107XG4gIH1cblxuICBjYXJ0SXRlbUlkcztcblxuICBnZXRDYXJ0SXRlbXMoKTogQ2F0YWxvZ0l0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0YWxvZ0RhdGFTZXJ2aWNlLmdldENhdGFsb2dEYXRhKCkuZmlsdGVyKGNhdGFsb2dJdGVtID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGNhdGFsb2dJdGVtLmlkKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY2FydEl0ZW1JZHMuaW5jbHVkZXMoY2F0YWxvZ0l0ZW0uaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FydEl0ZW0oY2F0YWxvZ0l0ZW1JZCkge1xuICAgIHRoaXMuY2FydEl0ZW1JZHMucHVzaChjYXRhbG9nSXRlbUlkKTtcbiAgICB0aGlzLnNldENhcnRJdGVtc1RvTG9jYWxTdG9yYWdlKHRoaXMuY2FydEl0ZW1JZHMpO1xuICAgIHJldHVybiB0aGlzLmNhcnRJdGVtSWRzO1xuICB9XG5cbiAgcmVtb3ZlQ2FydEl0ZW0oY2F0YWxvZ0l0ZW1JZCkge1xuICAgIHRoaXMuY2FydEl0ZW1JZHMgPSB0aGlzLmNhcnRJdGVtSWRzLmZpbHRlcihjYXJ0SXRlbUlkID0+IHtcbiAgICAgIHJldHVybiBjYXJ0SXRlbUlkICE9PSBjYXRhbG9nSXRlbUlkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRDYXJ0SXRlbXNUb0xvY2FsU3RvcmFnZSh0aGlzLmNhcnRJdGVtSWRzKTtcbiAgfVxuXG4gIGlzQ2F0YWxvZ0l0ZW1JbkNhcnQoY2F0YWxvZ0l0ZW1JZCkge1xuICAgIHJldHVybiB0aGlzLmNhcnRJdGVtSWRzLnNvbWUoaXRlbSA9PiBpdGVtID09PSBjYXRhbG9nSXRlbUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FydEl0ZW1zRnJvbUxvY2FsU3RvcmFnZSgpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY2FydExvY2FsU3RvcmFnZUtleSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDYXJ0SXRlbXNUb0xvY2FsU3RvcmFnZShpdGVtcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNhcnRMb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XG4gIH1cbn1cbiJdfQ==