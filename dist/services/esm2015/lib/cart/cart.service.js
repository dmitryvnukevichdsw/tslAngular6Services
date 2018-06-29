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
     * @return {?}
     */
    getCartTotalPrice() {
        return this.getCartItems().reduce((result, cartItem) => result += cartItem.price, 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyLyIsInNvdXJjZXMiOlsibGliL2NhcnQvY2FydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBR25FLHVCQUFNLG1CQUFtQixHQUFHLGFBQWEsQ0FBQztBQUcxQyxNQUFNOzs7O0lBQ0osWUFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDOUQ7Ozs7SUFJRCxZQUFZO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRCxDQUFDLENBQUM7S0FDSjs7Ozs7SUFFRCxXQUFXLENBQUMsYUFBYTtRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ25EOzs7OztJQUVELGNBQWMsQ0FBQyxhQUFhO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEQsTUFBTSxDQUFDLFVBQVUsS0FBSyxhQUFhLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNuRDs7OztJQUVELGlCQUFpQjtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdEY7Ozs7O0lBRUQsbUJBQW1CLENBQUMsYUFBYTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLENBQUM7S0FDOUQ7Ozs7SUFFTyw0QkFBNEI7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUd2RCwwQkFBMEIsQ0FBQyxLQUFLO1FBQ3RDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7O1lBeENwRSxVQUFVOzs7O1lBTEgsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYXRhbG9nRGF0YVNlcnZpY2V9IGZyb20gJy4uL2NhdGFsb2cvY2F0YWxvZy1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtDYXRhbG9nSXRlbX0gZnJvbSAnLi4vY2F0YWxvZy9DYXRhbG9nSXRlbSc7XG5cbmNvbnN0IGNhcnRMb2NhbFN0b3JhZ2VLZXkgPSAnY2FydEl0ZW1JZHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhdGFsb2dEYXRhU2VydmljZTogQ2F0YWxvZ0RhdGFTZXJ2aWNlKSB7XG4gICAgdGhpcy5jYXJ0SXRlbUlkcyA9IHRoaXMuZ2V0Q2FydEl0ZW1zRnJvbUxvY2FsU3RvcmFnZSgpIHx8IFtdO1xuICB9XG5cbiAgY2FydEl0ZW1JZHM7XG5cbiAgZ2V0Q2FydEl0ZW1zKCk6IENhdGFsb2dJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLmNhdGFsb2dEYXRhU2VydmljZS5nZXRDYXRhbG9nRGF0YSgpLmZpbHRlcihjYXRhbG9nSXRlbSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0SXRlbUlkcy5pbmNsdWRlcyhjYXRhbG9nSXRlbS5pZCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDYXJ0SXRlbShjYXRhbG9nSXRlbUlkKSB7XG4gICAgdGhpcy5jYXJ0SXRlbUlkcy5wdXNoKGNhdGFsb2dJdGVtSWQpO1xuICAgIHRoaXMuc2V0Q2FydEl0ZW1zVG9Mb2NhbFN0b3JhZ2UodGhpcy5jYXJ0SXRlbUlkcyk7XG4gIH1cblxuICByZW1vdmVDYXJ0SXRlbShjYXRhbG9nSXRlbUlkKSB7XG4gICAgdGhpcy5jYXJ0SXRlbUlkcyA9IHRoaXMuY2FydEl0ZW1JZHMuZmlsdGVyKGNhcnRJdGVtSWQgPT4ge1xuICAgICAgcmV0dXJuIGNhcnRJdGVtSWQgIT09IGNhdGFsb2dJdGVtSWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldENhcnRJdGVtc1RvTG9jYWxTdG9yYWdlKHRoaXMuY2FydEl0ZW1JZHMpO1xuICB9XG5cbiAgZ2V0Q2FydFRvdGFsUHJpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FydEl0ZW1zKCkucmVkdWNlKChyZXN1bHQsIGNhcnRJdGVtKSA9PiByZXN1bHQgKz0gY2FydEl0ZW0ucHJpY2UsIDApO1xuICB9XG5cbiAgaXNDYXRhbG9nSXRlbUluQ2FydChjYXRhbG9nSXRlbUlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FydEl0ZW1JZHMuc29tZShpdGVtID0+IGl0ZW0gPT09IGNhdGFsb2dJdGVtSWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYXJ0SXRlbXNGcm9tTG9jYWxTdG9yYWdlKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjYXJ0TG9jYWxTdG9yYWdlS2V5KSk7XG4gIH1cblxuICBwcml2YXRlIHNldENhcnRJdGVtc1RvTG9jYWxTdG9yYWdlKGl0ZW1zKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY2FydExvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgfVxufVxuIl19