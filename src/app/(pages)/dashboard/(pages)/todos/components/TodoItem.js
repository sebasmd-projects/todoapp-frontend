import { useState } from "react";
import { CiSquareCheck, CiSquareRemove } from "react-icons/ci";
import styles from "./css/TodoItem.module.css";

export default function TodoItem({ todo, updateTodo }) {
  const [isComplete, setIsComplete] = useState(todo.complete);
  const [isChanging, setIsChanging] = useState(false);

  const handleCheckboxChange = async () => {
    if (isChanging) {
      return;
    }

    try {
      setIsChanging(true);
      await updateTodo(todo.uuid, !todo.complete);
      setIsComplete(!todo.complete);
    } catch (error) {
      console.error("Error updating todo:", error);
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={handleCheckboxChange}
          className={`
            flex p-2 rounded-md cursor-pointer
            hover:bg-opacity-60
            ${todo.complete ? "bg-green-100" : "bg-red-100"}
        `}
        >
          {todo.complete ? (
            <CiSquareCheck size={30} />
          ) : (
            <CiSquareRemove size={30} />
          )}
        </div>
        <div className="text-1xl text-left">{todo.title}</div>
        <div className="text-left">{todo.description}</div>
      </div>
    </div>
  );
}
