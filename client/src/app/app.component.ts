import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  title = 'ngrx-nest';

  constructor(private store: Store, public authService: AuthService) { }

  ngOnInit() {
    if (this.authService.token) {
      this.authService.whoami();
    }
  }
  logout() {
    this.authService.logout();
  }
}
