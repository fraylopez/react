export let state;

export const useState = (initialState: any) => {
  state = initialState;
  const setState = (newState: any) => {
    state = newState;
  };
  return [state, setState];
};
