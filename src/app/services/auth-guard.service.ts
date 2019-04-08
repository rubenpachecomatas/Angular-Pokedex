import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  user: User = null;

  constructor(private router: Router, public afAuth: AngularFireAuth, public db: AngularFirestore) { }

  canActivate() {
    if (this.afAuth.auth.currentUser) {
      return true;
    }
    return false;
  }
}
