import { useState } from "react";
import { login } from "../api/auth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = await login(username, password);
      console.log("Токен:", data.token);
      setError("");
    } catch (err) {
      setError("Неверные данные для входа");
    }
  }

  return (
    <div>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Логин"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <button type="submit">Войти</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
