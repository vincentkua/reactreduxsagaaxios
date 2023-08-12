import { combineReducers } from "redux";
import { ADD_TODO, DELETE_TODO, GET_TODO } from "./constant";

const todoReducer = (data = ["eat", "sleep", "drink"], action) => {
  switch (action.type) {
    case GET_TODO:
      console.log("reducer - get todo called");
      return data;

    case ADD_TODO:
      console.log("reducer - add todo called");
      return [...data, action.data];

    case DELETE_TODO:
      console.log("reducer - delete todo called");
      const newtodo = data.filter(x=> x!==action.data)
      return newtodo;

    default:
      return data;
  }
};

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
