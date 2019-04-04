import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private userCollection: AngularFirestoreCollection;
  usuarios: Observable<User[]>;

  constructor(public db: AngularFirestore, public afAuth: AngularFireAuth) {
    this.usuarios = this.db.collection('usuarios').valueChanges();

  }
  
  ngOnInit() {
  }

}
