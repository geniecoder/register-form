import { takeEvery, call, put, all, takeLatest } from 'redux-saga/effects';
import { LOAD_FORM_DATA, SUBMIT_FORM_DATA, SET_FORM_DATA } from '../actions/types';
import { getFormData, submitFormData } from '../service/FormServices';
import { setFormData, formDataSuccess } from '../actions/register.actions';


function* fetchFormData() {
    try {
        const payload = yield call(getFormData);
        yield put({ type: SET_FORM_DATA, payload });
    } catch (error) {
        console.log(error);
    }
}

function* saveFormData(action) {
        const payload = yield call(submitFormData, action.payload);
        yield put(formDataSuccess(payload));
}

export function* registerSaga() {
    yield all([takeEvery(LOAD_FORM_DATA, fetchFormData),
    takeEvery(SUBMIT_FORM_DATA, saveFormData)
    ]);
}
