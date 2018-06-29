import { CatalogDataService } from '../catalog/catalog-data.service';
import { CatalogItem } from '../catalog/CatalogItem';
export declare class CartService {
    private catalogDataService;
    constructor(catalogDataService: CatalogDataService);
    cartItemIds: any;
    getCartItems(): CatalogItem[];
    addCartItem(catalogItemId: any): any;
    removeCartItem(catalogItemId: any): void;
    private getCartItemsFromLocalStorage();
    private setCartItemsToLocalStorage(items);
}
