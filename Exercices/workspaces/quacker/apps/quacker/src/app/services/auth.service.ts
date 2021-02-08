import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$ = this.angularFireAuth.user;

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  public loginWithGoogle(): Observable<UserCredential> {
    return from(this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
  }
}
