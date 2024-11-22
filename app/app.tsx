import { React } from '../src/React';
import { useState } from "../src/useState";

export const App = () => {

  const [name, setName] = useState("");

  console.log("name", name);

  return (
    <div>
      <h2>Hello, {name || "unknown"}</h2>
      <p>Write your name</p>
      <input
        type="text"
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
const root = document.getElementById("app-root");
React.render(App, root);
