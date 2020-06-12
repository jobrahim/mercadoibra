import { Injectable } from '@angular/core';
import {Product} from '../../../product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  producto: Product[] = [
    {
      id: '1',
      nombre: 'semillas secas',
      imagen: 'assets/images/semillas.png',
      precio: 3000,
      descripcion: 'para suelos secos no necesita glifosato'

    },
    {
      id: '2',
      nombre: 'hibridos',
      imagen: 'assets/images/semillas1.png',
      precio: 6000,
      descripcion: 'para suelos humedos, funciona en invierno'

    },
    {
      id: '3',
      nombre: 'hervidas',
      imagen: 'assets/images/semillas2.png',
      precio: 4000,
      descripcion: 'funciona en cualquier tipo de suelo, necesita glifosato'
    },
    {
      id: '4',
      nombre: 'organicas',
      imagen: 'assets/images/semillas3.png',
      precio: 11000,
      descripcion: 'perfecto con el uso de roundup y Virtus turbo'
    },
  ];

  constructor() { }

  getAllProducts() {
    return this.getAllProducts;
  }

  getProduct(id: string) {

    return this.producto.find(item => id === item.id);
  }

}
