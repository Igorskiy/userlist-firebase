import * as inputSelectors from './reducers/inputReducer';
import * as usersSelectors  from './reducers/usersReducer';
import * as popupSelectors from './reducers/popupReducer';

export const getName = state => inputSelectors.getName(state.input);
export const getSurname = state => inputSelectors.getSurname(state.input);
export const getPhoneNumber = state => inputSelectors.getPhoneNumber(state.input);
export const getShowPopup = state => popupSelectors.getPopupShow(state.popup);
export const getActionStatus = state => inputSelectors.getIsActive(state.input);
export const getUsers = state => usersSelectors.getUsersList(state.users);
export const getIsFiltered = state => usersSelectors.getIsFilteredUsers(state.users);
