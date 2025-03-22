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
import { Todo } from "@/models/Todo";
import { Edit } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function PopupEdit({ todo: t }: { todo: Todo }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState<string>(t.name);
  const [desc, setDesc] = useState<string>(t.description);

  const handleName = (e: any) => setName(e.target.value);
  const handleDesc = (e: any) => setDesc(e.target.value);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer hover:opacity-65">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-max bg-white w-110 sm:max-w-110 dark:bg-black">
        <form
          action="http://localhost/lab1/backend/routes/change.php"
          method="POST"
        >
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogDescription>"Editing"</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              type="text"
              value={t.id}
              name="id"
              id="id"
              required
              className="hidden"
            />
            <div className="mb-3 space-y-3">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={handleName}
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
                value={desc}
                onChange={handleDesc}
                name="description"
                className="max-h-50 max-w-100 overflow-auto lg:max-h-100"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() =>
                toast("Todo Edited", {
                  description: `You have edited Todo:${t.name}`,
                })
              }
              variant="outline"
              className="cursor-pointer"
              type="submit"
            >
              <Edit /> Edit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
