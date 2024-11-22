import { expect } from "chai";
import { state, useState } from "../src/useState";

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

