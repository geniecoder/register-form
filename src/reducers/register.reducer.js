import { LOAD_FORM_DATA, SUBMIT_FORM_DATA, HIDE_DIALOG,  SET_FORM_DATA, SUBMIT_SUCCESS, SUBMIT_FAIL } from '../actions/types';

export const registerInitialState = {
    colorList: [],
    dialogVisible: false
};

const registerReducer = (state = registerInitialState, action) => {
    switch (action.type) {
        case LOAD_FORM_DATA:
            return { ...state, isLoading: true };
        case SET_FORM_DATA:
            return { ...state, colorList: action.payload, isLoading: false };
        case SUBMIT_SUCCESS:
            return { ...state, isSubmitSuccess: true, isDataSubmiting: false, dialogVisible: true }
        case SUBMIT_FAIL:
            return { ...state, isSubmitSuccess: false, errorMsg: action.payload.errorMsg, isDataSubmiting: false }
        case SUBMIT_FORM_DATA:
            return {...state, isDataSubmiting: true}
        case HIDE_DIALOG:
            return {...state, dialogVisible: false}
        default:
            return state;
    }
}

export default registerReducer;