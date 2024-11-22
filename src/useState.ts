import { React } from "./React";

export let globalState;

export const useState = (initialState?: any) => {
  globalState = globalState || initialState;
  const setState = (newState: any) => {
    globalState = newState;
    React.reRender();
  };
  return [globalState, setState];
};
