import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';
  name: string = 'Daniel Quezada';
  custom_list: Array<String> = ['Javascript', 'Typescript'];
}
