import { BASE_API } from "@/utils/constants";

export const sleep = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
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

export const deleteLogs = async () => {
  const deleteLogs = await fetch(`${BASE_API}/logs/log/remove/1/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return deleteLogs;
};
