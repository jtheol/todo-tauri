import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./styles.css";
import TodoList from "./components/TodoList";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
      <h1 className="text-3xl">Todo App</h1>

      <TodoList />

      <p>{greetMsg}</p>
    </main>
  );
}

export default App;
