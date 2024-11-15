export const React = {
  createElement: (...params: any[]) => {
    return {
      tag: params[0],
      children: params.slice(1)
    };
  }
};