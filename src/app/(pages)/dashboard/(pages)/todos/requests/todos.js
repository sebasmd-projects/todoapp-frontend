const sleep = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const updateTodo = async (uuid, complete) => {
  const todo = await fetch(`http://localhost:8000/api/todos/todo/${uuid}/`, {
    method: "PATCH",
    body: JSON.stringify({ complete }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return todo;
};
