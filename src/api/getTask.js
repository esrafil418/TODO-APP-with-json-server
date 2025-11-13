import { BASE_URL } from "../constant/base";

export async function GetData() {
  const res = await fetch(`${BASE_URL}/tasks`);
  const data = await res.json();
  return data;
}
