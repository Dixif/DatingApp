import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/Auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  photoUrl: string;

  constructor(public authServices: AuthService, private alertify: AlertifyService , private route: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.authServices.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
  // tslint:disable-next-line:typedef
  onLoggedIn() {
    this.authServices.login(this.model).subscribe(next => {
      this.alertify.success('Logged In Successful');
      this.route.navigate(['/members']);
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
    localStorage.removeItem('user');
    this.authServices.decodedToken=null;
    this.authServices.CurrentUser=null;
    this.alertify.message('logged out');
    this.route.navigate(['/home']);
  }

}
