import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`h3{
    color: blue;
}`, `p {color: red;}`, `.log-Fifth {
  background: blue;
  color: white;
}`]
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleName = 'Welcome la-app';

  userName: string = '';
  showDetails: boolean = false;
  numClicks: number = 0;
  clickArray: string[] = []

  onReset() {
    this.userName = ''
  }

  onShowDetails() {
    this.numClicks = this.numClicks + 1;
    this.showDetails = !this.showDetails;
    let clickDetails = `Number of clicks: ${this.numClicks} - ${new Date()}`
    this.clickArray.push(clickDetails);
  }


}
