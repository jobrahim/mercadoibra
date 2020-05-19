import { Component, OnInit, Input } from '@angular/core';
import { Carrito } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input() carrito: Carrito;

 
}
