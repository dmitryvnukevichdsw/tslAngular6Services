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
    CartService.prototype.getCartTotalPrice = /**
     * @return {?}
     */
    function () {
        return this.getCartItems().reduce(function (result, cartItem) { return result += cartItem.price; }, 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyLyIsInNvdXJjZXMiOlsibGliL2NhcnQvY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBR25FLHFCQUFNLG1CQUFtQixHQUFHLGFBQWEsQ0FBQzs7SUFJeEMscUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixFQUFFLElBQUksRUFBRSxDQUFDO0tBQzlEOzs7O0lBSUQsa0NBQVk7OztJQUFaO1FBQUEsaUJBSUM7UUFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFdBQVc7WUFDaEUsTUFBTSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRCxDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksYUFBYTtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ25EOzs7OztJQUVELG9DQUFjOzs7O0lBQWQsVUFBZSxhQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxVQUFVO1lBQ25ELE1BQU0sQ0FBQyxVQUFVLEtBQUssYUFBYSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDbkQ7Ozs7SUFFRCx1Q0FBaUI7OztJQUFqQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLFFBQVEsSUFBSyxPQUFBLE1BQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxFQUF4QixDQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3RGOzs7OztJQUVELHlDQUFtQjs7OztJQUFuQixVQUFvQixhQUFhO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxhQUFhLEVBQXRCLENBQXNCLENBQUMsQ0FBQztLQUM5RDs7OztJQUVPLGtEQUE0Qjs7OztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBR3ZELGdEQUEwQjs7OztjQUFDLEtBQUs7UUFDdEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztnQkF4Q3BFLFVBQVU7Ozs7Z0JBTEgsa0JBQWtCOztzQkFEMUI7O1NBT2EsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2F0YWxvZ0RhdGFTZXJ2aWNlfSBmcm9tICcuLi9jYXRhbG9nL2NhdGFsb2ctZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7Q2F0YWxvZ0l0ZW19IGZyb20gJy4uL2NhdGFsb2cvQ2F0YWxvZ0l0ZW0nO1xuXG5jb25zdCBjYXJ0TG9jYWxTdG9yYWdlS2V5ID0gJ2NhcnRJdGVtSWRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXRhbG9nRGF0YVNlcnZpY2U6IENhdGFsb2dEYXRhU2VydmljZSkge1xuICAgIHRoaXMuY2FydEl0ZW1JZHMgPSB0aGlzLmdldENhcnRJdGVtc0Zyb21Mb2NhbFN0b3JhZ2UoKSB8fCBbXTtcbiAgfVxuXG4gIGNhcnRJdGVtSWRzO1xuXG4gIGdldENhcnRJdGVtcygpOiBDYXRhbG9nSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5jYXRhbG9nRGF0YVNlcnZpY2UuZ2V0Q2F0YWxvZ0RhdGEoKS5maWx0ZXIoY2F0YWxvZ0l0ZW0gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydEl0ZW1JZHMuaW5jbHVkZXMoY2F0YWxvZ0l0ZW0uaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FydEl0ZW0oY2F0YWxvZ0l0ZW1JZCkge1xuICAgIHRoaXMuY2FydEl0ZW1JZHMucHVzaChjYXRhbG9nSXRlbUlkKTtcbiAgICB0aGlzLnNldENhcnRJdGVtc1RvTG9jYWxTdG9yYWdlKHRoaXMuY2FydEl0ZW1JZHMpO1xuICB9XG5cbiAgcmVtb3ZlQ2FydEl0ZW0oY2F0YWxvZ0l0ZW1JZCkge1xuICAgIHRoaXMuY2FydEl0ZW1JZHMgPSB0aGlzLmNhcnRJdGVtSWRzLmZpbHRlcihjYXJ0SXRlbUlkID0+IHtcbiAgICAgIHJldHVybiBjYXJ0SXRlbUlkICE9PSBjYXRhbG9nSXRlbUlkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRDYXJ0SXRlbXNUb0xvY2FsU3RvcmFnZSh0aGlzLmNhcnRJdGVtSWRzKTtcbiAgfVxuXG4gIGdldENhcnRUb3RhbFByaWNlKCkge1xuICAgIHJldHVybiB0aGlzLmdldENhcnRJdGVtcygpLnJlZHVjZSgocmVzdWx0LCBjYXJ0SXRlbSkgPT4gcmVzdWx0ICs9IGNhcnRJdGVtLnByaWNlLCAwKTtcbiAgfVxuXG4gIGlzQ2F0YWxvZ0l0ZW1JbkNhcnQoY2F0YWxvZ0l0ZW1JZCkge1xuICAgIHJldHVybiB0aGlzLmNhcnRJdGVtSWRzLnNvbWUoaXRlbSA9PiBpdGVtID09PSBjYXRhbG9nSXRlbUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FydEl0ZW1zRnJvbUxvY2FsU3RvcmFnZSgpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY2FydExvY2FsU3RvcmFnZUtleSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDYXJ0SXRlbXNUb0xvY2FsU3RvcmFnZShpdGVtcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNhcnRMb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XG4gIH1cbn1cbiJdfQ==