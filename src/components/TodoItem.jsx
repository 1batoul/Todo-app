const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onClick={() => toggleComplete(todo.id)}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
