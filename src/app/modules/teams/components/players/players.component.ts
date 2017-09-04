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
import { PlayersActions } from './../../actions/players.actions'
import { fadeInAnimation, slideInAnimation } from './../../../../animations';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  animations: [fadeInAnimation, slideInAnimation]
})
export class PlayersComponent implements OnInit {

  _fromTeam: number;
  @Input()
  set fromTeam(fromTeam: number) {
    this._fromTeam = fromTeam;
    this.store.dispatch(new PlayersActions.Load({equalTo: fromTeam}));
  }
  get fromTeam() { return this._fromTeam; }


  id: any;
  players$: Observable<_Players>;
  playersData: any[] = [];
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
    this.players$ = store.select('Players');
    //this.players$ = store.select('Players');
  }

  ngOnInit() {
    const playersSubcription: Subscription = this.players$.subscribe(data => {
      this.playersData = data.list;
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    this.subscriptions.push(playersSubcription);

    if(!this.playersData.length){
      this.store.dispatch(new PlayersActions.Load({equalTo: this.fromTeam}));
    }
    
  }

  ngOnDetroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }


  createUser(){
    //this.store.dispatch(new TeamsActions.CreateTeam())
  }

  deleteAll(){
    // this.store.dispatch(new TeamsActions.DeleteAll())
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
