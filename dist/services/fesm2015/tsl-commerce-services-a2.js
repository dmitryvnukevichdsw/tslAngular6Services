import { Injectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ catalogData = [
    {
        id: 1,
        name: 'Cool shoes',
        price: 22.99,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
        id: 2,
        name: 'Nice shoes',
        price: 29.99,
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
        id: 3,
        name: 'Super shoes',
        price: 59.99,
        description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CatalogDataService {
    constructor() { }
    /**
     * @return {?}
     */
    getCatalogData() {
        return catalogData;
    }
}
CatalogDataService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CatalogDataService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ userData = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UserDataService {
    constructor() { }
    /**
     * @return {?}
     */
    getUserData() {
        return userData;
    }
}
UserDataService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
UserDataService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ cartLocalStorageKey = 'cartItemIds';
class CartService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ServicesModule {
}
ServicesModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                exports: [],
                providers: [
                    CatalogDataService,
                    UserDataService,
                    CartService,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { CatalogDataService, UserDataService, CartService, ServicesModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90c2wtY29tbWVyY2Utc2VydmljZXMtYTIvbGliL2NhdGFsb2cvY2F0YWxvZy1kYXRhLW1vY2sudHMiLCJuZzovL3RzbC1jb21tZXJjZS1zZXJ2aWNlcy1hMi9saWIvY2F0YWxvZy9jYXRhbG9nLWRhdGEuc2VydmljZS50cyIsIm5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyL2xpYi91c2VyL3VzZXItZGF0YS1tb2NrLnRzIiwibmc6Ly90c2wtY29tbWVyY2Utc2VydmljZXMtYTIvbGliL3VzZXIvdXNlci1kYXRhLnNlcnZpY2UudHMiLCJuZzovL3RzbC1jb21tZXJjZS1zZXJ2aWNlcy1hMi9saWIvY2FydC9jYXJ0LnNlcnZpY2UudHMiLCJuZzovL3RzbC1jb21tZXJjZS1zZXJ2aWNlcy1hMi9saWIvc2VydmljZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYXRhbG9nRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdDb29sIHNob2VzJyxcbiAgICBwcmljZTogMjIuOTksXG4gICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0J1xuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ05pY2Ugc2hvZXMnLFxuICAgIHByaWNlOiAyOS45OSxcbiAgICBkZXNjcmlwdGlvbjogJ1V0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQnXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiAnU3VwZXIgc2hvZXMnLFxuICAgIHByaWNlOiA1OS45OSxcbiAgICBkZXNjcmlwdGlvbjogYER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxuICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bWBcbiAgfVxuXTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNhdGFsb2dEYXRhIH0gZnJvbSAnLi9jYXRhbG9nLWRhdGEtbW9jayc7XG5pbXBvcnQge0NhdGFsb2dJdGVtfSBmcm9tICcuL0NhdGFsb2dJdGVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhdGFsb2dEYXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0Q2F0YWxvZ0RhdGEoKTogQ2F0YWxvZ0l0ZW1bXSB7XG4gICAgcmV0dXJuIGNhdGFsb2dEYXRhO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgdXNlckRhdGEgPSB7XG4gIGlkOiAxLFxuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQgeyB1c2VyRGF0YSB9IGZyb20gJy4vdXNlci1kYXRhLW1vY2snO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckRhdGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRVc2VyRGF0YSgpOiBVc2VyIHtcbiAgICByZXR1cm4gdXNlckRhdGE7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2F0YWxvZ0RhdGFTZXJ2aWNlfSBmcm9tICcuLi9jYXRhbG9nL2NhdGFsb2ctZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7Q2F0YWxvZ0l0ZW19IGZyb20gJy4uL2NhdGFsb2cvQ2F0YWxvZ0l0ZW0nO1xuXG5jb25zdCBjYXJ0TG9jYWxTdG9yYWdlS2V5ID0gJ2NhcnRJdGVtSWRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXRhbG9nRGF0YVNlcnZpY2U6IENhdGFsb2dEYXRhU2VydmljZSkge1xuICAgIHRoaXMuY2FydEl0ZW1JZHMgPSB0aGlzLmdldENhcnRJdGVtc0Zyb21Mb2NhbFN0b3JhZ2UoKSB8fCBbXTtcbiAgfVxuXG4gIGNhcnRJdGVtSWRzO1xuXG4gIGdldENhcnRJdGVtcygpOiBDYXRhbG9nSXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5jYXRhbG9nRGF0YVNlcnZpY2UuZ2V0Q2F0YWxvZ0RhdGEoKS5maWx0ZXIoY2F0YWxvZ0l0ZW0gPT4ge1xuICAgICAgY29uc29sZS5sb2coY2F0YWxvZ0l0ZW0uaWQpO1xuXG4gICAgICByZXR1cm4gdGhpcy5jYXJ0SXRlbUlkcy5pbmNsdWRlcyhjYXRhbG9nSXRlbS5pZCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDYXJ0SXRlbShjYXRhbG9nSXRlbUlkKSB7XG4gICAgdGhpcy5jYXJ0SXRlbUlkcy5wdXNoKGNhdGFsb2dJdGVtSWQpO1xuICAgIHRoaXMuc2V0Q2FydEl0ZW1zVG9Mb2NhbFN0b3JhZ2UodGhpcy5jYXJ0SXRlbUlkcyk7XG4gICAgcmV0dXJuIHRoaXMuY2FydEl0ZW1JZHM7XG4gIH1cblxuICByZW1vdmVDYXJ0SXRlbShjYXRhbG9nSXRlbUlkKSB7XG4gICAgdGhpcy5jYXJ0SXRlbUlkcyA9IHRoaXMuY2FydEl0ZW1JZHMuZmlsdGVyKGNhcnRJdGVtSWQgPT4ge1xuICAgICAgcmV0dXJuIGNhcnRJdGVtSWQgIT09IGNhdGFsb2dJdGVtSWQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldENhcnRJdGVtc1RvTG9jYWxTdG9yYWdlKHRoaXMuY2FydEl0ZW1JZHMpO1xuICB9XG5cbiAgaXNDYXRhbG9nSXRlbUluQ2FydChjYXRhbG9nSXRlbUlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FydEl0ZW1JZHMuc29tZShpdGVtID0+IGl0ZW0gPT09IGNhdGFsb2dJdGVtSWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYXJ0SXRlbXNGcm9tTG9jYWxTdG9yYWdlKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjYXJ0TG9jYWxTdG9yYWdlS2V5KSk7XG4gIH1cblxuICBwcml2YXRlIHNldENhcnRJdGVtc1RvTG9jYWxTdG9yYWdlKGl0ZW1zKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY2FydExvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2F0YWxvZ0RhdGFTZXJ2aWNlfSBmcm9tICcuL2NhdGFsb2cvY2F0YWxvZy1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyRGF0YVNlcnZpY2V9IGZyb20gJy4vdXNlci91c2VyLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge0NhcnRTZXJ2aWNlfSBmcm9tICcuL2NhcnQvY2FydC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDYXRhbG9nRGF0YVNlcnZpY2UsXG4gICAgVXNlckRhdGFTZXJ2aWNlLFxuICAgIENhcnRTZXJ2aWNlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sdUJBQU0sV0FBVyxHQUFH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