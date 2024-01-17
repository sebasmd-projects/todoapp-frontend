import TodosItem from "./TodosItem";

export function TodosGrid({ todos, updateTodo }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
      {todos.map((todo) => (
        <TodosItem key={todo.uuid} todo={todo} updateTodo={updateTodo} />
      ))}
    </div>
  );
}
