/** @format */
function customRender(element, container) {
  const createElement = document.createElement(element.type);
  createElement.innerHTML = reactElements.children;
  createElement.setAttribute("href", reactElements.props.href);
  createElement.setAttribute("target", reactElements.props.target);
  container.appendChild(createElement);
}

const reactElements = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click and visit google",
};

const mainContainers = document.querySelector(".root");

customRender(reactElements, mainContainers);
