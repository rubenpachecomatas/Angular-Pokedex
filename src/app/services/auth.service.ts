import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;

  constructor(public afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(res => {
      this.authState = res;
      console.log(this.authState);
     });

  }
}
