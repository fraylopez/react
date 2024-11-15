import { expect } from "chai";
import { React } from "../src/React";

it("React exists", () => {
  expect(React).not.to.be.undefined;
});

it("should create elements with tag", () => {
  const element: any = React.createElement("div");
  expect(element.tag).equal("div");
});

it("should create elements with children", () => {
  const element: any = React.createElement("div", "Hello");
  expect(element.children).deep.equal(["Hello"]);
});