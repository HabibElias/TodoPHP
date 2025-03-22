import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Todo } from "@/models/Todo";
import { CheckSquare, Edit, Square, Timer, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import PopupCreate from "./PopupCreate";
import PopupEdit from "./PopupEdit";

interface TodoProps {
  todo: Todo;
}

export default function TodoCard({
  todo:t,
}: TodoProps) {
  const deleteTodo = async (id: number) => {
    await fetch(`http://localhost/lab1/backend/routes/deleteTodo.php?id=${id}`);
  };

  const changeStat = async (id: number) => {
    await fetch(`http://localhost/lab1/backend/routes/change.php?id=${id}`);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{t.name}</h3>
          <Badge
            variant={
              t.stat === "completed"
                ? "default"
                : t.stat === "in-progress"
                  ? "secondary"
                  : "outline"
            }
            className="ml-2"
          >
            {!(t.stat == "0") ? (
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
          className={`${t.stat == "1" ? "line-through opacity-20" : "text-muted-foreground"} text-sm break-words`}
        >
          {t.description}
        </p>
      </CardContent>
      <CardFooter className="text-muted-foreground flex items-center justify-between border-t pt-2 text-xs">
        <PopupEdit todo={t} />
        <div className="flex items-center gap-2">
          <Button
            onClick={() => changeStat(t.id)}
            variant={"outline"}
            className="cursor-pointer"
          >
            {t.stat == "0" ? <Square /> : <CheckSquare />}
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => deleteTodo(t.id)}
            className="cursor-pointer bg-red-300 text-black dark:text-gray-200"
          >
            <Trash />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
