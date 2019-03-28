import { Component, OnInit } from '@angular/core';
import pokedex from '../../../pokedex.json';
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
    console.log(pokedex);
    this.pokemons = this.AccesoDatos.getUrl().subscribe(res => {
      this.pokemons = res;
    })
  }

  signout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
