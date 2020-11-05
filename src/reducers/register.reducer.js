import { LOAD_FORM_DATA, SUBMIT_FORM_DATA, FORM_DATA_SUCCESS, FORM_DATA_FAIL, SET_FORM_DATA } from '../actions/types';

export const registerInitialState = {
    colorList: []
};

const registerReducer = (state = registerInitialState, action) => {
    switch (action.type) {
        case LOAD_FORM_DATA:
            return { ...state, isLoading: true };
        case SET_FORM_DATA:
            return { ...state, colorList: action.payload, isLoading: false };
        default:
            return state;
    }
}

export default registerReducer;