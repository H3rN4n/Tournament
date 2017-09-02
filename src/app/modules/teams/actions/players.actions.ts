import { Action } from '@ngrx/store';
import { type } from '../../../utils';

import { _Player, _Team, _Tournament, _Match } from './../models';

// TEAMS MODULE ACTIONS
export const PlayersActionTypes = {
    // ADD_PLAYER: type('[Teams] Add PLAYER'),
    // ADD_PLAYER_SUCCESS: type('[Teams] Add PLAYER Success'),
    // ADD_PLAYER_FAIL: type('[Teams] Add PLAYER Fail'),
    // REMOVE_PLAYER: type('[Teams] Remove PLAYER'),
    // REMOVE_PLAYER_SUCCESS: type('[Teams] Remove PLAYER Success'),
    // REMOVE_PLAYER_FAIL: type('[Teams] Remove PLAYER Fail'),
    LOAD: type('[Players] Load'),
    LOAD_SUCCESS: type('[Players] Load Success'),
    LOAD_FAIL: type('[Players] Load Fail'),
    // CHANGE_MAXPLAYER_PER_TEAM: type('[Teams] Change Max player per team'),
    // CREATE_TEAM: type('[Teams] Create Team'),
    // CREATE_TEAM_SUCCESS: type('[Teams] Create Team Success'),
    // CREATE_TEAM_FAIL: type('[Teams] Create Team Fail'),
    // DELETE_ALL_TEAMS: type('[Teams] Delete All Team'),
    // DELETE_ALL_TEAMS_SUCCESS: type('[Teams] Delete All Team Success')
};

/**
* Add PLAYER to Collection Actions
*/
// export class AddPLAYER implements Action {
//     type = TeamsActionTypes.ADD_PLAYER;

//     constructor(public payload: _Player) { }
// }

// export class AddPLAYERSuccess implements Action {
//     type = TeamsActionTypes.ADD_PLAYER_SUCCESS;

//     constructor(public payload: _Player) { }
// }

// export class AddPLAYERFail implements Action {
//     type = TeamsActionTypes.ADD_PLAYER_FAIL;

//     constructor(public payload: _Player) { }
// }


// /**
//  * Remove PLAYER from Collection Actions
//  */
// export class RemovePLAYER implements Action {
//     type = TeamsActionTypes.REMOVE_PLAYER;

//     constructor(public payload: _Player) { }
// }

// export class RemovePLAYERSuccess implements Action {
//     type = TeamsActionTypes.REMOVE_PLAYER_SUCCESS;

//     constructor(public payload: _Player) { }
// }

// export class RemovePLAYERFail implements Action {
//     type = TeamsActionTypes.REMOVE_PLAYER_FAIL;

//     constructor(public payload: _Player) { }
// }

/**
 * Load Collection Actions
 */
export class Load implements Action {
    type = PlayersActionTypes.LOAD;

    constructor(public payload: any = null) { }
}

export class LoadSuccess implements Action {
    type = PlayersActionTypes.LOAD_SUCCESS;

    constructor(public payload: _Team[]) { }
}

export class LoadFail implements Action {
    type = PlayersActionTypes.LOAD_FAIL;

    constructor(public payload: any) { }
}

// export class ChangeMaxPlayerPerTeam implements Action {
//     type = TeamsActionTypes.CHANGE_MAXPLAYER_PER_TEAM;

//     constructor(public payload: any) { }
// }

// export class CreateTeam implements Action {
//     type = TeamsActionTypes.CREATE_TEAM;

//     constructor() { }
// }

// export class CreateTeamSuccess implements Action {
//     type = TeamsActionTypes.LOAD_SUCCESS;

//     constructor() { }
// }

// export class CreateTeamFail implements Action {
//     type = TeamsActionTypes.LOAD_FAIL;

//     constructor() { }
// }

// export class DeleteAll implements Action {
//   type = TeamsActionTypes.DELETE_ALL_TEAMS;

//   constructor() { }
// }

// export class DeleteAllSuccess implements Action {
//   type = TeamsActionTypes.DELETE_ALL_TEAMS_SUCCESS;

//   constructor() { }
// }





export const PlayersActions = {
    TYPES: PlayersActionTypes,
    // AddPLAYER,
    // AddPLAYERSuccess,
    // AddPLAYERFail,
    // RemovePLAYER,
    // RemovePLAYERSuccess,
    // RemovePLAYERFail,
    Load,
    LoadSuccess,
    LoadFail,
    // ChangeMaxPlayerPerTeam,
    // CreateTeam,
    // CreateTeamSuccess,
    // DeleteAll,
    // DeleteAllSuccess
};


interface Actions {
    TYPES: typeof PlayersActionTypes;
    // AddPLAYER: typeof AddPLAYER;
    // AddPLAYERSuccess: typeof AddPLAYERSuccess;
    // AddPLAYERFail: typeof AddPLAYERFail;
    // RemovePLAYER: typeof RemovePLAYER;
    // RemovePLAYERSuccess: typeof RemovePLAYERSuccess;
    // RemovePLAYERFail: typeof RemovePLAYERFail;
    Load: typeof Load;
    LoadSuccess: typeof LoadSuccess;
    LoadFail: typeof LoadFail;
    // ChangeMaxPlayerPerTeam: typeof ChangeMaxPlayerPerTeam;
    // CreateTeam: typeof CreateTeam;
    // CreateTeamFail: typeof CreateTeamFail;
    // DeleteAll: typeof DeleteAll;
    // DeleteAllSuccess: typeof DeleteAllSuccess;
}
