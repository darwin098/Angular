import { Component } from '@angular/core';

import { FullName } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Leong Kai Joon';

  FullName = FullName;
}
