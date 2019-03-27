import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pokemons', component: PokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
