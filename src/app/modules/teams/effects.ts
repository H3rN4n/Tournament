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
import { TeamsActions, TeamsActionTypes } from './actions/teams.actions';
import { PlayersActions, PlayersActionTypes } from './actions/players.actions';
import { MdSnackBar } from '@angular/material';

import { _Team, _Player } from './models';

import {
  TeamsService,
  PlayersService,
  TournamentsService,
  MatchesService
} from './services/firebase.service';

@Injectable()
export class TeamsEffects {

  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 1500,
    });
  }

  // Listen for the 'LOGIN' action
  @Effect() getTeamList$: Observable<Action> = this.actions$
    .ofType(TeamsActionTypes.LOAD)
    .mergeMap((action: any) => {
      return this.teamSrv.list({
        limitToFirst: 0,
        limitToLast: 5
      })
        .map(res => {
          this.openSnackBar("Teams Loaded");
          return new TeamsActions.LoadSuccess(res);
        })
    }

    );

  @Effect() getTeam$: Observable<Action> = this.actions$
    .ofType(TeamsActionTypes.LOAD_SINGLE)
    .mergeMap((action: any) => {
      return this.teamSrv.getItem(action.payload)
        .map(res => {
          this.openSnackBar("Team Loaded");
          console.log('Team Loaded', res)
          return new TeamsActions.LoadSingleSuccess(res);
        })

    }

    );

  // @Effect() deleteAllTeam$: Observable<Action> = this.actions$
  // .ofType(TeamsActionTypes.DELETE_ALL_TEAMS)
  // .switchMap((action) => {
  //   this.teamSrv.deleteAll();
  //   return Observable.of(new TeamsActions.DeleteAllSuccess());
  // });

  // getItemsList
  // getItem
  // createItem
  // @Effect() createTeam$: Observable<Action> = this.actions$
  //   .ofType(TeamsActionTypes.CREATE_TEAM)
  //   .switchMap((action) => {
  //     const newUser = { imgUrl: '', name: 'TeamX', players: [] };
  //     this.teamSrv.createItem(newUser);
  //     return Observable.of(new TeamsActions.CreateTeamSuccess());
  //   });
  // updateItem
  // deleteItem
  // deleteAll

  constructor(
    private teamSrv: TeamsService,
    private playerSrv: PlayersService,
    private tournamentSrv: TournamentsService,
    private matchSrv: MatchesService,
    private actions$: Actions,
    public snackBar: MdSnackBar
  ) { }
}


@Injectable()
export class PlayersEffects {

  openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 1500,
    });
  }

  // Listen for the 'LOGIN' action
  @Effect() getPlayersList$: Observable<Action> = this.actions$
    .ofType(PlayersActionTypes.LOAD)
    .mergeMap((action: any) => {
      console.log(action);
      var query = action.payload.equalTo;
      if (action.payload.equalTo > 0) {
        return this.playerSrv.list({
          limitToFirst: 0,
          limitToLast: 12,
          orderByChild: 'teamId',
          equalTo: parseInt(action.payload.equalTo)
        })
          .map(res => {
            this.openSnackBar("Players Loaded");
            console.log(res, "Players Loaded")
            return new PlayersActions.LoadSuccess(res)
          })
      }
    }
    );

    @Effect() getPlayer$: Observable<Action> = this.actions$
    .ofType(PlayersActionTypes.LOAD_SINGLE)
    .mergeMap((action: any) => {
      return this.playerSrv.getItem(action.payload)
        .map(res => {
          this.openSnackBar("Player Loaded");
          console.log('Player Loaded', res)
          return new PlayersActions.LoadSingleSuccess(res);
        })

    }

    );

  constructor(
    private teamSrv: TeamsService,
    private playerSrv: PlayersService,
    private tournamentSrv: TournamentsService,
    private matchSrv: MatchesService,
    private actions$: Actions,
    public snackBar: MdSnackBar
  ) { }
}
