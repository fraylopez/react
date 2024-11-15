export const React = {
    createElement: (tagOrComponent, props, ...children) => {
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
