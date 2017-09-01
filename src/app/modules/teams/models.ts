export interface _Teams {
  subscribed: boolean;
  list: _Team[];
}

export interface _Players {
  subscribed: boolean;
  list: _Player[];
}

export interface _Matches {
  subscribed: boolean;
  list: _Player[];
}

export interface _Tournaments {
  subscribed: boolean;
  list: _Player[];
}

export interface _Player {
  $key?: string;
  name: string;
  imgUrl: string;
  team: number;
}

export interface _Team {
  $key?: string;
  imgUrl: string;
  name: string;
  players: _Player[];
}
export interface _Match {
  $key?: string;
  teams: _Team[];
  teamPlayerLimit: number;
  duelDate: Date;
  result: string;
}

export interface _Tournament {
  $key?: string;
  teams: _Team[];
  matches: _Match[]
}
