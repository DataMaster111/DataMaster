import { API_URL } from "./config";

export async function login(username: string, password: string) {
  const response = await fetch(`${API_URL}/auth/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error("Ошибка входа");
  }
  return response.json();
}
