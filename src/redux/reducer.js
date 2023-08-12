import { combineReducers } from "redux";
import { ADD_LOCAL_TODO, REMOVE_LOCAL_TODO, SET_LOCAL_TODO } from "./constant";

const todoReducer = (data = [], action) => {
  switch (action.type) {
    case SET_LOCAL_TODO:
      console.log("reducer - set local called");
      return action.data;

    case ADD_LOCAL_TODO:
      console.log("reducer - add local todo called");
      return [...data, action.data];

    case REMOVE_LOCAL_TODO:
      console.log("reducer - remove local todo called");
      const filteredtodo = data.filter((x) => x.id !== action.id);
      return filteredtodo;

    default:
      return data;
  }
};

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
