import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;

  user: User = null;
  userName;

  constructor(public afAuth: AngularFireAuth,  public db: AngularFirestore) {

    this.afAuth.authState.subscribe(res => {
      this.authState = res;
      console.log(this.authState);
     });

    this.afAuth.authState.subscribe((auth) => {
      let docRef = this.db.collection("usuarios").doc(auth.uid);

      docRef.get().toPromise().then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          this.user = doc.data();
          console.log(this.user.role);
        }
      });
    });

  }
}
