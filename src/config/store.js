import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import { registerSaga} from '../sagas/Register.Saga';
//import mySaga from '../sagas/Register.Saga'


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer']
}
const persistedReducer = persistReducer(persistConfig, reducers)


//let store = createStore(persistedReducer, {}, applyMiddleware(sagaMiddleware));

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)
let persistor = persistStore(store)
sagaMiddleware.run(registerSaga);
//sagaMiddleware.run(rootSaga);

//const action = type => store.dispatch({type})

export default () => {

  return { store, persistor }
}
