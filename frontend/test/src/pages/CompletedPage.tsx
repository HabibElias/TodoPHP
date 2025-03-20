import TodoCard from "@/components/TodoCard";
import { Todo } from "@/models/Todo";
import { motion } from "framer-motion";
import { ListCheck } from "lucide-react";
import { useEffect, useState } from "react";

const CompletedPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    fetch("http://localhost/lab1/backend/routes/completed.php")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }, [todos]);

  return (
    <div className="font-[poppins]">
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <div className="text-2xs flex items-center gap-2">
          <ListCheck />
          All of completed tasks are listed below
        </div>
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
            <div className="text-2xs break-words text-center font-bold tracking-tight opacity-80">
            No tasks yet? Remember, every small step brings you closer to your goals. <br /> Start your journey to productivity by creating your first Todo!
            </div>
        )}
      </div>
    </div>
  );
};

export default CompletedPage;
