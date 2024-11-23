import { React } from "../../src/React";
import { useState } from "../../src/hooks";

export let setSomeState: (newState: any) => void;

export const SomeComponent = () => {
  const [name, setName] = useState("");
  setSomeState = setName;
  return (
    <div>{`Hello Component!${name}`}</div>
  );
};