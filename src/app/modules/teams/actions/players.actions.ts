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
    LOAD_SINGLE: type('[Players] Load Single'),
    LOAD_SINGLE_SUCCESS: type('[Players] Load Single Success'),
    LOAD_SINGLE_FAIL: type('[Players] Load Single Fail'),
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
// class AddPLAYER implements Action {
//     type = TeamsActionTypes.ADD_PLAYER;

//     constructor(public payload: _Player) { }
// }

// class AddPLAYERSuccess implements Action {
//     type = TeamsActionTypes.ADD_PLAYER_SUCCESS;

//     constructor(public payload: _Player) { }
// }

// class AddPLAYERFail implements Action {
//     type = TeamsActionTypes.ADD_PLAYER_FAIL;

//     constructor(public payload: _Player) { }
// }


// /**
//  * Remove PLAYER from Collection Actions
//  */
// class RemovePLAYER implements Action {
//     type = TeamsActionTypes.REMOVE_PLAYER;

//     constructor(public payload: _Player) { }
// }

// class RemovePLAYERSuccess implements Action {
//     type = TeamsActionTypes.REMOVE_PLAYER_SUCCESS;

//     constructor(public payload: _Player) { }
// }

// class RemovePLAYERFail implements Action {
//     type = TeamsActionTypes.REMOVE_PLAYER_FAIL;

//     constructor(public payload: _Player) { }
// }

/**
 * Load Collection Actions
 */
class Load implements Action {
    type = PlayersActionTypes.LOAD;

    constructor(public payload: any = null) { }
}

class LoadSuccess implements Action {
    type = PlayersActionTypes.LOAD_SUCCESS;

    constructor(public payload: _Team[]) { }
}

class LoadFail implements Action {
    type = PlayersActionTypes.LOAD_FAIL;

    constructor(public payload: any) { }
}

class LoadSingle implements Action {
    type = PlayersActionTypes.LOAD_SINGLE;

    constructor(public payload: _Team) { }
}


class LoadSingleSuccess implements Action {
    type = PlayersActionTypes.LOAD_SINGLE_SUCCESS;

    constructor(public payload: _Team) { }
}

class LoadSingleFail implements Action {
    type = PlayersActionTypes.LOAD_SINGLE_FAIL;

    constructor(public payload: any) { }
}

// class ChangeMaxPlayerPerTeam implements Action {
//     type = TeamsActionTypes.CHANGE_MAXPLAYER_PER_TEAM;

//     constructor(public payload: any) { }
// }

// class CreateTeam implements Action {
//     type = TeamsActionTypes.CREATE_TEAM;

//     constructor() { }
// }

// class CreateTeamSuccess implements Action {
//     type = TeamsActionTypes.LOAD_SUCCESS;

//     constructor() { }
// }

// class CreateTeamFail implements Action {
//     type = TeamsActionTypes.LOAD_FAIL;

//     constructor() { }
// }

// class DeleteAll implements Action {
//   type = TeamsActionTypes.DELETE_ALL_TEAMS;

//   constructor() { }
// }

// class DeleteAllSuccess implements Action {
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
    LoadSingle,
    LoadSingleSuccess,
    LoadSingleFail
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
    LoadSingle: typeof LoadSingle;
    LoadSingleSuccess: typeof LoadSingleSuccess;
    LoadSingleFail: typeof LoadSingleFail;
    // ChangeMaxPlayerPerTeam: typeof ChangeMaxPlayerPerTeam;
    // CreateTeam: typeof CreateTeam;
    // CreateTeamFail: typeof CreateTeamFail;
    // DeleteAll: typeof DeleteAll;
    // DeleteAllSuccess: typeof DeleteAllSuccess;
}
