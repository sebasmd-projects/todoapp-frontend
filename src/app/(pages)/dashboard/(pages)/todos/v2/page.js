import { ListTodo } from "./components";

export const metadata = {
  title: "Listado de ToDos v2",
  description: "Listado de ToDos",
};

export default function TodosPage() {
  return (
    <>
      <h1 className="text-3xl">Todos Page</h1>
      <ListTodo />
      <ol className="list-decimal list-inside mt-3">
        <li>Se realiza la petición GET cada que se accede a la ruta</li>
        <li>
          Se realiza la petición PATCH para cada componente y no se realiza la
          petición GET, solo se actualiza el estado
        </li>
        <li>No se utiliza el router para hacer refresh</li>
        <li>Si se modifica el card en todo, si se ve reflejado en todos/v2</li>
        <li>La respuesta no queda en cache</li>
      </ol>
    </>
  );
}
