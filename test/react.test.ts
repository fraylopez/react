import { expect } from "chai";
import { React } from "../src/React";
import { SomeComponent } from "./fixtures/SomeComponent";

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

it("should allow elements as children", () => {
  const element: any = React.createElement("div", null, React.createElement("span"));
  expect(element.children[0].tag).equal("span");
});

it("should create components", () => {
  const element = React.createElement(SomeComponent);
  expect(element.children).deep.equal(["Hello Component!"]);
});