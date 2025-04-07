import { useEffect, useState } from "preact/hooks";
import { TodoItem } from "./TodoItem.tsx";

// Define the Todo type
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function TodoList() {
  // State for todos and input value
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn Preact", completed: false },
    { id: 2, text: "Build a To-Do app", completed: false },
    { id: 3, text: "Master Deno", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [completedCount, setCompletedCount] = useState(0);

  // Effect to update completed count whenever todos change
  useEffect(() => {
    const completed = todos.filter((todo) => todo.completed).length;
    setCompletedCount(completed);
  }, [todos]);

  // Add new todo
  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  };

  // Toggle todo completion status
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Handle key press (Enter)
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // Handle input change
  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onInput={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="input flex-grow"
        />
        <button
          type="button"
          onClick={addTodo}
          className="btn"
        >
          Add
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {todos.length === 0
          ? (
            <div className="p-4 text-center text-gray-500">
              No tasks yet! Add one above.
            </div>
          )
          : (
            <ul>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))}
            </ul>
          )}
      </div>

      <div className="text-sm text-gray-500 text-center">
        {completedCount} of {todos.length} tasks completed
      </div>
    </div>
  );
}
