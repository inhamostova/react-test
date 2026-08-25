import PropTypes from 'prop-types';
import { Todo } from 'components/Todo/Todo';

export const TodoList = ({ todos, onDelete, onCheck }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo todo={todo} onDelete={onDelete} onCheck={onCheck} />
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      task: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};
