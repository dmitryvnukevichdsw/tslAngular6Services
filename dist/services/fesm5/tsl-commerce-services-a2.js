import { Injectable, NgModule } from '@angular/core';

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
        id: 2,
        name: 'Super shoes',
        price: 59.99,
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly90c2wtY29tbWVyY2Utc2VydmljZXMtYTIvbGliL2NhdGFsb2cvY2F0YWxvZy1kYXRhLW1vY2sudHMiLCJuZzovL3RzbC1jb21tZXJjZS1zZXJ2aWNlcy1hMi9saWIvY2F0YWxvZy9jYXRhbG9nLWRhdGEuc2VydmljZS50cyIsIm5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyL2xpYi91c2VyL3VzZXItZGF0YS1tb2NrLnRzIiwibmc6Ly90c2wtY29tbWVyY2Utc2VydmljZXMtYTIvbGliL3VzZXIvdXNlci1kYXRhLnNlcnZpY2UudHMiLCJuZzovL3RzbC1jb21tZXJjZS1zZXJ2aWNlcy1hMi9saWIvY2FydC9jYXJ0LnNlcnZpY2UudHMiLCJuZzovL3RzbC1jb21tZXJjZS1zZXJ2aWNlcy1hMi9saWIvc2VydmljZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjYXRhbG9nRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6ICdDb29sIHNob2VzJyxcbiAgICBwcmljZTogMjIuOTksXG4gICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0J1xuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ05pY2Ugc2hvZXMnLFxuICAgIHByaWNlOiAyOS45OSxcbiAgICBkZXNjcmlwdGlvbjogJ1V0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQnXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiAnU3VwZXIgc2hvZXMnLFxuICAgIHByaWNlOiA1OS45OSxcbiAgICBkZXNjcmlwdGlvbjogYER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxuICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bWBcbiAgfVxuXTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNhdGFsb2dEYXRhIH0gZnJvbSAnLi9jYXRhbG9nLWRhdGEtbW9jayc7XG5pbXBvcnQge0NhdGFsb2dJdGVtfSBmcm9tICcuL0NhdGFsb2dJdGVtJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhdGFsb2dEYXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0Q2F0YWxvZ0RhdGEoKTogQ2F0YWxvZ0l0ZW1bXSB7XG4gICAgcmV0dXJuIGNhdGFsb2dEYXRhO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgdXNlckRhdGEgPSB7XG4gIGlkOiAxLFxuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnXG59O1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQgeyB1c2VyRGF0YSB9IGZyb20gJy4vdXNlci1kYXRhLW1vY2snO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckRhdGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRVc2VyRGF0YSgpOiBVc2VyIHtcbiAgICByZXR1cm4gdXNlckRhdGE7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhdGFsb2dEYXRhU2VydmljZX0gZnJvbSAnLi9jYXRhbG9nL2NhdGFsb2ctZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7VXNlckRhdGFTZXJ2aWNlfSBmcm9tICcuL3VzZXIvdXNlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtDYXJ0U2VydmljZX0gZnJvbSAnLi9jYXJ0L2NhcnQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ2F0YWxvZ0RhdGFTZXJ2aWNlLFxuICAgIFVzZXJEYXRhU2VydmljZSxcbiAgICBDYXJ0U2VydmljZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLHFCQUFNLFdBQVcsR0FBRztJQUN6QjtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFlBQVk7UUFDbEIsS0FBSyxFQUFFLEtBQUs7UUFDWixXQUFXLEVBQUUseURBQXlEO0tBQ3ZFO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxZQUFZO1FBQ2xCLEtBQUssRUFBRSxLQUFLO1FBQ1osV0FBVyxFQUFFLDRHQUE0RztLQUMxSDtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsYUFBYTtRQUNuQixLQUFLLEVBQUUsS0FBSztRQUNaLFdBQVcsRUFBRSw2TkFDbUc7S0FDakg7Q0FDRixDQUFDOzs7Ozs7QUNwQkY7SUFNRTtLQUFpQjs7OztJQUVqQiwyQ0FBYzs7O0lBQWQ7UUFDRSxPQUFPLFdBQVcsQ0FBQztLQUNwQjs7Z0JBTkYsVUFBVTs7Ozs2QkFKWDs7Ozs7OztBQ0FBLEFBQU8scUJBQU0sUUFBUSxHQUFHO0lBQ3RCLEVBQUUsRUFBRSxDQUFDO0lBQ0wsU0FBUyxFQUFFLE1BQU07SUFDakIsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQzs7Ozs7O0FDSkY7SUFNRTtLQUFpQjs7OztJQUVqQixxQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLFFBQVEsQ0FBQztLQUNqQjs7Z0JBTkYsVUFBVTs7OzswQkFKWDs7Ozs7OztBQ0FBO0lBSUU7S0FBaUI7O2dCQUZsQixVQUFVOzs7O3NCQUZYOzs7Ozs7O0FDQUE7Ozs7Z0JBS0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVCxrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsV0FBVztxQkFDWjtpQkFDRjs7eUJBYkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==