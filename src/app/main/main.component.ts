import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  name: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {this.name = ''; }

  showData() {
    this.authService.getUserData().subscribe(
      (profile) => {
        const displayName = profile.displayName; // Nombre completo
        const givenName = profile.name.givenName; // Primer nombre
        const familyName = profile.name.familyName; // Apellido

        console.log('Nombre completo:', displayName);
        console.log('Primer nombre:', givenName);
        console.log('Apellido:', familyName);
      },
      (error) => {
        console.error('Error obteniendo datos del usuario:', error);
      }
    );
  }
  logOut() {
    this.authService.logout();
  }
}
