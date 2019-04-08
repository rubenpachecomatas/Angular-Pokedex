import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';


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

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore, private router: Router, public authGuardService: AuthGuardService) {

    this.userName = this.afAuth.auth.currentUser.displayName;
    console.log(this.userName);
    
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
