import { LOAD_FORM_DATA, FORM_DATA_SUCCESS, SUBMIT_FORM_DATA, SET_FORM_DATA } from './types';

export const loadFormData = () => {
    console.log(`action loadFormData`);
    return { type: LOAD_FORM_DATA };
}

export const setFormData = (data) => {
    console.log(`action setFormData`);
    return {
        type: SET_FORM_DATA,
        payload: data
    }
}
export const submitFormData = (data) => {
    console.log(`action submitFormData`);
    return {
        type: SUBMIT_FORM_DATA,
        payload: data
    }
}