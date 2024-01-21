import { GoTasklist } from "react-icons/go";
import styles from "../components/css/Loading.module.css";

export default function Loading() {
  return (
    <>
      <h1 className="text-2xl">Todos Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {[...new Array(8)].map((p, index) => (
          <div key={index} className={styles.todoSekeleton}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
              <div className="flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-gray-200">
                <GoTasklist size={30} />
              </div>
              <div className="text-center sm:text-left">Cargando tareas...</div>
            </div>
          </div>
        ))}
      </div>
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
