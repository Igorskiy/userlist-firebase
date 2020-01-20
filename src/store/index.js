import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import inputReducer from './reducers/inputReducer';
import userReducer from './reducers/userReducer';
import usersReducer  from './reducers/usersReducer';
import popupReducer from './reducers/popupReducer';

const reducer = combineReducers({
  input: inputReducer,
  users: usersReducer,
  user: userReducer,
  popup: popupReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
