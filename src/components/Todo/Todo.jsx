import PropTypes from 'prop-types';

export const Todo = ({ todo: { id, task, checked }, onDelete, onCheck }) => {
  return (
    <div>
      <p>{task}</p>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
      <input
        type="checkbox"
        name="checked"
        checked={checked}
        onChange={() => onCheck(id)}
      />
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};
