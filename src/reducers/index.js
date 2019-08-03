import * as actions from '../actions';

const initialState = {
    players: 2
};

export const someReducer = (state = initialState, action) => {
    if (action.type === actions.SET_PLAYERS) {
        return Object.assign({}, state, {
            players: action.players
        });
    }
    return state;
};