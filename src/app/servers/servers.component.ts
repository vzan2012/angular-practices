import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  // selector: '[app-servers]',
  // selector: 'app-servers',
  // template: `<app-server></app-server><app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No Server was created"
  serverName: string = '';
  serverCreated: boolean = false;
  servers: string[] = ['Server 1', 'Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server was created!!! Name is ${this.serverName}`
  }

  // Event Binding 
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}