import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @Input() featureSelected;
  loadedFeature = 'pokemons';
  rol: number;

  user: User = null;
  userName;

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore, private router: Router) {

    this.userName = this.afAuth.auth.currentUser.displayName;
    console.log(this.userName);

    this.afAuth.authState.subscribe((auth) => {
          let docRef = db.collection("usuarios").doc(auth.uid);
   
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

  ngOnInit() {
  }

  signout() {
    this.afAuth.auth.signOut();
  }

  onSelect(feature: string){
    this.router.navigate([`/home/` + feature])
  }

}
