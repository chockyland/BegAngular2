import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:
  `<h1>{{title}}</h1>
  <products></products> 
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Second Angular App Choc';
}
