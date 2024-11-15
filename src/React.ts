export const React = {
  createElement: (...params: any[]) => {
    return {
      tag: params[0],
      props: params[1],
      children: params.slice(2)
    };
  }
};