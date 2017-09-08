import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import {
  TeamsService,
  PlayersService,
  TournamentsService,
  MatchesService
} from './../../services/firebase.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { _Player, _Team, _Match, _Teams, _Players } from './../../models';
import { TeamsActions } from './../../actions/teams.actions';
import { slideInAnimation, fadeInAnimation } from './../../../../animations';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
  animations: [slideInAnimation, fadeInAnimation]
})
export class MatchComponent implements OnInit {
  id: any;
  match$: Observable<_Match>;
  matchData: _Match;
  subscriptions: Subscription[] = [];
  errors = [];
  results: any = {
    actions: []
  };

  constructor(
    // private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
    private matchSrv: MatchesService,
    private http: HttpClient

  ) {
    // this.match$ = store.select('Match');
    // this.players$ = store.select('Players');
  }

  ngOnInit() {
    // const matchSubcription: Subscription = this.match$.subscribe(data => {
    //   this.matchData = data;
    // });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    // this.subscriptions.push(matchSubcription);

    // if(!this.matchData.list.length){
    //   //this.store.dispatch(new TeamsActions.Load());
    // }

    this.showDetail();

  }

  showDetail() {

    const players = [{ "imageUrl": "http://futhead.cursecdn.com/static/img/17/players_alt/p151152967.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/52.png", "name": "Lionel Messi", "rating": "99", "from": "RW | FC Barcelona | LaLiga Santander", "stats": { "pac": "97", "sho": "99", "pas": "98", "dri": "99", "def": "45", "phy": "82" }, "teamId": 14 }, { "imageUrl": "http://futhead.cursecdn.com/static/img/17/players_alt/p201347393.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/38.png", "name": "Cristiano Ronaldo", "rating": "99", "from": "LW | Real Madrid CF | LaLiga Santander", "stats": { "pac": "98", "sho": "99", "pas": "91", "dri": "99", "def": "48", "phy": "92" }, "teamId": 0 }, { "imageUrl": "http://futhead.cursecdn.com/static/img/17/players_alt/p117461313.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/38.png", "name": "Cristiano Ronaldo", "rating": "99", "from": "LW | Real Madrid CF | LaLiga Santander", "stats": { "pac": "98", "sho": "99", "pas": "92", "dri": "98", "def": "50", "phy": "94" }, "teamId": 0 }, { "imageUrl": "http://futhead.cursecdn.com/static/img/17/players_alt/p84053744.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/52.png", "name": "Gonzalo Higuaín", "rating": "98", "from": "ST | Juventus | Calcio A", "stats": { "pac": "89", "sho": "99", "pas": "91", "dri": "98", "def": "50", "phy": "96" }, "teamId": 3 }, { "imageUrl": "http://futhead.cursecdn.com/static/img/17/players_alt/p184740247.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/54.png", "name": "Neymar", "rating": "98", "from": "LW | FC Barcelona | LaLiga Santander", "stats": { "pac": "97", "sho": "98", "pas": "97", "dri": "99", "def": "48", "phy": "83" }, "teamId": 14 }, { "imageUrl": "http://futhead.cursecdn.com/static/img/17/players_alt/p218292353.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/37.png", "name": "Robert Lewandowski", "rating": "98", "from": "ST | FC Bayern München | Bundesliga", "stats": { "pac": "89", "sho": "99", "pas": "93", "dri": "98", "def": "57", "phy": "97" }, "teamId": 1 }, { "imageUrl": "http://futhead.cursecdn.com/static/img/17/players_alt/p218287085.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/7.png", "name": "Eden Hazard", "rating": "98", "from": "LW | Chelsea | Premier League", "stats": { "pac": "98", "sho": "96", "pas": "96", "dri": "99", "def": "50", "phy": "84" }, "teamId": 4 }, { "imageUrl": "http://futhead.cursecdn.com/static/img/17/players/20801.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/38.png", "name": "Cristiano Ronaldo", "rating": "98", "from": "ST | Real Madrid CF | LaLiga Santander", "stats": { "pac": "96", "sho": "97", "pas": "90", "dri": "96", "def": "42", "phy": "88" }, "teamId": 0 }, { "imageUrl": "http://futhead.cursecdn.com/static/img/17/players_alt/p167792961.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/38.png", "name": "Cristiano Ronaldo", "rating": "98", "from": "LW | Real Madrid CF | LaLiga Santander", "stats": { "pac": "96", "sho": "97", "pas": "90", "dri": "96", "def": "42", "phy": "88" }, "teamId": 0 }, { "imageUrl": "http://futhead.cursecdn.com/static/img/17/players_alt/p67266887.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/52.png", "name": "Lionel Messi", "rating": "98", "from": "RW | FC Barcelona | LaLiga Santander", "stats": { "pac": "97", "sho": "99", "pas": "97", "dri": "99", "def": "45", "phy": "80" }, "teamId": 14 }, { "imageUrl": "http://futhead.cursecdn.com/static/img/17/players_alt/p84062660.png", "nationImageUrl": "http://futhead.cursecdn.com/static/img/17/nations/60.png", "name": "Luis Suárez", "rating": "98", "from": "ST | FC Barcelona | LaLiga Santander", "stats": { "pac": "93", "sho": "99", "pas": "92", "dri": "97", "def": "60", "phy": "93" }, "teamId": 14 }]
    const team1: Team = new Team([players[0], players[1], players[2], players[3], players[4]]);
    const team2: Team = new Team([players[5], players[6], players[7], players[8], players[9]]);

    // this.http.post('http://localhost:4201/matchCalculation', {
      this.http.post('https://us-central1-amber-fire-6718.cloudfunctions.net/matchCalculation', {
      team1: team1.toString(),
      team2: team2.toString()
  }).subscribe(data => {
      // Read the result field from the JSON response.
      console.log('cloudfunctions', data);
      this.results = data;
    });
  }

  ngOnDetroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}


class Team {

  constructor(players) {
    this.players = players;
  }

  players = [
    {
      position: '',
      stats: {
        "pac": 0,
        "sho": 0,
        "pas": 0,
        "dri": 0,
        "def": 0,
        "phy": 0
      }
    }
  ]
  plannning: {
    ofensive: 10,
    defence: 10,
    neutral: 10 //GK?
  }

}
