import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';

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

  constructor(public afAuth: AngularFireAuth, private router: Router, public db: AngularFirestore, private authSer: AuthService) {
  }
  
  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((success) => {
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
