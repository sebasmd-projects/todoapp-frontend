import { TodosGrid } from "./components";
import { getAllData } from "./components/ListTodo";

export const metadata = {
  title: "Listado de ToDos",
  description: "Listado de ToDos",
};

export default async function TodosV2Page() {
  const data = await getAllData();

  return (
    <>
      <h1 className="text-2xl">Todos Page (Usando el lado del Servidor)</h1>
      <TodosGrid todos={data} />
      <ol className="list-decimal list-inside mt-3">
        <li>Se realiza la petición GET cada que se hace el updatedTodo</li>
        <li>
          Se realiza la petición PATCH para cada componente y además se realiza
          la petición GET
        </li>
        <li>Se utiliza el router para hacer refresh</li>
        <li>
          Si se modifica el card en todo/v2, no se ve reflejado en todos, hay
          excepciones
        </li>
        <li>
          La respuesta queda en cache, por esto tocó agregar cache: "no-store"
        </li>
        <li>
          Tiene un comportamiento extraño, si se empieza a modificar desde el
          v2, cada que se entra a todos hace la petición GET, hasta modificar
          una tarjeta, de ahí en adelante solo hace el PATCH junto con el GET al
          actualizarla, si se actualiza la tarjeta en todo v1, se pasa a v2, y
          se actualiza la misma o una diferente no se va a ver reflejado hasta
          no actualizar una de todos v1
        </li>
        <li>Se demora para entrar a la pág</li>
      </ol>
    </>
  );
}
