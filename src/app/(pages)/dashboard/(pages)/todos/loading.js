import { GoTasklist } from "react-icons/go";
import styles from "./components/css/Loading.module.css";

export default function Loading() {
  return (
    <>
      <h1 className="text-2xl">Todos Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {[...new Array(7)].map((p, index) => (
          <div key={index} className={styles.todoSekeleton}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
              <div className="flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-gray-200">
                <GoTasklist size={30} />
              </div>
              <div className="text-center sm:text-left">...</div>
            </div>
          </div>
        ))}
      </div>
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
