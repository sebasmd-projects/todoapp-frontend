"use client";

import { BASE_API } from "@/utils/constants";
import { useEffect, useState } from "react";

export default function TableItems({refresh}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${BASE_API}/logs/log/`);
        const results = await response.json();
        const allData = results[0]?.requests || [];
        setData(allData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [refresh]);

  return (
    <>
      {data.map((d, index) => (
        <tr key={index} className="border-b dark:border-neutral-500">
          <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
          <td className="whitespace-nowrap px-6 py-4">{d.timestamp}</td>
          <td className="whitespace-nowrap px-6 py-4 text-center">{d.path}</td>
          <td className="whitespace-nowrap px-6 py-4">{d.method}</td>
          <td className="whitespace-nowrap px-6 py-4">{d.status}</td>
        </tr>
      ))}
    </>
  );
}
