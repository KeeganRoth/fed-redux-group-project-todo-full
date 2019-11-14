import React from "react";

const TodosList = ({ todos = [], toggleTodo, onCompleteTodo }) => {
  const renderTodos = () => {
    return todos.map(todo => (
      <li
        key={todo.id}
        onClick={() => {
          // Do something
          toggleTodo(todo.id);
        }}
      >
        {todo.text}
        <span onClick={() => onCompleteTodo(todo.id)}>X</span>
      </li>
    ));
  };
  return <ol>{renderTodos(todos)}</ol>;
};

export default TodosList;
