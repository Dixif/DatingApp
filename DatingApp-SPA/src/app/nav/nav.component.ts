import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/Auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authServices: AuthService, private alertify: AlertifyService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  onLoggedIn() {
    this.authServices.login(this.model).subscribe(next => {
      this.alertify.success('Logged In Successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  // tslint:disable-next-line:typedef
  loggedIn() {
    return this.authServices.loggedIn();
  }

  // tslint:disable-next-line:typedef
  loggedOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

}
