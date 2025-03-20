import PopupCreate from "@/components/PopupCreate";
import TodoCard from "@/components/TodoCard";
import { Todo } from "@/models/Todo";
import { motion } from "framer-motion";
import { ListCheck } from "lucide-react";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    fetch("http://localhost/lab1/backend/routes/todos.php")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }, [todos]);

  return (
    <div className="font-[poppins]">
      <motion.div
        animate={{
          scale: [1, 1.05, 1, 1, 1],
          rotate: [0, 0, 2, -1, 0],
          borderRadius: ["20%", "20%", "50%", "40%", "30%"],
        }}
        className="mb-12"
      >
        <h1 className="text-xs opacity-45">
          Your Tasks, Your Goals, Your Success - Stay Organized and Achieve
          More!
        </h1>
      </motion.div>
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <div className="text-2xs flex items-center gap-2">
          <ListCheck />
          All of your tasks are listed below
        </div>
        <PopupCreate />
      </div>

      <div
        className={
          !(todos.length == 0)
            ? `grid grid-cols-1 gap-x-3 gap-y-4 xl:grid-cols-2`
            : "grid min-h-80 place-items-center"
        }
      >
        {todos.map((t) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            key={t.id}
          >
            <TodoCard todo={t} />
          </motion.div>
        ))}
        {todos.length == 0 && (
          <div className="text-center font-bold tracking-tight text-2xs opacity-80">
            No tasks yet? Start your journey to productivity by creating your
            first Todo!
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
