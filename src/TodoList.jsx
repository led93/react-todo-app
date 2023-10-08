import { TodoItem } from "./TodoItem"
import PropTypes from 'prop-types';


export function TodoList({ todos, toggleTodo, deleteTodo }) {
    TodoList.propTypes = {
        todos: PropTypes.array.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    };

    return (
        <ul className="list">
            {todos.length === 0 && <li className="list-item">No items</li>}
            {todos.map(todo => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}