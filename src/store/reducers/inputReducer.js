const SET_NAME = 'SET_NAME';
const SET_SURNAME = 'SET_SURNAME';
const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
const SET_IS_ACTIVE = 'SET_IS_ACTIVE';
const INPUTS_RESET = 'INPUTS_RESET';

export const inputsReset = () => ({ type: INPUTS_RESET });

export const setIsActive = actionStatus => ({
  type: SET_IS_ACTIVE,
  actionStatus,
});

export const setPhoneNumber = phoneNumber => ({
  type: SET_PHONE_NUMBER,
  phoneNumber,
});
export const setSurname = surname => ({
  type: SET_SURNAME,
  surname,
});
export const setName = name => ({
  type: SET_NAME,
  name,
});

export const getPhoneNumber = state => state.phoneNumber;
export const getName = state => state.name;
export const getSurname = state => state.surname;
export const getIsActive = state => state.actionStatus;

const initialState = {
  name: '',
  surname: '',
  phoneNumber: '',
  actionStatus: 'active',
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name.trim(),
      };
    case SET_SURNAME:
      return {
        ...state,
        surname: action.surname.trim(),
      };
    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.phoneNumber.trim(),
      };

    case SET_IS_ACTIVE:
      return {
        ...state,
        actionStatus: action.actionStatus,
      };
    case INPUTS_RESET: 
      return {
        name: '',
        surname: '',
        phoneNumber: '',
        actionStatus: 'active',
      }
    default: return state;
  }
};

export default inputReducer;
