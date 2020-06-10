import CurrencyReducer from './CurrencyReducer';
import LoginReducer from './LoginReducer';
import {createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {loadState, saveState} from './LocalStorage';

let reducers = combineReducers({
   currencyPage : CurrencyReducer,
   loginPage : LoginReducer,
   form : formReducer
});

const persistedState = loadState();

let store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState({
    loginPage: store.getState().loginPage
  });
});



export default store;