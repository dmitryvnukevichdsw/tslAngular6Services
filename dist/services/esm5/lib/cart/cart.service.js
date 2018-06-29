/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CatalogDataService } from '../catalog/catalog-data.service';
var /** @type {?} */ cartLocalStorageKey = 'cartItemIds';
var CartService = /** @class */ (function () {
    function CartService(catalogDataService) {
        this.catalogDataService = catalogDataService;
        this.cartItemIds = this.getCartItemsFromLocalStorage() || [];
    }
    /**
     * @return {?}
     */
    CartService.prototype.getCartItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.catalogDataService.getCatalogData().filter(function (catalogItem) {
            console.log(catalogItem.id);
            return _this.cartItemIds.includes(catalogItem.id);
        });
    };
    /**
     * @param {?} catalogItemId
     * @return {?}
     */
    CartService.prototype.addCartItem = /**
     * @param {?} catalogItemId
     * @return {?}
     */
    function (catalogItemId) {
        this.cartItemIds.push(catalogItemId);
        this.setCartItemsToLocalStorage(this.cartItemIds);
        return this.cartItemIds;
    };
    /**
     * @param {?} catalogItemId
     * @return {?}
     */
    CartService.prototype.removeCartItem = /**
     * @param {?} catalogItemId
     * @return {?}
     */
    function (catalogItemId) {
        this.cartItemIds = this.cartItemIds.filter(function (cartItemId) {
            return cartItemId !== catalogItemId;
        });
        this.setCartItemsToLocalStorage(this.cartItemIds);
    };
    /**
     * @return {?}
     */
    CartService.prototype.getCartItemsFromLocalStorage = /**
     * @return {?}
     */
    function () {
        return JSON.parse(localStorage.getItem(cartLocalStorageKey));
    };
    /**
     * @param {?} items
     * @return {?}
     */
    CartService.prototype.setCartItemsToLocalStorage = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        localStorage.setItem(cartLocalStorageKey, JSON.stringify(items));
    };
    CartService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CartService.ctorParameters = function () { return [
        { type: CatalogDataService }
    ]; };
    return CartService;
}());
export { CartService };
function CartService_tsickle_Closure_declarations() {
    /** @type {?} */
    CartService.prototype.cartItemIds;
    /** @type {?} */
    CartService.prototype.catalogDataService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyLyIsInNvdXJjZXMiOlsibGliL2NhcnQvY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBR25FLHFCQUFNLG1CQUFtQixHQUFHLGFBQWEsQ0FBQzs7SUFJeEMscUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLElBQUksRUFBRSxDQUFDO0tBQzlEOzs7O0lBSUQsa0NBQVk7OztJQUFaO1FBQUEsaUJBTUM7UUFMQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFdBQVc7WUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFNUIsTUFBTSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRCxDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksYUFBYTtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUVELG9DQUFjOzs7O0lBQWQsVUFBZSxhQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxVQUFVO1lBQ25ELE1BQU0sQ0FBQyxVQUFVLEtBQUssYUFBYSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDbkQ7Ozs7SUFFTyxrREFBNEI7Ozs7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUd2RCxnREFBMEI7Ozs7Y0FBQyxLQUFLO1FBQ3RDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Z0JBbkNwRSxVQUFVOzs7O2dCQUxILGtCQUFrQjs7c0JBRDFCOztTQU9hLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhdGFsb2dEYXRhU2VydmljZX0gZnJvbSAnLi4vY2F0YWxvZy9jYXRhbG9nLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge0NhdGFsb2dJdGVtfSBmcm9tICcuLi9jYXRhbG9nL0NhdGFsb2dJdGVtJztcblxuY29uc3QgY2FydExvY2FsU3RvcmFnZUtleSA9ICdjYXJ0SXRlbUlkcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2F0YWxvZ0RhdGFTZXJ2aWNlOiBDYXRhbG9nRGF0YVNlcnZpY2UpIHtcbiAgICB0aGlzLmNhcnRJdGVtSWRzID0gdGhpcy5nZXRDYXJ0SXRlbXNGcm9tTG9jYWxTdG9yYWdlKCkgfHwgW107XG4gIH1cblxuICBjYXJ0SXRlbUlkcztcblxuICBnZXRDYXJ0SXRlbXMoKTogQ2F0YWxvZ0l0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0YWxvZ0RhdGFTZXJ2aWNlLmdldENhdGFsb2dEYXRhKCkuZmlsdGVyKGNhdGFsb2dJdGVtID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGNhdGFsb2dJdGVtLmlkKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY2FydEl0ZW1JZHMuaW5jbHVkZXMoY2F0YWxvZ0l0ZW0uaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FydEl0ZW0oY2F0YWxvZ0l0ZW1JZCkge1xuICAgIHRoaXMuY2FydEl0ZW1JZHMucHVzaChjYXRhbG9nSXRlbUlkKTtcbiAgICB0aGlzLnNldENhcnRJdGVtc1RvTG9jYWxTdG9yYWdlKHRoaXMuY2FydEl0ZW1JZHMpO1xuICAgIHJldHVybiB0aGlzLmNhcnRJdGVtSWRzO1xuICB9XG5cbiAgcmVtb3ZlQ2FydEl0ZW0oY2F0YWxvZ0l0ZW1JZCkge1xuICAgIHRoaXMuY2FydEl0ZW1JZHMgPSB0aGlzLmNhcnRJdGVtSWRzLmZpbHRlcihjYXJ0SXRlbUlkID0+IHtcbiAgICAgIHJldHVybiBjYXJ0SXRlbUlkICE9PSBjYXRhbG9nSXRlbUlkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRDYXJ0SXRlbXNUb0xvY2FsU3RvcmFnZSh0aGlzLmNhcnRJdGVtSWRzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FydEl0ZW1zRnJvbUxvY2FsU3RvcmFnZSgpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY2FydExvY2FsU3RvcmFnZUtleSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDYXJ0SXRlbXNUb0xvY2FsU3RvcmFnZShpdGVtcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNhcnRMb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XG4gIH1cbn1cbiJdfQ==