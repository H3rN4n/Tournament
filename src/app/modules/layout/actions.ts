import { Action } from '@ngrx/store';
import { type } from '../../utils';

//TEAMS MODULE ACTIONS
export const TeamsActionTypes = {
};

export const TeamsActions = {
    TYPES: TeamsActionTypes,
};


interface Actions {
    collection: {
        TYPES: typeof TeamsActionTypes
    };
}