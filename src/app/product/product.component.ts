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

    // Thêm sản phẩm
    newSTT = '';
    newId = '';
    newParentId = '';
    newIsGroup = '';
    newName = '';
    newItemTypeName = '';
    newCode = '';
    newUnit = '';
    newItemGroupCode = '';
    newBranchCode = '';
    newIsActive = '';
    newCreatedBy = '';
    newCreatedAt = '';
    newModifiedBy = '';
    newModifiedAt = '';
    new_SelectKey__wibkaw = '';

    constructor() { 

    }

    ngOnInit(): void {

    }

    formAddProduct = '';

    // Thêm sản phẩm
    addProduct() {
        this.listProduct.unshift({
            Id: this.newId,
            ParentId: this.newParentId,
            IsGroup: this.newIsGroup,
            Name: this.newName,
            ItemTypeName: this.newItemTypeName,
            Code: this.newCode,
            Unit: this.newUnit,
            ItemGroupCode: this.newItemGroupCode,
            BranchCode: this.newBranchCode,
            IsActive: this.newIsActive,
            CreatedBy: this.newCreatedBy,
            CreatedAt: this.newCreatedAt,
            ModifiedBy: this.newModifiedBy,
            ModifiedAt: this.newModifiedAt,
            _SelectKey__wibkaw: this.new_SelectKey__wibkaw
        });
        // Clear form
        this.newId = '';
        this.newParentId = '';
        this.newIsGroup = '';
        this.newName = '';
        this.newItemTypeName = '';
        this.newCode = '';
        this.newUnit = '';
        this.newItemGroupCode = '';
        this.newBranchCode = '';
        this.newIsActive = '';
        this.newCreatedBy = '';
        this.newCreatedAt = '';
        this.newModifiedBy = '';
        this.newModifiedAt = '';
        this.new_SelectKey__wibkaw = '';
    }

}
