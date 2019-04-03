import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

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

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore) {

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
              console.log("Error getting document:", error);
          });
   });
    
  }

  ngOnInit() {
  }

  signout() {
    this.afAuth.auth.signOut();
  }

  onSelect(feature: string){
    if (feature === 'pokemons') {
      this.loadedFeature = 'pokemons';
    } else if (feature === 'users') {
      this.loadedFeature = 'users';
    }
  }

}
