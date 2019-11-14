import React from "react";
import * as actions from "../actions";
import { connect } from "react-redux";
import TodosList from "./todosList";

class App extends React.Component {
  state = {
    todoInputText: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.todoInputText);
    // reset the input field to empty when submitted
  };
  handleChange = e => {
    this.setState({ todoInputText: e.target.value });
  };

  handleTodoComplete = todoId => {
    // needs to call an action creator
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.todoInputText}
            onChange={this.handleChange}
          />
          <button>Add todo</button>
        </form>
        <TodosList
          todos={this.props.todos}
          toggleTodo={this.props.toggleTodo}
          onCompleteTodo={this.props.completeTodo}
        />
        {/* 👆🏾 Expecting 2 props to be passed in */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
