import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Lägg till en uppgift..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" aria-label="Lägg till en ny uppgift">
        Lägg till
      </button>
    </form>
  );
};

export default TodoForm;
