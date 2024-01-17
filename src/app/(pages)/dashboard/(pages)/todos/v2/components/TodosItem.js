import { useState } from "react";
import { CiSquareCheck, CiSquareRemove } from "react-icons/ci";
import styles from "../../components/css/TodoItem.module.css";

export default function TodosItem({ todo, updateTodo }) {
  const [isComplete, setIsComplete] = useState(todo.complete);

  const handleCheckboxChange = async () => {
    try {
      const updatedTodo = await updateTodo(todo.uuid, !isComplete);
      setIsComplete(updatedTodo.complete);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className={isComplete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          checked={isComplete}
          onClick={handleCheckboxChange}
          className={`
            flex p-2 rounded-md cursor-pointer
            hover:bg-opacity-60
            ${isComplete ? "bg-blue-100" : "bg-red-100"}
        `}
        >
          {isComplete ? (
            <CiSquareCheck size={30} />
          ) : (
            <CiSquareRemove size={30} />
          )}
        </div>
      </div>

      <span className={`ml-2 ${isComplete ? "line-through" : ""}`}>
        {todo.title}
      </span>
    </div>
  );
}
