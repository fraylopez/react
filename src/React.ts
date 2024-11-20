import { JSDOM } from "jsdom";
let document: Document = typeof window !== "undefined" ?
  window.document :
  new JSDOM().window.document;

export const React = {
  createElement: (
    tagOrComponent: string | (() => any),
    props?: { [key: string]: any; } | null,
    ...children: any[]) => {

    if (typeof tagOrComponent === "function") {
      return tagOrComponent();
    }
    return {
      tag: tagOrComponent,
      props,
      children,
    };
  }
};

export const render = (
  element: {
    tag: string;
    props?: object;
    children?: any[];
  }, container: HTMLElement) => {
  if (typeof element === "string") {
    const textElement = document.createTextNode(element);
    container.appendChild(textElement);
    return;
  }

  const domElement = document.createElement(element.tag);
  if (element.props) {
    Object.keys(element.props).forEach((prop) => {
      domElement[prop] = element.props[prop];
    });
  }
  if (element.children) {
    element.children.forEach((child: any) => {
      render(child, domElement);
    });
  }

  container.appendChild(domElement);
};