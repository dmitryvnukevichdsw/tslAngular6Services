(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('services', ['exports', '@angular/core'], factory) :
    (factory((global.services = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ catalogData = [
        {
            id: 1,
            name: 'Cool shoes',
        },
        {
            id: 2,
            name: 'Nice shoes',
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
    var CartService = (function () {
        function CartService() {
        }
        CartService.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        CartService.ctorParameters = function () { return []; };
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
    exports.ServicesModule = ServicesModule;
    exports.ɵa = CartService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9zZXJ2aWNlcy9saWIvY2F0YWxvZy9jYXRhbG9nLWRhdGEtbW9jay50cyIsIm5nOi8vc2VydmljZXMvbGliL2NhdGFsb2cvY2F0YWxvZy1kYXRhLnNlcnZpY2UudHMiLCJuZzovL3NlcnZpY2VzL2xpYi91c2VyL3VzZXItZGF0YS1tb2NrLnRzIiwibmc6Ly9zZXJ2aWNlcy9saWIvdXNlci91c2VyLWRhdGEuc2VydmljZS50cyIsIm5nOi8vc2VydmljZXMvbGliL2NhcnQvY2FydC5zZXJ2aWNlLnRzIiwibmc6Ly9zZXJ2aWNlcy9saWIvc2VydmljZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYXRhbG9nRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdDb29sIHNob2VzJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6ICdOaWNlIHNob2VzJyxcbiAgfVxuXTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNhdGFsb2dEYXRhIH0gZnJvbSAnLi9jYXRhbG9nLWRhdGEtbW9jayc7XG5pbXBvcnQge0NhdGFsb2dJdGVtfSBmcm9tICcuL0NhdGFsb2dJdGVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhdGFsb2dEYXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0Q2F0YWxvZ0RhdGEoKTogQ2F0YWxvZ0l0ZW1bXSB7XG4gICAgcmV0dXJuIGNhdGFsb2dEYXRhO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgdXNlckRhdGEgPSB7XG4gIGlkOiAxLFxuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQgeyB1c2VyRGF0YSB9IGZyb20gJy4vdXNlci1kYXRhLW1vY2snO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckRhdGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRVc2VyRGF0YSgpOiBVc2VyIHtcbiAgICByZXR1cm4gdXNlckRhdGE7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhdGFsb2dEYXRhU2VydmljZX0gZnJvbSAnLi9jYXRhbG9nL2NhdGFsb2ctZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7VXNlckRhdGFTZXJ2aWNlfSBmcm9tICcuL3VzZXIvdXNlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtDYXJ0U2VydmljZX0gZnJvbSAnLi9jYXJ0L2NhcnQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ2F0YWxvZ0RhdGFTZXJ2aWNlLFxuICAgIFVzZXJEYXRhU2VydmljZSxcbiAgICBDYXJ0U2VydmljZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFPLHFCQUFNLFdBQVcsR0FBRztRQUN6QjtZQUNFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFlBQVk7U0FDbkI7UUFDRDtZQUNFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFlBQVk7U0FDbkI7S0FDRixDQUFDOzs7Ozs7QUNURjtRQU1FO1NBQWlCOzs7O1FBRWpCLDJDQUFjOzs7WUFBZDtnQkFDRSxPQUFPLFdBQVcsQ0FBQzthQUNwQjs7b0JBTkZBLGVBQVU7Ozs7aUNBSlg7Ozs7Ozs7QUNBQSxJQUFPLHFCQUFNLFFBQVEsR0FBRztRQUN0QixFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7Ozs7OztBQ0pGO1FBTUU7U0FBaUI7Ozs7UUFFakIscUNBQVc7OztZQUFYO2dCQUNFLE9BQU8sUUFBUSxDQUFDO2FBQ2pCOztvQkFORkEsZUFBVTs7Ozs4QkFKWDs7Ozs7OztBQ0FBO1FBSUU7U0FBaUI7O29CQUZsQkEsZUFBVTs7OzswQkFGWDs7Ozs7OztBQ0FBOzs7O29CQUtDQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsU0FBUyxFQUFFOzRCQUNULGtCQUFrQjs0QkFDbEIsZUFBZTs0QkFDZixXQUFXO3lCQUNaO3FCQUNGOzs2QkFiRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=