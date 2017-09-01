import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

import { 
  TeamsService,
  PlayersService,
  TournamentsService,
  MatchesService
} from './../../services/firebase.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import { _Player, _Team, _Match, _Teams, _Players } from './../../models';
import { TeamsActions } from './../../actions'

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  id: any;
  teams$: Observable<_Teams>;
  players$: Observable<_Players>;
  matchData: _Teams;
  teamsData: any[] = [];
  playersData: any;
  subscriptions: Subscription[] = [];
  posibleTeamSize = [1, 2, 4];
  errors = [];

  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private teamSrv: TeamsService,
    private playerSrv: PlayersService,
    private tournamentSrv: TournamentsService,
    private matchSrv: MatchesService

  ) {
    this.teams$ = store.select('Teams');
    this.players$ = store.select('Players');
  }

  ngOnInit() {
    const teamsSubcription: Subscription = this.teams$.subscribe(data => {
      this.matchData = data;
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    this.subscriptions.push(teamsSubcription);

    if(!this.matchData.list.length){
      this.store.dispatch(new TeamsActions.Load());
    }
    
  }

  ngOnDetroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }

  createUser(){
    this.store.dispatch(new TeamsActions.CreateTeam())
  }

  deleteAll(){
    this.store.dispatch(new TeamsActions.DeleteAll())
  }

  // changeMaxTeamSize($event) {
  //   this.store.dispatch(new TeamsActions.ChangeMaxPlayerPerTeamAction($event.value))
  // }

  // private countTeamPlayers() {
  //   this.totalPerTeam = [];
  //   if (this.matchData.players.length > 0) {
  //     this.matchData.players.forEach(element => {
  //       console.log(element.team)
  //       //this.totalPerTeam[element.team -1]++;
  //     });
  //     //this.validateTeamSize();
  //     console.log(this.totalPerTeam)
  //   }
  // };

  // private validateTeamSize() {
  //   console.log('validateTeamSize')
  //   this.totalPerTeam.forEach(item => {
  //     (item > this.matchData.teamPlayerLimit) ? this.errors.push('Your teams exceed the limit setted') : this.errors = [];
  //   })
  // }

  public removePlayer(playerId) {
    console.log('panel deletePlayer', playerId);
  }

  public save() {
    console.log('save');
  }

  public addPlayer($event) {
    console.log('addplayer', $event);
  }

}
