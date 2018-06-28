import { Injectable, NgModule } from '@angular/core';

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
var CatalogDataService = /** @class */ (function () {
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
        { type: Injectable },
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
var UserDataService = /** @class */ (function () {
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
        { type: Injectable },
    ];
    /** @nocollapse */
    UserDataService.ctorParameters = function () { return []; };
    return UserDataService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CartService = /** @class */ (function () {
    function CartService() {
    }
    CartService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CartService.ctorParameters = function () { return []; };
    return CartService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
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

export { CatalogDataService, UserDataService, ServicesModule, CartService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL3NlcnZpY2VzL2xpYi9jYXRhbG9nL2NhdGFsb2ctZGF0YS1tb2NrLnRzIiwibmc6Ly9zZXJ2aWNlcy9saWIvY2F0YWxvZy9jYXRhbG9nLWRhdGEuc2VydmljZS50cyIsIm5nOi8vc2VydmljZXMvbGliL3VzZXIvdXNlci1kYXRhLW1vY2sudHMiLCJuZzovL3NlcnZpY2VzL2xpYi91c2VyL3VzZXItZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly9zZXJ2aWNlcy9saWIvY2FydC9jYXJ0LnNlcnZpY2UudHMiLCJuZzovL3NlcnZpY2VzL2xpYi9zZXJ2aWNlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhdGFsb2dEYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ0Nvb2wgc2hvZXMnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ05pY2Ugc2hvZXMnLFxuICB9XG5dO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2F0YWxvZ0RhdGEgfSBmcm9tICcuL2NhdGFsb2ctZGF0YS1tb2NrJztcbmltcG9ydCB7Q2F0YWxvZ0l0ZW19IGZyb20gJy4vQ2F0YWxvZ0l0ZW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2F0YWxvZ0RhdGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRDYXRhbG9nRGF0YSgpOiBDYXRhbG9nSXRlbVtdIHtcbiAgICByZXR1cm4gY2F0YWxvZ0RhdGE7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCB1c2VyRGF0YSA9IHtcbiAgaWQ6IDEsXG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZSdcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCB7IHVzZXJEYXRhIH0gZnJvbSAnLi91c2VyLWRhdGEtbW9jayc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyRGF0YVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldFVzZXJEYXRhKCk6IFVzZXIge1xuICAgIHJldHVybiB1c2VyRGF0YTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2F0YWxvZ0RhdGFTZXJ2aWNlfSBmcm9tICcuL2NhdGFsb2cvY2F0YWxvZy1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyRGF0YVNlcnZpY2V9IGZyb20gJy4vdXNlci91c2VyLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge0NhcnRTZXJ2aWNlfSBmcm9tICcuL2NhcnQvY2FydC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDYXRhbG9nRGF0YVNlcnZpY2UsXG4gICAgVXNlckRhdGFTZXJ2aWNlLFxuICAgIENhcnRTZXJ2aWNlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8scUJBQU0sV0FBVyxHQUFHO0lBQ3pCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsWUFBWTtLQUNuQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsWUFBWTtLQUNuQjtDQUNGLENBQUM7Ozs7OztBQ1RGO0lBTUU7S0FBaUI7Ozs7SUFFakIsMkNBQWM7OztJQUFkO1FBQ0UsT0FBTyxXQUFXLENBQUM7S0FDcEI7O2dCQU5GLFVBQVU7Ozs7NkJBSlg7Ozs7Ozs7QUNBQSxBQUFPLHFCQUFNLFFBQVEsR0FBRztJQUN0QixFQUFFLEVBQUUsQ0FBQztJQUNMLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxLQUFLO0NBQ2hCLENBQUM7Ozs7OztBQ0pGO0lBTUU7S0FBaUI7Ozs7SUFFakIscUNBQVc7OztJQUFYO1FBQ0UsT0FBTyxRQUFRLENBQUM7S0FDakI7O2dCQU5GLFVBQVU7Ozs7MEJBSlg7Ozs7Ozs7QUNBQTtJQUlFO0tBQWlCOztnQkFGbEIsVUFBVTs7OztzQkFGWDs7Ozs7OztBQ0FBOzs7O2dCQUtDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsRUFBRTtvQkFDWCxTQUFTLEVBQUU7d0JBQ1Qsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLFdBQVc7cUJBQ1o7aUJBQ0Y7O3lCQWJEOzs7Ozs7Ozs7Ozs7Ozs7In0=