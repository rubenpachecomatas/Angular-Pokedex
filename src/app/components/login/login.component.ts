import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  emailC = '';
  passwordC = '';
  nombreC = '';

  constructor(public afAuth: AngularFireAuth, private router: Router, public db: AngularFirestore) {
  }
  
  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
        this.afAuth.authState.subscribe(res => {
          if (res && res.uid) {
            console.log('user is logged in');
          } else {
            console.log('user not logged in');
          }
        });
        console.log(this.afAuth.auth.currentUser.displayName);
        this.router.navigate([`/home/pokemons`]);
      }).catch((error) =>  {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  signin(emailC, passwordC, nombreC) {
    this.afAuth.auth.createUserWithEmailAndPassword(emailC, passwordC)
     .then((success) => {

      this.afAuth.auth.currentUser.updateProfile({
        displayName: nombreC
      });

      const UserCollection = this.db.collection<User>('usuarios').doc(this.afAuth.auth.currentUser.uid).set({
        email: emailC,
        role: 1
      });

        this.router.navigate([`/home/pokemons`])
      }).catch((error) =>  {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // ...
      });
  }

  ngOnInit() {
  }

}
