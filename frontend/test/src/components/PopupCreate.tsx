import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function PopupCreate() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus />
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-max bg-white sm:max-w-[425px] dark:bg-black">
        <form
          action="http://localhost/lab1/backend/routes/todos.php"
          method="POST"
        >
          <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
            <DialogDescription>
              Add a new task to your to-do list by providing a name and a brief
              <br />
              description of the task.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="mb-3 space-y-3">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                className="max-w-100 overflow-auto"
                required
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="message" className="text-center">
                Description
              </Label>
              <Textarea
                id="message"
                name="description"
                className="max-h-50 max-w-100 overflow-auto lg:max-h-100"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" className="cursor-pointer" type="submit">
              <Plus /> Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
