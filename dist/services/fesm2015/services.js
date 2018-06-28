import { Injectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ catalogData = [
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
class CartService {
    constructor() { }
}
CartService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CartService.ctorParameters = () => [];

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

export { CatalogDataService, UserDataService, ServicesModule, CartService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL3NlcnZpY2VzL2xpYi9jYXRhbG9nL2NhdGFsb2ctZGF0YS1tb2NrLnRzIiwibmc6Ly9zZXJ2aWNlcy9saWIvY2F0YWxvZy9jYXRhbG9nLWRhdGEuc2VydmljZS50cyIsIm5nOi8vc2VydmljZXMvbGliL3VzZXIvdXNlci1kYXRhLW1vY2sudHMiLCJuZzovL3NlcnZpY2VzL2xpYi91c2VyL3VzZXItZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly9zZXJ2aWNlcy9saWIvY2FydC9jYXJ0LnNlcnZpY2UudHMiLCJuZzovL3NlcnZpY2VzL2xpYi9zZXJ2aWNlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNhdGFsb2dEYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ0Nvb2wgc2hvZXMnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ05pY2Ugc2hvZXMnLFxuICB9XG5dO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2F0YWxvZ0RhdGEgfSBmcm9tICcuL2NhdGFsb2ctZGF0YS1tb2NrJztcbmltcG9ydCB7Q2F0YWxvZ0l0ZW19IGZyb20gJy4vQ2F0YWxvZ0l0ZW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2F0YWxvZ0RhdGFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRDYXRhbG9nRGF0YSgpOiBDYXRhbG9nSXRlbVtdIHtcbiAgICByZXR1cm4gY2F0YWxvZ0RhdGE7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCB1c2VyRGF0YSA9IHtcbiAgaWQ6IDEsXG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBsYXN0TmFtZTogJ0RvZSdcbn07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCB7IHVzZXJEYXRhIH0gZnJvbSAnLi91c2VyLWRhdGEtbW9jayc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyRGF0YVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldFVzZXJEYXRhKCk6IFVzZXIge1xuICAgIHJldHVybiB1c2VyRGF0YTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2F0YWxvZ0RhdGFTZXJ2aWNlfSBmcm9tICcuL2NhdGFsb2cvY2F0YWxvZy1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtVc2VyRGF0YVNlcnZpY2V9IGZyb20gJy4vdXNlci91c2VyLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge0NhcnRTZXJ2aWNlfSBmcm9tICcuL2NhcnQvY2FydC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDYXRhbG9nRGF0YVNlcnZpY2UsXG4gICAgVXNlckRhdGFTZXJ2aWNlLFxuICAgIENhcnRTZXJ2aWNlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sdUJBQU0sV0FBVyxHQUFHO0lBQ3pCO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsWUFBWTtLQUNuQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsWUFBWTtLQUNuQjtDQUNGLENBQUM7Ozs7OztBQ1RGO0lBTUUsaUJBQWlCOzs7O0lBRWpCLGNBQWM7UUFDWixPQUFPLFdBQVcsQ0FBQztLQUNwQjs7O1lBTkYsVUFBVTs7Ozs7Ozs7O0FDSlgsQUFBTyx1QkFBTSxRQUFRLEdBQUc7SUFDdEIsRUFBRSxFQUFFLENBQUM7SUFDTCxTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDOzs7Ozs7QUNKRjtJQU1FLGlCQUFpQjs7OztJQUVqQixXQUFXO1FBQ1QsT0FBTyxRQUFRLENBQUM7S0FDakI7OztZQU5GLFVBQVU7Ozs7Ozs7OztBQ0pYO0lBSUUsaUJBQWlCOzs7WUFGbEIsVUFBVTs7Ozs7Ozs7O0FDRlg7OztZQUtDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFBRTtnQkFDWCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQUU7b0JBQ1Qsa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLFdBQVc7aUJBQ1o7YUFDRjs7Ozs7Ozs7Ozs7Ozs7OyJ9