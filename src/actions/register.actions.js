import { LOAD_FORM_DATA, HIDE_DIALOG, SUBMIT_FORM_DATA, SET_FORM_DATA , SUBMIT_SUCCESS, SUBMIT_FAIL} from './types';

export const loadFormData = () => {
    return { type: LOAD_FORM_DATA };
}

export const setFormData = (data) => {
    return {
        type: SET_FORM_DATA,
        payload: data
    }
}
export const submitFormData = (data) => {
    return {
        type: SUBMIT_FORM_DATA,
        payload: data
    }
}

export const formDataSuccess = (data) =>{
    return {
        type: SUBMIT_SUCCESS,
        payload: data
    }
}

export const hideDialog = () => {
    return{
        type: HIDE_DIALOG
    }
}