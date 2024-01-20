import { BASE_API } from "@/utils/constants";

export async function getAllData() {
  let allData = [];
  let nextPage = `${BASE_API}/todos/todo/`;

  while (nextPage) {
    const res = await fetch(nextPage, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await res.json();
    allData = allData.concat(result.results);
    nextPage = result.next;
  }

  return allData;
}
