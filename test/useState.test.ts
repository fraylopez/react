import { expect } from "chai";
import { state, useState } from "../src/useState";
import Sinon from "sinon";
import { React } from "../src/React";

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

  it("should re-render on state update", () => {
    const reRenderStub = Sinon.stub(React, "reRender");
    const [_state, setState] = useState(0);
    setState(1);
    Sinon.assert.calledOnce(reRenderStub);
  });
});

