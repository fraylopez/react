import sinon from "sinon";
import { useEffect, useState } from "../src/hooks";
import { React } from "../src/React";

describe('useEffect', () => {
  afterEach(() => {
    React.reset();
  });

  it("should call the effect when no dependencies", () => {
    const effect = sinon.stub();
    useEffect(effect, []);
    sinon.assert.called(effect);
  });

  it("should call the effect when dependecies change", () => {
    const effect = sinon.stub();
    let stateChanger: (newState: any) => void;
    const el = React.createElement(() => {
      const [state, setState] = useState(0);
      stateChanger = setState;
      useEffect(effect, [state]);
      return "test";
    });
    React.render(el, document.createElement("div"));

    stateChanger!(1);

    sinon.assert.calledTwice(effect);
  });
});
