import { BASE_API } from "@/utils/constants";

export const sleep = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const deleteLogs = async () => {
  const deleteLogs = await fetch(`${BASE_API}/logs/log/remove/1/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return deleteLogs;
};

export const updateTodo = async (uuid, complete) => {
  const todo = await fetch(`${BASE_API}/todos/todo/${uuid}/`, {
    method: "PATCH",
    body: JSON.stringify({ complete }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};

export const createTodo = async (title, description) => {
  const todo = await fetch(`${BASE_API}/todos/todo/`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      description: description,
      default_order: 1,
      complete: false,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};

export const removeCompleteTodo = async () => {
  const todo = await fetch(`${BASE_API}/todos/todo/remove/complete/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};

export const restoreCompleteTodo = async () => {
  const todo = await fetch(`${BASE_API}/todos/todo/display/complete/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};
