import { ADD_TODO, DELETE_TODO } from "./constant"

export const addTodo = (data) => {
    console.log("action - add todo called")
    return {
        type : ADD_TODO,
        data : data
    }
}

export const deleteTodo = (data) => {
    console.log("action - delete todo called")
    return {
        type : DELETE_TODO,
        data : data
    }
}