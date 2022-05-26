import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/Products';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() products!: IProduct
  productDetail!: IProduct;
  constructor( private router: ActivatedRoute) {
    const id = this.router.snapshot.paramMap.get('id');
    this.products = this.productService.getProduct(id)!;
   }

  ngOnInit(): void {
  }
  onHandleGetInfo(product: IProduct) {
    this.productDetail = product;
    console.log('product', product)
  }

}