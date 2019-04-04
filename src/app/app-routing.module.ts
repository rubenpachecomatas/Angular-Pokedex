import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersComponent } from './components/users/users.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  { path: 'home/login', component: LoginComponent },
  { path: 'home/pokemons', component: PokemonsComponent, canActivate: [AuthGuardService] },
  { path: 'home/users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'home/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
