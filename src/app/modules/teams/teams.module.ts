import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdListModule,
  MdCardModule,
  MdIconModule,
  MdSelectModule,
  MdButtonModule,
  MdInputModule,
  MdSnackBarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MatchComponent } from './components/match/match.component';
import { AddItemComponent } from './components/add-item/add-item.component';

import {
  TeamsService,
  PlayersService,
  TournamentsService,
  MatchesService
} from './services/firebase.service';

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import {
  TeamReducer,
  TeamsReducers,
  PlayerReducers,
  PlayersReducers,
  TournamentReducers,
  TournamentsReducers,
  MatchesReducers,
  MatchReducers
} from './reducers';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';

import { EffectsModule } from '@ngrx/effects';
import { TeamsEffects, PlayersEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    MdListModule,
    MdIconModule,
    MdSelectModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    MdCardModule,
    FormsModule,
    RouterModule,
    StoreModule.forFeature('Teams', TeamsReducers),
    StoreModule.forFeature('Team', TeamReducer),
    StoreModule.forFeature('Players', PlayersReducers),
    StoreModule.forFeature('Player', PlayerReducers),
    StoreModule.forFeature('Tournaments', TournamentsReducers),
    StoreModule.forFeature('Tournament', TournamentReducers),
    StoreModule.forFeature('Matches', MatchesReducers),
    StoreModule.forFeature('Match', MatchReducers),
    EffectsModule.forFeature([TeamsEffects]),
    EffectsModule.forFeature([PlayersEffects])
  ],
  exports: [ListComponent, ListItemComponent],
  providers: [
    TeamsService,
    PlayersService,
    TournamentsService,
    MatchesService
  ],
  declarations: [
    ListComponent,
    ListItemComponent,
    MatchComponent,
    AddItemComponent,
    TournamentComponent,
    TournamentsComponent,
    MatchesComponent,
    TeamsComponent,
    TeamComponent,
    PlayersComponent,
    PlayerComponent
  ]
})
export class TeamsModule { }
