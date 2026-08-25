import { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    todo: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.todo);
    this.setState({ todo: '' });
  };

  handleChange = evt => {
    this.setState({ todo: evt.target.value });
  };

  render() {
    const { todo } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Enter your task
          <input type="text" name="todo" value={todo} onChange={handleChange} />
        </label>
        <button type="submit">Add task</button>
      </form>
    );
  }
}
