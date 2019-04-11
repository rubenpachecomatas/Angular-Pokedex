import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoDatosService {

  constructor(private http: HttpClient) { }

  // Get the pokemon data.

  getUrl(): Observable<any> {
    const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
    return this.http.get(url);
  }
}
