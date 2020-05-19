import { Component } from '@angular/core';
import { Products } from './product.model';
import { ProductComponent } from './components/product.component';
import {Carrito} from './product.model';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  carrito: Carrito[] = [
    {
      icono: 'assets/images/cart.png'
    }
  ];



}
