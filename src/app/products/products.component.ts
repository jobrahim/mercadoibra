import { Component, OnInit } from '@angular/core';
import { Products } from '../product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  producto: Products[] = [
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




ngOnInit(): void {
}

  clickProduct(id: string){
    console.log('product');
    console.log(id);
  }

}
