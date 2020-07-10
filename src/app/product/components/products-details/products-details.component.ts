import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Product} from '../../../core/models/product.model';
import { ProductsService } from './../../../core/services/product/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

    ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        const id = params.id;
        this.fetchProduct(id);
        // this.product = this.productsService.getProduct(id);
      });
    }
  
    fetchProduct(id: string) {
      this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      });
    }

    
  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

}
