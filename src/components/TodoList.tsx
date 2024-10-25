import { useState } from "react";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}


const TodoList = () =>  {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo !== '') {
      const newId = crypto.randomUUID();
      const newTodoItem: TodoItem = {
        id: newId,
        text: newTodo, 
        completed: false,
      }

      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  }

  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };


  return (
    <div className="max-w-lg mx-auto my-10 p-5 space-y-5">
      <div className="flex space-x-3">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 px-3 py-2 w-screen input input-primary  focus:outline-none "
          placeholder="Enter a new task"
        />
        <button
          onClick={addTodo}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between p-3 border border-gray-700 rounded-lg shadow-sm"
            key={todo.id}
          >
            <div className="flex items-center space-x-5">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="h-4 w-4 text-blue-500 border-gray-600 rounded focus:ring-blue-400"
              />

              <span
                className={`${
                  todo.completed ? 'line-through text-gray-500' : 'text-gray-100'
                } font-medium break-all`}
              >
                {todo.text}
              </span>
            </div>

            <button
              className="btn text-red-600 ml-3"
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
  </div>
  );
};


export default TodoList