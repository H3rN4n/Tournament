import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../core/components/home/home.component';
import { SettingsComponent } from './../core/components/settings/settings.component';
import { MatchComponent } from './../teams/components/match/match.component';
import { TeamComponent } from './../teams/components/team/team.component';
import { TournamentsComponent } from './../teams/components/tournaments/tournaments.component';
import { TournamentComponent } from './../teams/components/tournament/tournament.component';
import { PlayerComponent } from './../teams/components/player/player.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'match/:id',
    component: MatchComponent
  },
  {
    path: 'match/new',
    component: MatchComponent
  },
  {
    path: 'team/:id',
    component: TeamComponent
  },
  {
    path: 'team/new',
    component: TeamComponent
  },
  {
    path: 'tournament/:id',
    component: TournamentComponent
  },
  {
    path: 'tournament/new',
    component: TournamentComponent
  },
  {
    path: 'tournaments/',
    component: TournamentsComponent
  },
  {
    path: 'player/:id',
    component: PlayerComponent
  },
  {
    path: 'player/new',
    component: PlayerComponent
  },
  { path: 'backoffice', loadChildren: './../backoffice/backoffice.module#BackofficeModule'},
  { path: 'pack', loadChildren: './../pack/pack.module#PackModule'},
  { path: '**', component: HomeComponent },
];
