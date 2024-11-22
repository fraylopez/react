import { React, render } from '../src/React';

const App = () => {
  return (
    <div draggable>
      <h2>Hello React!</h2>
      <p>I am a pargraph</p>
      <input type="text" />
    </div>
  );
};
const root = document.getElementById("app-root");
render(React.createElement(App), root);
