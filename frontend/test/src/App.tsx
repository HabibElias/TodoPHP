import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Todo } from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const name = useRef<HTMLInputElement>(null);
  const desc = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    fetch("http://localhost/lab1/backend/routes/todos.php")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }, [todos]);

  const deleteTodo = async (id: number) => {
    await fetch(`http://localhost/lab1/backend/routes/deleteTodo.php?id=${id}`);

    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="p-5">
      <form
        action="http://localhost/lab1/backend/routes/todos.php"
        method="post"
        className="flex w-100 flex-col gap-4"
      >
        <input
          type="text"
          className="w-[100%] rounded ring-2"
          ref={name}
          name="name"
        />
        <textarea
          ref={desc}
          className="w-[100%] rounded ring-2"
          name="description"
        />
        <button className="rounded bg-blue-300 p-3 text-white">create</button>
      </form>

      <ul>
        {todos.map(({ name, id, description, stat }) => (
          <li key={id}>
            name: {name}
            <br />
            description: {description}
            <br />
            stat: {stat == "1" ? "done" : "not done"}
            <button onClick={() => deleteTodo(id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
