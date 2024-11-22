import { expect } from "chai";

describe('useState', () => {
  it("should return the initial value", () => {
    const [state, _setState] = useState(0);
    expect(state).equal(0);
  });

  it("should update the state", () => {
    const [_state, setState] = useState(0);
    setState(1);
    expect(state).equal(1);
  });
});

let state;
const useState = (initialState: any) => {
  state = initialState;
  const setState = (newState: any) => {
    state = newState;
  };
  return [state, setState];
};