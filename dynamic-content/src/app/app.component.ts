import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-content';
}

export class UserName {
  name: string;
    constructor(){
    this.name = "Jeannette";
  }
}
