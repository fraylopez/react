export const React = {
  createElement: (...params: any[]) => {
    return {
      tag: params[0]
    };
  }
};