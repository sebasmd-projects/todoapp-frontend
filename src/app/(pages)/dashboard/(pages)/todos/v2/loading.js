import { GoTasklist } from "react-icons/go";
import styles from "../components/css/Loading.module.css";

export default function Loading() {
  return (
    <>
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
    </>
  );
}
