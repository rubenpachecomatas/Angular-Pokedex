import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './guards/admin.guard';
import { UsersComponent } from './components/users/users.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  { path: 'home/login', component: LoginComponent },
  { path: 'home/pokemons', component: PokemonsComponent },
  { path: 'home/users', component: UsersComponent, canActivate: [AdminGuard] },
  { path: '**', redirectTo: 'home/pokemons' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
