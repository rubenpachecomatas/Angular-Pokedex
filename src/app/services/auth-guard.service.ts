import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterEvent } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, public afAuth: AngularFireAuth) { }

  canActivate() {
    if (this.afAuth.auth.currentUser) {
      return true;
    }
    this.router.navigate(['/home/login']);
    return false;
  }

}
