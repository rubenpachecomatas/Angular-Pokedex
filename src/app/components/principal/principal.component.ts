import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @Input() featureSelected;
  loadedFeature = 'pokemons';
  rol: number;

  constructor(public afAuth: AngularFireAuth) { }

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
