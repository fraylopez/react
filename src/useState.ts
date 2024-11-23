import { React } from "./React";

export let globalState: any[] = [];
let globalStateCursor = 0;

export const useState = (initialState?: any) => {
  const cursor = globalStateCursor;
  globalState[globalStateCursor] = globalState[globalStateCursor] || initialState;

  const setState = (newState: any) => {
    globalState[cursor] = newState;
    React.reRender();
  };
  globalStateCursor++;
  return [globalState[cursor], setState];
};

export const reset = () => {
  globalStateCursor = 0;
  globalState = [];
  return globalState;
};