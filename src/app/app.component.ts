import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-sidenav> </app-sidenav>
  <div class="container">
    <router-outlet> </router-outlet>
  </div>`
})
export class AppComponent {
}
