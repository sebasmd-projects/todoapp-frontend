"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import * as todosApi from "../requests/todos";
import TodoItem from "./TodoItem";

export function TodosGrid({ todos: initialTodos = [] }) {
  const router = useRouter();
  const [localTodos, setLocalTodos] = useState(initialTodos);

  const toggleTodo = async (uuid, complete) => {
    const updatedTodo = await todosApi.updateTodo(uuid, complete);

    setLocalTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.uuid === updatedTodo.uuid ? updatedTodo : todo
      )
    );

    router.refresh();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {localTodos.map((todo) => (
        <TodoItem key={todo.uuid} todo={todo} updateTodo={toggleTodo} />
      ))}
    </div>
  );
}
