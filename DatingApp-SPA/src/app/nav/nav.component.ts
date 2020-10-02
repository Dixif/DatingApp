import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/Auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authServices: AuthService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  onLoggedIn() {
    this.authServices.login(this.model).subscribe(next => {
      console.log('Logged In Successful');
    }, error => {
      console.log('Username or password is not valid!');
    });
  }

  // tslint:disable-next-line:typedef
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  // tslint:disable-next-line:typedef
  loggedOut() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
