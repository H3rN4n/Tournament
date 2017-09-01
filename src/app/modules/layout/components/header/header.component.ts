import { Component, OnInit } from '@angular/core';
import { AfService } from './../../../auth/providers/af.service';
import { MdSnackBar } from '@angular/material';

import { AuthActions } from './../../../auth/actions';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  auth$: Observable<any>;
  authSubcription: Subscription;
  authData = {};

  constructor(
    public afs: AfService,
    public snackBar: MdSnackBar,
    private store: Store<any>
  ) {
    this.auth$ = store.select('Auth');
    this.auth$.subscribe((data) => {
      this.authData = data;
    })
  }

  ngOnInit() {
    this.checkSession();
  }

  login() {
    this.afs.login();
  }

  logout() {
    this.afs.logout();
    this.openSnackBar("You are logged out");
    this.store.dispatch(new AuthActions.LogoutAction());
  }

  openSnackBar(message) {
    this.snackBar.open(message, '',{
      duration: 1000,
    });
  }

  checkSession() {
    this.afs.user.subscribe((data) => {
      if (data) {
        this.openSnackBar("You are logged in");
        this.store.dispatch(new AuthActions.LoginSuccessAction(data));
      }
    });

  }

}
