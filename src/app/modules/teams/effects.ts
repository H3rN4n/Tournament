// ./effects/auth.ts
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';
import { TeamsActions, TeamsActionTypes } from './actions';

import { _Team } from './models';

import {
  TeamsService,
  PlayersService,
  TournamentsService,
  MatchesService
} from './services/firebase.service';

@Injectable()
export class TeamsEffects {
  // Listen for the 'LOGIN' action
  @Effect() getTeamList$: Observable<Action> = this.actions$
    .ofType(TeamsActionTypes.LOAD)
    .mergeMap(action =>
      this.teamSrv.list()
        .map(res => new TeamsActions.LoadSuccess(res))
    );

    @Effect() deleteAllTeam$: Observable<Action> = this.actions$
    .ofType(TeamsActionTypes.DELETE_ALL_TEAMS)
    .switchMap((action) => {
      this.teamSrv.deleteAll();
      return Observable.of(new TeamsActions.DeleteAllSuccess());
    });

  // getItemsList
  // getItem
  // createItem
  @Effect() createTeam$: Observable<Action> = this.actions$
    .ofType(TeamsActionTypes.CREATE_TEAM)
    .switchMap((action) => {
      const newUser = { imgUrl: '', name: 'TeamX', players: [] };
      this.teamSrv.createItem(newUser);
      return Observable.of(new TeamsActions.CreateTeamSuccess());
    });
  // updateItem
  // deleteItem
  // deleteAll

  constructor(
    private teamSrv: TeamsService,
    private playerSrv: PlayersService,
    private tournamentSrv: TournamentsService,
    private matchSrv: MatchesService,
    private actions$: Actions
  ) { }
}
