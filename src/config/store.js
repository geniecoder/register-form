import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from '../reducers';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['authReducer']
  }
const persistedReducer = persistReducer(persistConfig, reducers)


 
export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware());
  let persistor = persistStore(store)
  return { store, persistor }
}
