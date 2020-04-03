import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;
  title = 'Takipnik';

   toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    
    //TODO do this in css? Add a no focus check or on blur event
    if (this.navbarOpen) {
      setTimeout(()=>{  
      this.navbarOpen = false;
      }, 4000);
    }
  }
}
