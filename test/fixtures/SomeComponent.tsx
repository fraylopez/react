import { React } from "../../src/React";
import { useState } from "../../src/useState";

export let setState: (newState: any) => void;

export const SomeComponent = () => {
  const [name, setName] = useState("");
  setState = setName;
  return (
    <div>{`Hello Component!${name}`}</div>
  );
};