"use client";

import { CiSquareCheck, CiSquareRemove } from "react-icons/ci";
import styles from "./css/TodoItem.module.css";

export default function TodoItem({ todo, toggleTodo }) {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => toggleTodo(todo.uuid, !todo.complete)}
          className={`
            flex p-2 rounded-md cursor-pointer
            hover:bg-opacity-60
            ${todo.complete ? "bg-blue-100" : "bg-red-100"}
        `}
        >
          {todo.complete ? (
            <CiSquareCheck size={30} />
          ) : (
            <CiSquareRemove size={30} />
          )}
        </div>

        <div className="text-center sm:text-left">{todo.title}</div>
      </div>
    </div>
  );
}
