import * as type from "../constants/ActionTypes";

const defaultState = {
  list: [],
};
const handleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case type.ADD_LIST:
    case type.ASYNC_ADD_LIST:
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.unshift(action.value);
      return newState;
    case type.DELETE_ONE:
      let new_state = JSON.parse(JSON.stringify(state));
      new_state = new_state.list.filter((item) => item.id !== action.id);
      return {list:new_state};
    case type.DELETE_ALL:
      let state_new = JSON.parse(JSON.stringify(state));
      state_new.list = [];
      return state_new;
    default:
      return state;
  }
};

export default handleReducer;
