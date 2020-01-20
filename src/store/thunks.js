import * as inputActions from './reducers/inputReducer';
import { checkAllDataValid, showInvalidData } from '../misc/helpers'
import { setUsers } from './reducers/usersReducer';
import { addUser, updateUser } from './reducers/userReducer';
import { togglePopup } from './reducers/popupReducer';
import { userRef } from '../index';

export const cancel = () => dispatch => {
  dispatch(inputActions.inputsReset());
  dispatch(togglePopup());
}

export const addNewUser = (values, id) => dispatch => {
  if (checkAllDataValid(values)) {
  dispatch(addUser(values, id));
  dispatch(inputActions.inputsReset());
  dispatch(togglePopup());
  } 
  else {
    alert(
    `Данные введены неправильно, пожалуйста проверьте корректность данных:
      ${showInvalidData(values)}`);
  }
};

export const editUser = (values, id) => dispatch => {
  if (checkAllDataValid(values)) {
    dispatch(updateUser(values, id));
  } 
  else alert(
    `Данные введены неправильно, пожалуйста проверьте корректность данных:
      ${showInvalidData(values)}
    `
   );

  dispatch(inputActions.inputsReset());
};

export const showUsers = (filter) => dispatch => {
  switch(filter) {
    case 'all':
      return userRef
      .on('value', snap =>(
        dispatch(setUsers(Object.values(snap.val())))
      ));
    case 'active':
      return userRef
      .orderByChild('isActive')
      .equalTo('active')
      .on('value', snap =>(
        snap.val() 
        ? dispatch(setUsers(Object.values(snap.val())))
        : dispatch(setUsers([]))
      ));
    case 'inactive':
      return userRef
      .orderByChild('isActive')
      .equalTo('inactive')
      .on('value', snap =>(
        snap.val() 
        ? dispatch(setUsers(Object.values(snap.val())))
        : dispatch(setUsers([]))
      ));
    default: return ;
  }
};