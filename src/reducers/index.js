import * as actions from '../actions';

const initialState = {
    fakeObject: ['fake data 1', 'fake data 2']
};

export const someReducer = (state = initialState, action) => {
    if (action.type === actions.ADD_FAKE_DATA) {
        return Object.assign({}, state, {
            fakeObject: [...state.fakeObject, action.fakeData]
        });
    }
    return state;
};