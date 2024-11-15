export const React = {
    createElement: (tag, props, ...children) => {
        return {
            tag,
            props,
            children,
        };
    }
};
