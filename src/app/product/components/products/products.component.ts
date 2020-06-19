import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from './../../../core/services/product/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }




ngOnInit(): void {
  this.fetchProduct();
}

  clickProduct(id: string){
    console.log('product');
    console.log(id);
  }

  fetchProduct(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.product = products;
      });
  }

}
