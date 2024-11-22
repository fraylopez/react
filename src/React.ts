import { App } from "../app/app";

let document: Document;
if (typeof window !== "undefined") {
  document = window.document;
}
else {
  const { JSDOM } = await import("jsdom");
  document = new JSDOM().window.document;
}

interface IComponent {
  tag: string;
  props?: { [key: string]: any; };
  children?: any[];
}

let topContainerEl: HTMLElement;
let root: IComponent | (() => IComponent) | string;

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
  },
  render: (element: IComponent | (() => IComponent) | string, container: HTMLElement) => {
    if (!topContainerEl) {
      topContainerEl = container;
      root = element;
    }

    if (typeof element === "string") {
      const textElement = document.createTextNode(element);
      container.appendChild(textElement);
      return;
    }

    if (typeof element === "function") {
      React.render(element(), container);
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
        React.render(child, domElement);
      });
    }
    container.appendChild(domElement);
  },

  reRender: () => {
    if (!topContainerEl) {
      return;
    }
    topContainerEl.innerHTML = "";
    React.render(root, topContainerEl);
  }
};

