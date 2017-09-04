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
import { TeamsActions } from './../../actions';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  id: any;
  team$: Observable<_Team>;
  teamData: any = {};
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
    this.team$ = store.select('Team');
    //this.players$ = store.select('Players');
  }

  ngOnInit() {
    const TeamSubcription: Subscription = this.team$.subscribe(data => {
      this.teamData = data;
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.store.dispatch(new TeamsActions.LoadSingle(this.id));
    });

    this.subscriptions.push(TeamSubcription);

    if(!this.teamData.name){
      this.store.dispatch(new TeamsActions.LoadSingle(this.id));
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

