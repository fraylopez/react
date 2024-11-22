import { React } from "./React";

export let state;

export const useState = (initialState: any) => {
  state = initialState;
  const setState = (newState: any) => {
    state = newState;
    React.reRender();
  };
  return [state, setState];
};
