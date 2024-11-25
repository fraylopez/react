import { React } from "./React";

export const globalState: any[] = [];
export let globalStateCursor = 0;

export const useState = (initialState?: any) => {
  const cursor = globalStateCursor;
  globalState[globalStateCursor] = globalState[globalStateCursor] || initialState;
  const setState = (newState: any) => {
    if (!Object.is(globalState[cursor], newState)) {
      globalState[cursor] = newState;
      React.reRender();
    }
  };
  globalStateCursor++;
  return [globalState[cursor], setState];
};

export const reset = () => {
  globalStateCursor = 0;
  globalState.length = 0;
  return globalState;
};

export const resetCursor = () => {
  globalStateCursor = 0;
};


export const useEffect = (callback: (...deps) => void, dependencies: any[]) => {
  if (!dependencies.length) {
    callback();
    return;
  }
  let previousDependencies = globalState[globalStateCursor];

  let dependenciesChanged = true;
  if (previousDependencies) {
    dependenciesChanged = dependencies.some((dep, index) => {
      return !Object.is(dep, previousDependencies[index]);
    });
  }

  if (dependenciesChanged) {
    callback();
  }

  globalState[globalStateCursor] = previousDependencies;
  globalStateCursor++;
};