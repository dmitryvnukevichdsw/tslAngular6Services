(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('tsl-commerce-services-a2', ['exports', '@angular/core'], factory) :
    (factory((global['tsl-commerce-services-a2'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ catalogData = [
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
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CatalogDataService = (function () {
        function CatalogDataService() {
        }
        /**
         * @return {?}
         */
        CatalogDataService.prototype.getCatalogData = /**
         * @return {?}
         */
            function () {
                return catalogData;
            };
        CatalogDataService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        CatalogDataService.ctorParameters = function () { return []; };
        return CatalogDataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ userData = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe'
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var UserDataService = (function () {
        function UserDataService() {
        }
        /**
         * @return {?}
         */
        UserDataService.prototype.getUserData = /**
         * @return {?}
         */
            function () {
                return userData;
            };
        UserDataService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        UserDataService.ctorParameters = function () { return []; };
        return UserDataService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ cartLocalStorageKey = 'cartItemIds';
    var CartService = (function () {
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        CartService.ctorParameters = function () {
            return [
                { type: CatalogDataService }
            ];
        };
        return CartService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ServicesModule = (function () {
        function ServicesModule() {
        }
        ServicesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        exports: [],
                        providers: [
                            CatalogDataService,
                            UserDataService,
                            CartService,
                        ]
                    },] },
        ];
        return ServicesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.CatalogDataService = CatalogDataService;
    exports.UserDataService = UserDataService;
    exports.CartService = CartService;
    exports.ServicesModule = ServicesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyL2xpYi9jYXRhbG9nL2NhdGFsb2ctZGF0YS1tb2NrLnRzIiwibmc6Ly90c2wtY29tbWVyY2Utc2VydmljZXMtYTIvbGliL2NhdGFsb2cvY2F0YWxvZy1kYXRhLnNlcnZpY2UudHMiLCJuZzovL3RzbC1jb21tZXJjZS1zZXJ2aWNlcy1hMi9saWIvdXNlci91c2VyLWRhdGEtbW9jay50cyIsIm5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyL2xpYi91c2VyL3VzZXItZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly90c2wtY29tbWVyY2Utc2VydmljZXMtYTIvbGliL2NhcnQvY2FydC5zZXJ2aWNlLnRzIiwibmc6Ly90c2wtY29tbWVyY2Utc2VydmljZXMtYTIvbGliL3NlcnZpY2VzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2F0YWxvZ0RhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnQ29vbCBzaG9lcycsXG4gICAgcHJpY2U6IDIyLjk5LFxuICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCdcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6ICdOaWNlIHNob2VzJyxcbiAgICBwcmljZTogMjkuOTksXG4gICAgZGVzY3JpcHRpb246ICdVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0J1xuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogJ1N1cGVyIHNob2VzJyxcbiAgICBwcmljZTogNTkuOTksXG4gICAgZGVzY3JpcHRpb246IGBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci5cbiAgICAgIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW1gXG4gIH1cbl07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjYXRhbG9nRGF0YSB9IGZyb20gJy4vY2F0YWxvZy1kYXRhLW1vY2snO1xuaW1wb3J0IHtDYXRhbG9nSXRlbX0gZnJvbSAnLi9DYXRhbG9nSXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXRhbG9nRGF0YVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldENhdGFsb2dEYXRhKCk6IENhdGFsb2dJdGVtW10ge1xuICAgIHJldHVybiBjYXRhbG9nRGF0YTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHVzZXJEYXRhID0ge1xuICBpZDogMSxcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJ1xufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHsgdXNlckRhdGEgfSBmcm9tICcuL3VzZXItZGF0YS1tb2NrJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJEYXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0VXNlckRhdGEoKTogVXNlciB7XG4gICAgcmV0dXJuIHVzZXJEYXRhO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhdGFsb2dEYXRhU2VydmljZX0gZnJvbSAnLi4vY2F0YWxvZy9jYXRhbG9nLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge0NhdGFsb2dJdGVtfSBmcm9tICcuLi9jYXRhbG9nL0NhdGFsb2dJdGVtJztcblxuY29uc3QgY2FydExvY2FsU3RvcmFnZUtleSA9ICdjYXJ0SXRlbUlkcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2F0YWxvZ0RhdGFTZXJ2aWNlOiBDYXRhbG9nRGF0YVNlcnZpY2UpIHtcbiAgICB0aGlzLmNhcnRJdGVtSWRzID0gdGhpcy5nZXRDYXJ0SXRlbXNGcm9tTG9jYWxTdG9yYWdlKCkgfHwgW107XG4gIH1cblxuICBjYXJ0SXRlbUlkcztcblxuICBnZXRDYXJ0SXRlbXMoKTogQ2F0YWxvZ0l0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuY2F0YWxvZ0RhdGFTZXJ2aWNlLmdldENhdGFsb2dEYXRhKCkuZmlsdGVyKGNhdGFsb2dJdGVtID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGNhdGFsb2dJdGVtLmlkKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY2FydEl0ZW1JZHMuaW5jbHVkZXMoY2F0YWxvZ0l0ZW0uaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2FydEl0ZW0oY2F0YWxvZ0l0ZW1JZCkge1xuICAgIHRoaXMuY2FydEl0ZW1JZHMucHVzaChjYXRhbG9nSXRlbUlkKTtcbiAgICB0aGlzLnNldENhcnRJdGVtc1RvTG9jYWxTdG9yYWdlKHRoaXMuY2FydEl0ZW1JZHMpO1xuICAgIHJldHVybiB0aGlzLmNhcnRJdGVtSWRzO1xuICB9XG5cbiAgcmVtb3ZlQ2FydEl0ZW0oY2F0YWxvZ0l0ZW1JZCkge1xuICAgIHRoaXMuY2FydEl0ZW1JZHMgPSB0aGlzLmNhcnRJdGVtSWRzLmZpbHRlcihjYXJ0SXRlbUlkID0+IHtcbiAgICAgIHJldHVybiBjYXJ0SXRlbUlkICE9PSBjYXRhbG9nSXRlbUlkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRDYXJ0SXRlbXNUb0xvY2FsU3RvcmFnZSh0aGlzLmNhcnRJdGVtSWRzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FydEl0ZW1zRnJvbUxvY2FsU3RvcmFnZSgpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY2FydExvY2FsU3RvcmFnZUtleSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDYXJ0SXRlbXNUb0xvY2FsU3RvcmFnZShpdGVtcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNhcnRMb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhdGFsb2dEYXRhU2VydmljZX0gZnJvbSAnLi9jYXRhbG9nL2NhdGFsb2ctZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7VXNlckRhdGFTZXJ2aWNlfSBmcm9tICcuL3VzZXIvdXNlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtDYXJ0U2VydmljZX0gZnJvbSAnLi9jYXJ0L2NhcnQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ2F0YWxvZ0RhdGFTZXJ2aWNlLFxuICAgIFVzZXJEYXRhU2VydmljZSxcbiAgICBDYXJ0U2VydmljZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFPLHFCQUFNLFdBQVcsR0FBRztRQUN6QjtZQUNFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFlBQVk7WUFDbEIsS0FBSyxFQUFFLEtBQUs7WUFDWixXQUFXLEVBQUUs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