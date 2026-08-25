import { Component } from 'react';
import { TodoList } from './TodoList/TodoList';
import { TodoForm } from './TodoForm/TodoForm';

const initTodos = [
  {
    id: 'id-1',
    task: 'Learn HTML',
    checked: false,
  },
  {
    id: 'id-2',
    task: 'Learn CSS',
    checked: false,
  },
  {
    id: 'id-3',
    task: 'Learn JS',
    checked: false,
  },
];

export class App extends Component {
  state = {
    todos: initTodos,
  };

  addTodo = task => {
    this.setState(prevState => {
      return {
        todos: [
          {
            id: crypto.randomUUID(),
            task,
            checked: false,
          },
          ...prevState.todos,
        ],
      };
    });
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(({ id }) => id !== todoId),
    }));
  };

  checkTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
      ),
    }));
  };

  render() {
    const { todos } = this.state;
    const { addTodo, deleteTodo, checkTodo } = this;

    return (
      <>
        <TodoForm onSubmit={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onCheck={checkTodo} />
      </>
    );
  }
}
