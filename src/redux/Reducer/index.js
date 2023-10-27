import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actions } from '../Actions';
import { showLogin } from './Authentication';

const appReducer = combineReducers({
  showLogin
});

const rootReducer = (state, action) => {   
  // Clear all data in redux store to initial.
  if(action.type === Actions.DESTROY_SESSION) {
    state = undefined;
    AsyncStorage.clear();
  }
  
  return appReducer(state, action);
};
export default rootReducer;