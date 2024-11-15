
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

export const render = (element: any, container: HTMLElement) => {

};