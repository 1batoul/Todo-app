import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearTodos = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  return (
    <div className="todo-container">
      <h1>My Todos</h1>
      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        clearTodos={clearTodos}
      />
    </div>
  );
};

export default TodoPage;
