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
import { TeamsActions } from './../../actions/teams.actions';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  id: any;
  players$: Observable<_Players>;
  playersData: any[] = [];
  subscriptions: Subscription[] = [];
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
    this.players$ = store.select('Team');
    //this.players$ = store.select('Players');
  }

  ngOnInit() {
    const PlayerListSubcription: Subscription = this.players$.subscribe(data => {
      this.playersData = data.list;
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    this.subscriptions.push(PlayerListSubcription);

    if(!this.playersData.length){
      //this.store.dispatch(new PlayersActions.Load());
    }
    
  }

  ngOnDetroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }

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

