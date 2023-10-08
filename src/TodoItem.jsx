import PropTypes from 'prop-types';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    TodoItem.propTypes = {
        completed: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    };
    
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button
                className="btn btn-danger"
                onClick={() => deleteTodo(id)}>
                Delete
            </button>
        </li>
    )
}