import * as actions from '../actions';

const initialState = {
    gameStarted: false
};

export const someReducer = (state = initialState, action) => {
    if (action.type === actions.START_GAME) {
        return Object.assign({}, state, {
            gameStarted: action.startGame
        });
    }
    return state;
};