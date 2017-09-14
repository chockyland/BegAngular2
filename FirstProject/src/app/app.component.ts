import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:
  `<h1>{{title}}</h1>
  <products></products> 
  <br>
  <advertisements></advertisements>
  
  <br>
  <br>
  by ChockyLand Kenoby
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'My Second Angular App Choc';
}
