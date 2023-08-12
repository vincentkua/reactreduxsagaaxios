import {configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import createSagaMiddleware from "@redux-saga/core";
import todoSaga from "./todoSaga";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer:rootReducer ,
    middleware: () =>[sagaMiddleware]
})

sagaMiddleware.run(todoSaga)

export default store