import { Injectable, ViewChild } from '@angular/core';
import product from '../assets/data/product.json';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	
	listProduct: {
        Id: any,
        ParentId: any,
        Name: any,
        ItemTypeName: any,
        Code: any,
        Unit: any,
    }[] = product;

	getProduct() {

	}

	constructor() { }
}
