import { combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import registerReducer from './register.reducer';


const reducers = {
    formData: registerReducer,
    form: formReducer
}

export default combineReducers(reducers);