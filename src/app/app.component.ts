import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`h3{
    color: blue;
}`, `p {color: red;}`]
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleName = 'Welcome la-app';
}
