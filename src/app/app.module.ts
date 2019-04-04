import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { AccesoDatosService } from './services/acceso-datos.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersComponent } from './components/users/users.component';
import { PokemonsComponent } from "./components/pokemons/pokemons.component";
import { PrincipalComponent } from './components/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    LoginComponent,
    UsersComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AccesoDatosService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
