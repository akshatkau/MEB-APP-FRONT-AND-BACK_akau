import { SET_USER_PROFILE } from './actions.js';

const initialState = {
  email: '',
  username: '',
  password: '',
  height: 0,
  weight: 0,
  phone: '',
  age: 0
  
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
