import { GET_USER } from "actions/user.action";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  // le switch sert à identifier quelle est l'action sollicitée ()
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}