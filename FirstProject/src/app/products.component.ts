import { Component } from '@angular/core';

@Component({
    selector: 'products',
    template: `<h2>Products</h2>
    <ul>
       <li *ngFor ="let productChoc of products">
            {{productChoc}}
       </li>
    </ul>
    `
})
export class ProductsComponent{
    products = ["Learning Angular 2","Pro TypeScript","ASP.NET","ChockyLand Kenoby"];
}