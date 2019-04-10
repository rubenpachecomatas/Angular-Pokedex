import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';
import { CheckboxControlValueAccessor } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;

  user: User = null;
  userName;

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore) {

    // Keep the session active and get the role.

    this.afAuth.authState.subscribe(res => {
      this.authState = res;
      if (this.authState) {
        let docRef = this.db.collection('usuarios').doc(res.uid);
 
        docRef.get().toPromise().then(doc => {
          if (doc.exists) {
            this.user = doc.data();
          }
        });
      }
    });
  }

  // Check if someone is logged.

  checkUser() {
    if (this.afAuth.auth.currentUser) {
      return true;
    }
    return false;
  }
}
