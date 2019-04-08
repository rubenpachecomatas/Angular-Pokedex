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

  constructor(private router: Router, public afAuth: AngularFireAuth, public db: AngularFirestore) {
    this.afAuth.authState.subscribe((auth) => {
      let docRef = this.db.collection("usuarios").doc(auth.uid);

      docRef.get().toPromise().then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          this.user = doc.data();
          console.log(this.user);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log('Error getting document:', error);
      });
    });
  }

  canActivate() {
    if (this.afAuth.auth.currentUser) {
      return true;
    }
    return false;
  }
}
