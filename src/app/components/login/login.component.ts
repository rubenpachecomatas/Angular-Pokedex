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

  constructor(public afAuth: AngularFireAuth, private router: Router, public db: AngularFirestore) {
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

  signin(emailC, passwordC) {
    this.afAuth.auth.createUserWithEmailAndPassword(emailC, passwordC)
     .then((success) => {

        const UserCollection = this.db.collection<User>('usuarios');
        UserCollection.add({ email: emailC, role: 1 });

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
