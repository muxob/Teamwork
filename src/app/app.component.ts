import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teamwork';
  isLoggedIn = false;
  username: string;

  logout() {
    //this.tokenStorageService.signOut();
  }
}
