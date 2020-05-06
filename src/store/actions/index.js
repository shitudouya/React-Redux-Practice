import * as type from "../constants/ActionTypes";

export const add_Action = (value) => {
  return {
    type: type.ADD_LIST,
    value,
  };
};

export const async_add_Action = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: type.ASYNC_ADD_LIST,
        value,
      });
    }, 1000);
  };
};

export const delete_Action = (id) => {
  return {
    type: type.DELETE_ONE,
    id,
  };
};

export const delete_all_Action = () => {
  return {
    type: type.DELETE_ALL,
  };
};
