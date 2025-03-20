import { CheckSquare2, List, ListChecksIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  return (
    <div className="top-0 flex w-[inherit] flex-wrap items-center justify-between gap-y-12 py-6 font-[poppins] backdrop-blur-lg xl:fixed">
      <div className="flex items-center gap-2 text-3xl font-bold">
        <CheckSquare2 className="size-10" />
        TodoList
      </div>
      <nav>
        <ul className="flex items-center gap-12 ease-in *:duration-200 *:hover:opacity-45 sm:mx-0 [&_a.active]:opacity-45">
          <NavLink className="flex items-center gap-2" to={""}>
            <List />
            All
          </NavLink>
          <NavLink className="flex items-center gap-2" to={"/completed"}>
            <ListChecksIcon />
            Completed
          </NavLink>
          <DarkModeToggle />
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
