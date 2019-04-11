import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(public afAuth: AngularFireAuth, private authService: AuthService, private router: Router) { }

  // Restrict access to the users list.

  canActivate() {
    if (this.authService.user.role === 2) {
      return true;
    }
    return false;
  }

}
