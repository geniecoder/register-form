import { takeEvery, call, put, all, takeLatest } from 'redux-saga/effects';
import { LOAD_FORM_DATA, SUBMIT_FORM_DATA, SET_FORM_DATA } from '../actions/types';
import { getFormData, fetchData } from '../service/FormServices';
import { setFormData } from '../actions/register.actions';


function* fetchFormData() {
    try {
        const payload = yield call(getFormData);
        yield put({ type: SET_FORM_DATA, payload });
    } catch (error) {
        console.log(error);
    }
}

function* submitFormData() {
    console.log(`submitFormData: from FormData.Saga`);
    try {
        const formData = yield call(fetchData);
        yield put(setFormData(formData));
    } catch (error) {

    }
}

export function* registerSaga() {
    yield all([takeEvery(LOAD_FORM_DATA, fetchFormData),
    takeEvery(SUBMIT_FORM_DATA, submitFormData)
    ]);
}
