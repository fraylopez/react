import { React } from '../src/React';
import { useEffect, useState } from "../src/hooks";

export const App = () => {

  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count called", count);
    if (count === 5) {
      alert("Count is 5!");
    }

  }, [count]);

  return (
    <div>
      <h2>Hello, {name || "unknown"}</h2>
      <p>Write your name</p>
      <input
        type="text"
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
      <h2>Age: {count.toString()}</h2>
      <button onclick={() => setCount(count + 1)}>+1</button>
      <button onclick={() => setCount(count - 1)}>-1</button>


    </div>
  );
};
const root = document.getElementById("app-root");
React.render(App, root!);
