import { expect } from "chai";
import { reset, useState } from "../src/useState";
import { beforeEach } from "mocha";
import sinon from "sinon";
import { React } from "../src/React";

let globalState: any[];
describe('useState', () => {
  beforeEach(() => {
    globalState = reset();
  });

  it("should return the initial value", () => {
    const [state, _setState] = useState(0);
    expectStateEqual(0);
  });

  it("should update the state", () => {
    const [_state, setState] = useState(0);
    setState(1);
    expectStateEqual(1);
  });

  it("should hold multiple states", () => {
    const [_state1, setState1] = useState(0);
    const [_state2, setState2] = useState(0);

    setState1(1);
    setState2(2);

    expectStateEqual(1, 2);
  });

  it("should re-render on state update", () => {
    const reRenderStub = sinon.stub(React, "reRender");
    const [_state, setState] = useState("");

    setState("Hello");

    sinon.assert.called(reRenderStub);
  });
});

function expectStateEqual(...state: any[]) {
  expect(globalState).deep.equal(state);
}
