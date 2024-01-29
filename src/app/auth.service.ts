// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  private user: any;

  constructor(private router: Router, private http: HttpClient) {}

  isAuthenticated() {
    return this.authenticated;
  }

  getUser() {
    return this.user;
  }

  getUserData(): Observable<any> {
    return this.http.get<any>('https://authgoogleapi.dev.404.codes/profile');
  }

  loginWithGoogle() {
    // Redireccionar al backend para la autenticación con Google
    window.location.href = 'https://authgoogleapi.dev.404.codes/auth/google';
  }

  logout() {
    // Redireccionar al backend para cerrar sesión
    window.location.href = 'https://authgoogleapi.dev.404.codes/logout';
  }
}

