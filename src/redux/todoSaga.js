import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_LOCAL_TODO,
  ADD_SAGA_TODO,
  DELELE_SAGA_TODO,
  GET_SAGA_TODO,
  REMOVE_LOCAL_TODO,
  SET_LOCAL_TODO,
} from "./constant";
import api from "../api/todo";

function* getTodo() {
  let response = yield api.get("/todo");
  let data = response.data; // dont need to parse with .json()
  console.log("Saga axios data >>>", data);
  yield put({
    type: SET_LOCAL_TODO,
    data: data,
  });

  // let data = yield fetch("http://localhost:8000/todo");
  // data = yield data.json();
  // console.log("Saga data >>>", data);
  // yield put({
  //   type: SET_LOCAL_TODO,
  //   data: data,
  // });
}

function* postTodo(action) {
  let response = yield api.post("/todo", { item: action.data });
  let data = response.data; // dont need to parse with .json()
  console.log("Post Result", data);
  yield put({
    type: ADD_LOCAL_TODO,
    data: data,
  });

  // let response = yield fetch("http://localhost:8000/todo", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ item: action.data }),
  // });
  // const data = yield response.json();
  // console.log("Post Result", data);
  // yield put({
  //   type: ADD_LOCAL_TODO,
  //   data: data,
  // });
}

function* deleteTodo(action) {
  let response = yield api.delete("/todo/" + action.id);
  console.log("Delete Result", response);
  if (response.status === 200) {
    yield put({
      type: REMOVE_LOCAL_TODO,
      id: action.id,
    });
  }

  // let response = yield fetch("http://localhost:8000/todo/" + action.id, {
  //   method: "DELETE",
  // });
  // console.log("Delete Result", response);
  // if (response.status === 200) {
  //   yield put({
  //     type: REMOVE_LOCAL_TODO,
  //     id: action.id,
  //   });
  // }
}

function* todoSaga() {
  yield takeEvery(GET_SAGA_TODO, getTodo);
  yield takeEvery(ADD_SAGA_TODO, postTodo);
  yield takeEvery(DELELE_SAGA_TODO, deleteTodo);
}

export default todoSaga;
