import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service'

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css'],
})

export class AddComponent implements OnInit {

	addProduct = this.fb.group({
		Id: ['', [Validators.required, Validators.minLength(5)]],
		ParentId: ['', [Validators.required, Validators.minLength(4)]],
		Name: ['', [Validators.required, Validators.minLength(4)]],
		ItemTypeName: ['', Validators.required],
		Code: ['', Validators.required],
		Unit: ['', Validators.required],
	});

	get Id() { return this.addProduct.get('Id')!; }
	get ParentId() { return this.addProduct.get('ParentId')!; }
	get Name() { return this.addProduct.get('Name')!; }
	get ItemTypeName() { return this.addProduct.get('ItemTypeName')!; }
	get Code() { return this.addProduct.get('Code')!; }
	get Unit() { return this.addProduct.get('Unit')!; }

  	constructor(private fb: FormBuilder, private productService: ProductService) { }

	onReset() {
		this.addProduct.reset();
	}

	onSubmit() {
		console.warn(this.addProduct.value);
		console.log(this.productService.getProduct())
		this.addProduct.reset();
	}

	ngOnInit(): void {
		
	}

}
