import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  toggleComplete,
  editTodo,
  deleteTodo,
  clearTodos,
}) => {
  const allCompleted =
    todos.length > 0 && todos.every((todo) => todo.completed);

  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.length === 0 ? (
          <p>No tasks yet!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </ul>
      {allCompleted && (
        <p className="completed-message show">🎉 All tasks are done!</p>
      )}
      {todos.length > 0 && (
        <button
          className="clear-button"
          onClick={clearTodos}
          disabled={todos.length === 0}
          aria-label="Clear all tasks!"
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default TodoList;
