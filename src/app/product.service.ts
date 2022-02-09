import { Injectable, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	@ViewChild(ProductComponent)
	product = ProductComponent
	getProduct() {
		return this.product;
	}

	constructor() { }
}
