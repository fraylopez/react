export const React = {
    createElement: (...params) => {
        return {
            tag: params[0],
            children: params.slice(1)
        };
    }
};
