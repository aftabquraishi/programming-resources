import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageName = "Recipes";
  onPageChanged(page: { pageName: string }) {
  	this.pageName = page.pageName;
  }
}
