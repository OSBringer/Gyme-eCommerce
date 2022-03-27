import userReducer from '../features/user/userSlice';
import cartReducer from '../features/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
    counter: counterReducer,
    user:userReducer,
    cart:cartReducer,
 });

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = (state, action) => {
  //return reducers(undefined, action);
  // if(action.type==='editQuantity'){
  //   storage.removeItem('persist:root')
  //   return reducers(undefined, action);
    
  // }
  return reducers(state, action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
