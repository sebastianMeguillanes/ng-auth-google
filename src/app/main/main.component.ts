import { Component } from '@angular/core';
import { AuthGoogleService } from '../auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  name: string;

  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) {this.name = ''; }

  showData() {
    const profile = this.authGoogleService.getProfile();
    const name = profile["name"];


    console.log(profile);
    this.name = name;
  }

  logOut() {
    this.authGoogleService.logout();
    this.router.navigate(['login']);
  }

}
