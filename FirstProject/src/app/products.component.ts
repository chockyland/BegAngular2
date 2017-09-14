import { Component } from '@angular/core';
import {ProductService} from './product.service';

@Component({
    selector: 'products',
    template: `<h2>Products</h2>
    <ul>
       <li *ngFor ="let productChoc of products">
            {{productChoc}}
       </li>
    </ul>
    `,
    providers: [ProductService]
})
export class ProductsComponent{
    //products = ["Learning Angular 2","Pro TypeScript","ASP.NET","ChockyLand Kenoby"];
    products;

    constructor(productService: ProductService){
        this.products = productService.getProducts();
    }
}