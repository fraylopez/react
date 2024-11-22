import { React } from "../../src/React";
import { useState } from "../../src/useState";

export const SomeComponent = () => {
  const [name, setName] = useState("");

  return (
    <div>{`Hello Component!${name}`}</div>
  );
};