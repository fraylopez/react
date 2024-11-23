import { expect } from "chai";
import { React } from "../src/React";
import * as fixture from "./fixtures/SomeComponent";
import { SomeComponent } from "./fixtures/SomeComponent";
import { SomeComponentWithProps } from "./fixtures/SomeComponentWithProps";
import { JSDOM } from "jsdom";

declare var document: Document;
globalThis.document = new JSDOM().window.document;

describe('react', () => {
  afterEach(() => {
    React.reset();
  });

  it("React exists", () => {
    expect(React).not.to.be.undefined;
  });

  it("should create elements with tag", () => {
    const element: any = React.createElement("div");
    expect(element.tag).equal("div");
  });

  it("should create elements with children", () => {
    const element: any = React.createElement("div", null, "Hello");
    expect(element.children).deep.equal(["Hello"]);
  });

  it("should create elements with props", () => {
    const element: any = React.createElement("App", { id: "app" });
    expect(element.props).deep.equal({ id: "app" });
  });
  it("should create functional elements with props", () => {
    const element: any = React.createElement(SomeComponentWithProps);
    expect(element.props).deep.equal({ test: "foo" });
  });

  it("should allow elements as children", () => {
    const element: any = React.createElement("div", null, React.createElement("span"));
    expect(element.children[0].tag).equal("span");
  });

  it("should create components", () => {
    const element = React.createElement(SomeComponent);
    expect(element.children).deep.equal(["Hello Component!"]);
  });

  it("should render components", () => {
    const element = React.createElement(SomeComponent);
    const container = document.createElement("div");
    React.render(element, container);
    expect(container.innerHTML).equal("<div>Hello Component!</div>");
  });

  it("should re-render components with updated state", () => {
    const element = React.createElement(SomeComponent);
    const container = document.createElement("div");
    React.render(element, container);

    fixture.setSomeState("Hello");

    expect(container.innerHTML).equal("<div>Hello Component!Hello</div>");
  });
});