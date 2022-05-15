import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  showProduct = this.productService.listProduct;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
