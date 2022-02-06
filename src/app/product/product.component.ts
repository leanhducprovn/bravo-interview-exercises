import { Component, OnInit } from '@angular/core';
import product from '../../assets/data/product.json';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    
    listProduct: {
        Id: any,
        ParentId: any,
        Name: any,
        ItemTypeName: any,
        Code: any,
        Unit: any,
    }[] = product;

    constructor() { 

    }

    ngOnInit(): void {

    }

}
