import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'home/login', component: LoginComponent },
  { path: 'home/pokemons', component: PokemonsComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'home/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
