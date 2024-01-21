import { GrTransaction } from "react-icons/gr";
import { LuListTodo } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";

export default function MenuItems() {
  return [
    {
      icon: <MdOutlineDashboardCustomize size={30} />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <LuListTodo size={30} />,
      title: "ToDo v1",
      path: "/dashboard/todos",
    },
    {
      icon: <LuListTodo size={30} />,
      title: "ToDo v2",
      path: "/dashboard/todos/v2",
    },
    {
      icon: <GrTransaction size={30} />,
      title: "Server Actions",
      path: "/dashboard/actions",
    },
    {
      icon: <VscServerProcess size={30} />,
      title: "Peticiones",
      path: "/dashboard/logs",
    },
  ];
}
