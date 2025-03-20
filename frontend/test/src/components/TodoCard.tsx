import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Todo } from "@/models/Todo";
import { CheckSquare, Square, Timer, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface TodoProps {
  todo: Todo;
}

export default function TodoCard({
  todo: { id, name, description, stat },
}: TodoProps) {
  const deleteTodo = async (id: number) => {
    const result = await fetch(
      `http://localhost/lab1/backend/routes/deleteTodo.php?id=${id}`,
    ).then((res) => res.json());

    return toast("Todo Deleted", { description: result.success });
  };

  const changeStat = async (id: number) => {
    await fetch(`http://localhost/lab1/backend/routes/changeStat.php?id=${id}`);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <Badge
            variant={
              stat === "completed"
                ? "default"
                : stat === "in-progress"
                  ? "secondary"
                  : "outline"
            }
            className="ml-2"
          >
            {!(stat == "0") ? (
              "done"
            ) : (
              <>
                <Timer />
                pending
              </>
            )}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p
          className={`${stat == "1" ? "line-through opacity-20" : "text-muted-foreground"} text-sm break-words`}
        >
          {description}
        </p>
      </CardContent>
      <CardFooter className="text-muted-foreground flex items-center justify-between border-t pt-2 text-xs">
        <span>ID: {id}</span>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => changeStat(id)}
            variant={"outline"}
            className="cursor-pointer"
          >
            {stat == "0" ? <Square /> : <CheckSquare />}
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => deleteTodo(id)}
            className="cursor-pointer bg-red-300 text-black dark:text-gray-200"
          >
            <Trash />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
