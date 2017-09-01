import { _Player, _Teams,_Team, _Players, _Match, _Matches, _Tournaments, _Tournament } from './models'
import uuid from 'uuid';

export const playersState: _Players = {
    subscribed: false,
    list: []
}

export const matchesState: _Matches = {
    subscribed: false,
    list: []
}

export const teamsState: _Teams = {
    subscribed: false,
    list: []
};

export const tournamentsState: _Tournaments = {
    subscribed: false,
    list: []
};


export const playerState: _Player = {
    name: '',
    imgUrl: '',
    team: 0
}

export const matchState: _Match = {
    teams: [],
    teamPlayerLimit: 0,
    duelDate: new Date(),
    result: ''
}


export const teamState: _Team = {
    imgUrl: '',
    name: '',
    players: []
}

export const tournamentState: _Tournament = {
    teams: [],
    matches: []
}

// players: [
//     {
//         id: uuid.v4(),
//         name: 'ABC',
//         team: 1
//     },
//     {
//         id: uuid.v4(),
//         name: 'DEF',
//         team: 1
//     },
//     {
//         id: uuid.v4(),
//         name: 'HIA',
//         team: 1
//     },
//     {
//         id: uuid.v4(),
//         name: 'POS',
//         team: 1
//     },
//     {
//         id: uuid.v4(),
//         name: 'DEF',
//         team: 1
//     },
//     {
//         id: uuid.v4(),
//         name: 'VBN',
//         team: 1
//     },
//     {
//         id: uuid.v4(),
//         name: 'WFK',
//         team: 2
//     },
//     {
//         id: uuid.v4(),
//         name: 'ZYX',
//         team: 2
//     },
//     {
//         id: uuid.v4(),
//         name: 'YUI',
//         team: 2
//     }
// ]
