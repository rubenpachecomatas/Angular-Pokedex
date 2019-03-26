import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../../models/pokemon";
import { Observable } from 'rxjs';
import pokedex from '../../../pokedex.json';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons = pokedex;

  constructor() {
    console.log(pokedex);
  }

  ngOnInit() {
  }

}
