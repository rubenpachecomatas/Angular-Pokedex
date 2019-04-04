import { Component, OnInit } from '@angular/core';
import { AccesoDatosService } from "../../services/acceso-datos.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons;

  constructor(private AccesoDatos: AccesoDatosService, public afAuth: AngularFireAuth, private router: Router) {
    this.pokemons = this.AccesoDatos.getUrl().subscribe(res => {
      this.pokemons = res;
    })

    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
      } else {
        console.log('user not logged in');
      }
    });
    
  }

  ngOnInit() {
  }

}
