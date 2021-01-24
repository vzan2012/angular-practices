import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
  .success-alert{ 
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    padding: 15px;
    margin-bottom: 30px
  }`]
  // styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
