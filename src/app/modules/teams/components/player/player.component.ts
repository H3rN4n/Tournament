import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Input } from '@angular/core';

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
import { PlayersActions, TeamsActions } from './../../actions'
import { fadeInAnimation } from './../../../../animations';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  animations: [fadeInAnimation]
})
export class PlayerComponent implements OnInit {

  // _fromTeam: number;
  // @Input()
  // set fromTeam(fromTeam: number) {
  //   this._fromTeam = fromTeam;
  //   this.store.dispatch(new PlayersActions.Load({equalTo: fromTeam}));
  // }
  // get fromTeam() { return this._fromTeam; }


  id: any;
  player$: Observable<_Player>;
  playerData: _Player;
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
    this.player$ = store.select('Player');
  }

  ngOnInit() {

    const playerSubcription: Subscription = this.player$.subscribe(data => {
      this.playerData = data;
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.store.dispatch(new PlayersActions.LoadSingle(this.id));
    });

    this.subscriptions.push(playerSubcription);

  }

  ngOnDetroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }

}
