/** @format */
function customRender(element, container) {
  const createElement = document.createElement(element.type);
  createElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    createElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(createElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
