import { expect } from "chai";
import { globalState, useState } from "../src/useState";
import { React } from "../src/React";
import { SomeComponent } from "./fixtures/SomeComponent";

describe('useState', () => {
  it("should return the initial value", () => {
    const [state, _setState] = useState(0);
    expect(state).equal(0);
  });

  it("should update the state", () => {
    const [_state, setState] = useState(0);
    setState(1);
    expect(globalState).equal(1);
  });

  it("should re-render on state update", () => {
    const container = document.createElement("div");
    React.render(SomeComponent, container);

    const [_state, setState] = useState(0);
    setState(1);

    expect(container.innerHTML).equal("<div>Hello Component!1</div>");
  });
});

