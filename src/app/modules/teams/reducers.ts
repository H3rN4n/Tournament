// // teams.reducer.ts
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { TeamsActionTypes } from './actions/teams.actions';
import { PlayersActionTypes } from './actions/players.actions';
import {
    teamsState,
    teamState,
    playersState,
    playerState,
    tournamentsState,
    tournamentState,
    matchesState,
    matchState
} from './states';

export const TeamsReducers: ActionReducerMap<any> = teamsReducer;
export const TeamReducer: ActionReducerMap<any> = teamReducer;
export function teamsReducer(state: any = playersState, action: any): any {
    switch (action.type) {
        case TeamsActionTypes.LOAD_SUCCESS: {
            return { ...state, list: action.payload, subscribed: true };
        }
        default: {
            return state;
        }
    }
}
export function teamReducer(state: any = teamsState, action: any): any {
    switch (action.type) {
        // case TeamsActionTypes.CHANGE_MAXPLAYER_PER_TEAM: {
        //     return { ...state, teamPlayerLimit: action.payload };
        // }

        default: {
            return state;
        }
    }
}

export const PlayersReducers: ActionReducerMap<any> = playersReducer;
export const PlayerReducers: ActionReducerMap<any> = playerReducer;
export function playersReducer(state: any = playersState, action: any): any {
    switch (action.type) {
        case PlayersActionTypes.LOAD_SUCCESS: {
            return { ...state, list: action.payload, subscribed: true };
        }
        default: {
            return state;
        }
    }
}
export function playerReducer(state: any = playersState, action: any): any {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export const TournamentsReducers: ActionReducerMap<any> = tournamentsReducer;
export const TournamentReducers: ActionReducerMap<any> = tournamentReducer;
export function tournamentsReducer(state: any = playersState, action: any): any {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
export function tournamentReducer(state: any = playersState, action: any): any {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export const MatchesReducers: ActionReducerMap<any> = matchesReducer;
export const MatchReducers: ActionReducerMap<any> = matchReducer;
export function matchesReducer(state: any = playersState, action: any): any {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export function matchReducer(state: any = playersState, action: any): any {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
