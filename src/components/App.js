import { Component } from 'react';
import { TodoList } from './TodoList/TodoList';
import { TodoForm } from './TodoForm/TodoForm';
import { Modal } from './Modal/Modal';

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
    isModalShown: false,
  };

  componentDidMount() {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    if (savedTodos) {
      this.setState({ todos: savedTodos });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

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

  toggleModal = () => {
    this.setState(prevState => ({ isModalShown: !prevState.isModalShown }));
  };

  render() {
    const { todos, isModalShown } = this.state;
    const { addTodo, deleteTodo, checkTodo, toggleModal } = this;

    return (
      <>
        <button onClick={toggleModal}>Open Modal</button>
        <TodoForm onSubmit={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onCheck={checkTodo} />
        {isModalShown && <Modal onClose={toggleModal} />}
      </>
    );
  }
}
