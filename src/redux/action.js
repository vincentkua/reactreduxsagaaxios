import { ADD_SAGA_TODO, DELELE_SAGA_TODO, GET_SAGA_TODO } from "./constant"

export const getSagaTodo = () => {
    console.log("action - get saga todo called")
    return {
        type : GET_SAGA_TODO,
    }
}

export const addSagaTodo = (data) => {
    console.log("action - add saga todo called")
    return {
        type : ADD_SAGA_TODO,
        data : data
    }
}

export const deleteSagaTodo = (id) => {
    console.log("action - delete Saga todo called")
    return {
        type : DELELE_SAGA_TODO,
        id : id
    }
}
