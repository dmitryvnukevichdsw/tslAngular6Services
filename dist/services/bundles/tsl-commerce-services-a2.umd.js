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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyL2xpYi9jYXRhbG9nL2NhdGFsb2ctZGF0YS1tb2NrLnRzIiwibmc6Ly90c2wtY29tbWVyY2Utc2VydmljZXMtYTIvbGliL2NhdGFsb2cvY2F0YWxvZy1kYXRhLnNlcnZpY2UudHMiLCJuZzovL3RzbC1jb21tZXJjZS1zZXJ2aWNlcy1hMi9saWIvdXNlci91c2VyLWRhdGEtbW9jay50cyIsIm5nOi8vdHNsLWNvbW1lcmNlLXNlcnZpY2VzLWEyL2xpYi91c2VyL3VzZXItZGF0YS5zZXJ2aWNlLnRzIiwibmc6Ly90c2wtY29tbWVyY2Utc2VydmljZXMtYTIvbGliL2NhcnQvY2FydC5zZXJ2aWNlLnRzIiwibmc6Ly90c2wtY29tbWVyY2Utc2VydmljZXMtYTIvbGliL3NlcnZpY2VzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2F0YWxvZ0RhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiAnQ29vbCBzaG9lcycsXG4gICAgcHJpY2U6IDIyLjk5LFxuICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCdcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6ICdOaWNlIHNob2VzJyxcbiAgICBwcmljZTogMjkuOTksXG4gICAgZGVzY3JpcHRpb246ICdVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0J1xuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogJ1N1cGVyIHNob2VzJyxcbiAgICBwcmljZTogNTkuOTksXG4gICAgZGVzY3JpcHRpb246IGBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci5cbiAgICAgIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW1gXG4gIH1cbl07XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjYXRhbG9nRGF0YSB9IGZyb20gJy4vY2F0YWxvZy1kYXRhLW1vY2snO1xuaW1wb3J0IHtDYXRhbG9nSXRlbX0gZnJvbSAnLi9DYXRhbG9nSXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXRhbG9nRGF0YVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldENhdGFsb2dEYXRhKCk6IENhdGFsb2dJdGVtW10ge1xuICAgIHJldHVybiBjYXRhbG9nRGF0YTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHVzZXJEYXRhID0ge1xuICBpZDogMSxcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGxhc3ROYW1lOiAnRG9lJ1xufTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHsgdXNlckRhdGEgfSBmcm9tICcuL3VzZXItZGF0YS1tb2NrJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJEYXRhU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0VXNlckRhdGEoKTogVXNlciB7XG4gICAgcmV0dXJuIHVzZXJEYXRhO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDYXRhbG9nRGF0YVNlcnZpY2V9IGZyb20gJy4vY2F0YWxvZy9jYXRhbG9nLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge1VzZXJEYXRhU2VydmljZX0gZnJvbSAnLi91c2VyL3VzZXItZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7Q2FydFNlcnZpY2V9IGZyb20gJy4vY2FydC9jYXJ0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW10sXG4gIHByb3ZpZGVyczogW1xuICAgIENhdGFsb2dEYXRhU2VydmljZSxcbiAgICBVc2VyRGF0YVNlcnZpY2UsXG4gICAgQ2FydFNlcnZpY2UsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VydmljZXNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTyxxQkFBTSxXQUFXLEdBQUc7UUFDekI7WUFDRSxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxZQUFZO1lBQ2xCLEtBQUssRUFBRSxLQUFLO1lBQ1osV0FBVyxFQUFFLHlEQUF5RDtTQUN2RTtRQUNEO1lBQ0UsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsWUFBWTtZQUNsQixLQUFLLEVBQUUsS0FBSztZQUNaLFdBQVcsRUFBRSw0R0FBNEc7U0FDMUg7UUFDRDtZQUNFLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGFBQWE7WUFDbkIsS0FBSyxFQUFFLEtBQUs7WUFDWixXQUFXLEVBQUUsNk5BQ21HO1NBQ2pIO0tBQ0YsQ0FBQzs7Ozs7O0FDcEJGO1FBTUU7U0FBaUI7Ozs7UUFFakIsMkNBQWM7OztZQUFkO2dCQUNFLE9BQU8sV0FBVyxDQUFDO2FBQ3BCOztvQkFORkEsZUFBVTs7OztpQ0FKWDs7Ozs7OztBQ0FBLElBQU8scUJBQU0sUUFBUSxHQUFHO1FBQ3RCLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLE1BQU07UUFDakIsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQzs7Ozs7O0FDSkY7UUFNRTtTQUFpQjs7OztRQUVqQixxQ0FBVzs7O1lBQVg7Z0JBQ0UsT0FBTyxRQUFRLENBQUM7YUFDakI7O29CQU5GQSxlQUFVOzs7OzhCQUpYOzs7Ozs7O0FDQUE7UUFJRTtTQUFpQjs7b0JBRmxCQSxlQUFVOzs7OzBCQUZYOzs7Ozs7O0FDQUE7Ozs7b0JBS0NDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFBRTt3QkFDWCxPQUFPLEVBQUUsRUFBRTt3QkFDWCxTQUFTLEVBQUU7NEJBQ1Qsa0JBQWtCOzRCQUNsQixlQUFlOzRCQUNmLFdBQVc7eUJBQ1o7cUJBQ0Y7OzZCQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==