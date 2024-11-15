export const React = {
  createElement: (tag: string, props?: { [key: string]: any; } | null, ...children: any[]) => {
    return {
      tag,
      props,
      children,
    };
  }
};