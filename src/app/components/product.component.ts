import {Component, Input, Output, EventEmitter, OnChanges, DoCheck, OnInit, OnDestroy} from '@angular/core';
import { Products } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {

    @Input() producto: Products;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    ngOnInit(){
        console.log('1. ngOnInit');
    }
    ngOnChanges(){
        console.log('2. ngOnChanges');
    }
    ngOnDestroy(){
        console.log('3. ngOnDestroy');
    }

    compra = ['pedro', 'juan', 'jose'];

    comprar() {
        this.compra.push('nuevo');
        console.log('añadir al carro');
    }

    }
