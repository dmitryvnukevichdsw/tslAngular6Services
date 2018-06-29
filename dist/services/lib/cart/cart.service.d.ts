import { CatalogDataService } from '../catalog/catalog-data.service';
import { CatalogItem } from '../catalog/CatalogItem';
export declare class CartService {
    private catalogDataService;
    constructor(catalogDataService: CatalogDataService);
    cartItemIds: any;
    getCartItems(): CatalogItem[];
    addCartItem(catalogItemId: any): void;
    removeCartItem(catalogItemId: any): void;
    getCartTotalPrice(): number;
    isCatalogItemInCart(catalogItemId: any): any;
    private getCartItemsFromLocalStorage();
    private setCartItemsToLocalStorage(items);
}
