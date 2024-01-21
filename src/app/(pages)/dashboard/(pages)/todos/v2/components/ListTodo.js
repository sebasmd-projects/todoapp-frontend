"use client";
import { BASE_API } from "@/utils/constants";
import { useEffect, useState } from "react";
import { updateTodo } from "../../requests/todos";
import Loading from "../loading";
import { TodosGrid } from "./TodosGrid";

export function ListTodo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allResults = [];
        let nextPage = `${BASE_API}/todos/todo/`;

        while (nextPage) {
          const response = await fetch(nextPage);
          const responseData = await response.json();
          allResults = [...allResults, ...responseData.results];
          nextPage = responseData.next;
        }

        setData(allResults);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <TodosGrid todos={data} updateTodo={updateTodo} />
      )}
    </>
  );
}
