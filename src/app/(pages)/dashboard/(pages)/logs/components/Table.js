"use client";

import { useState } from "react";
import * as requestAPI from "../../todos/requests/todos";
import TableItems from "./TableItems";

export default function Table() {
  const [refresh, setRefresh] = useState(false)

  const handleClick = async () => {
    try {
      await requestAPI.deleteLogs();
      setRefresh(true)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="text-center">
        <div
          onClick={handleClick}
          className="bg-transparent hover:bg-red-500 hover:cursor-pointer text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          Eliminar logs
        </div>
      </div>
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4"></th>
              <th scope="col" className="px-6 py-4">
                Time Stamp
              </th>
              <th scope="col" className="px-6 py-4">
                Path
              </th>
              <th scope="col" className="px-6 py-4">
                Method
              </th>
              <th scope="col" className="px-6 py-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <TableItems refresh={refresh}/>
          </tbody>
        </table>
      </div>
    </>
  );
}
