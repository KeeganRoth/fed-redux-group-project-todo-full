import * as types from "./action-types";

let nextTodoId = 0;
export const addTodo = text => ({
  type: types.ADD_TODO,
  id: nextTodoId++,
  isCompleted: false,
  text
});

export const completeTodo = id => {
  return {
    type: types.COMPLETE_TODO,
    id
  };
};

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
});
