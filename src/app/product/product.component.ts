import { Component, OnInit } from '@angular/core';
import product from '../../assets/data/product.json';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    
    listProduct: {
        Id: string,
        ParentId: string,
        IsGroup: string,
        Name: string,
        ItemTypeName: string,
        Code: string,
        Unit: string,
        ItemGroupCode: string,
        BranchCode: string,
        IsActive: string,
        CreatedBy: string,
        CreatedAt: string,
        ModifiedBy: string,
        ModifiedAt: string,
        _SelectKey__wibkaw: string
    }[] = product;

    check = true;
    perPage = 20;
    previous = 1;
    next = 1;
    page = 1;

    constructor(private route: ActivatedRoute,) { 
        this.route.queryParams.subscribe(params => {
            this.page = params['page'] ? params['page'] : 1;
            this.previous = this.page - 1;
            this.next = this.page - (-1);
            this.check = this.page == 1 ? true : false;
        });
    }

    ngOnInit(): void {

    }

}
