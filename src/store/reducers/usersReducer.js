const SET_USERS = 'SET_USERS';
const FILTER_USERS = 'FILTER_USERS';

export const setUsers = users => ({
  type: SET_USERS,
  users,
});

export const filterUsers = filter => ({
  type: FILTER_USERS,
  filter,
});

export const getUsersList = state => state.users;
export const getIsFilteredUsers = state => state.filter;

const initialState = {
  users: [],
  filter: 'all',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
       users: action.users,
      }
    case FILTER_USERS:
      return {
        ...state,
        filter: action.filter,
      };
    default: return state;
  }
};

export default usersReducer;
