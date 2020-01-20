import firebase from 'firebase';

const ADD_USER = 'ADD_USER';
const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (user, id) => ({
  type: UPDATE_USER,
  user: firebase
  .database().ref('users/' + id)
  .update({ ...user }),
})

export const addUser = (user, id) => ({
  type: ADD_USER,
  user: firebase
  .database().ref('users/' + id)
  .set({ ...user, id }),
});

export const getUser = state => state.user;



const userReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.user
    case UPDATE_USER:
      return action.user 
    default: return state;
  }
};

export default userReducer;
