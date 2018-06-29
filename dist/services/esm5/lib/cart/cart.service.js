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
     * @param {?} catalogItemId
     * @return {?}
     */
    CartService.prototype.isCatalogItemInCart = /**
     * @param {?} catalogItemId
     * @return {?}
     */
    function (catalogItemId) {
        return this.cartItemIds.some(function (item) { return item === catalogItemId; });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyLyIsInNvdXJjZXMiOlsibGliL2NhcnQvY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBR25FLHFCQUFNLG1CQUFtQixHQUFHLGFBQWEsQ0FBQzs7SUFJeEMscUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLElBQUksRUFBRSxDQUFDO0tBQzlEOzs7O0lBSUQsa0NBQVk7OztJQUFaO1FBQUEsaUJBTUM7UUFMQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFdBQVc7WUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFNUIsTUFBTSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRCxDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksYUFBYTtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUVELG9DQUFjOzs7O0lBQWQsVUFBZSxhQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxVQUFVO1lBQ25ELE1BQU0sQ0FBQyxVQUFVLEtBQUssYUFBYSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDbkQ7Ozs7O0lBRUQseUNBQW1COzs7O0lBQW5CLFVBQW9CLGFBQWE7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLGFBQWEsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0tBQzlEOzs7O0lBRU8sa0RBQTRCOzs7O1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHdkQsZ0RBQTBCOzs7O2NBQUMsS0FBSztRQUN0QyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O2dCQXZDcEUsVUFBVTs7OztnQkFMSCxrQkFBa0I7O3NCQUQxQjs7U0FPYSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYXRhbG9nRGF0YVNlcnZpY2V9IGZyb20gJy4uL2NhdGFsb2cvY2F0YWxvZy1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtDYXRhbG9nSXRlbX0gZnJvbSAnLi4vY2F0YWxvZy9DYXRhbG9nSXRlbSc7XG5cbmNvbnN0IGNhcnRMb2NhbFN0b3JhZ2VLZXkgPSAnY2FydEl0ZW1JZHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGFsb2dEYXRhU2VydmljZTogQ2F0YWxvZ0RhdGFTZXJ2aWNlKSB7XG4gICAgdGhpcy5jYXJ0SXRlbUlkcyA9IHRoaXMuZ2V0Q2FydEl0ZW1zRnJvbUxvY2FsU3RvcmFnZSgpIHx8IFtdO1xuICB9XG5cbiAgY2FydEl0ZW1JZHM7XG5cbiAgZ2V0Q2FydEl0ZW1zKCk6IENhdGFsb2dJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLmNhdGFsb2dEYXRhU2VydmljZS5nZXRDYXRhbG9nRGF0YSgpLmZpbHRlcihjYXRhbG9nSXRlbSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhjYXRhbG9nSXRlbS5pZCk7XG5cbiAgICAgIHJldHVybiB0aGlzLmNhcnRJdGVtSWRzLmluY2x1ZGVzKGNhdGFsb2dJdGVtLmlkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENhcnRJdGVtKGNhdGFsb2dJdGVtSWQpIHtcbiAgICB0aGlzLmNhcnRJdGVtSWRzLnB1c2goY2F0YWxvZ0l0ZW1JZCk7XG4gICAgdGhpcy5zZXRDYXJ0SXRlbXNUb0xvY2FsU3RvcmFnZSh0aGlzLmNhcnRJdGVtSWRzKTtcbiAgICByZXR1cm4gdGhpcy5jYXJ0SXRlbUlkcztcbiAgfVxuXG4gIHJlbW92ZUNhcnRJdGVtKGNhdGFsb2dJdGVtSWQpIHtcbiAgICB0aGlzLmNhcnRJdGVtSWRzID0gdGhpcy5jYXJ0SXRlbUlkcy5maWx0ZXIoY2FydEl0ZW1JZCA9PiB7XG4gICAgICByZXR1cm4gY2FydEl0ZW1JZCAhPT0gY2F0YWxvZ0l0ZW1JZDtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0Q2FydEl0ZW1zVG9Mb2NhbFN0b3JhZ2UodGhpcy5jYXJ0SXRlbUlkcyk7XG4gIH1cblxuICBpc0NhdGFsb2dJdGVtSW5DYXJ0KGNhdGFsb2dJdGVtSWQpIHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0SXRlbUlkcy5zb21lKGl0ZW0gPT4gaXRlbSA9PT0gY2F0YWxvZ0l0ZW1JZCk7XG4gIH1cblxuICBwcml2YXRlIGdldENhcnRJdGVtc0Zyb21Mb2NhbFN0b3JhZ2UoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNhcnRMb2NhbFN0b3JhZ2VLZXkpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2FydEl0ZW1zVG9Mb2NhbFN0b3JhZ2UoaXRlbXMpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjYXJ0TG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xuICB9XG59XG4iXX0=