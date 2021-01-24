import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
  .warning-alert {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: 15px;
    margin-bottom: 30px
  }
  `]
  // styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
