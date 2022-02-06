import { Component, OnInit } from '@angular/core';
import product from '../../assets/data/product.json';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    
    listProduct: {
        Id: string,
        ParentId: string,
        Name: string,
        ItemTypeName: string,
        Code: string,
        Unit: string,
    }[] = product;

    constructor() { 

    }

    ngOnInit(): void {

    }

}
