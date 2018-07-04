import { Injectable } from '@angular/core';
import { catalogData } from './catalog-data-mock';
import {CatalogItem} from './CatalogItem';

@Injectable()
export class CatalogDataService {
  constructor() { }

  getCatalogData(): CatalogItem[] {
    return catalogData;
  }
}
