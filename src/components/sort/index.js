import Sort from "./Sort.js";
import createElement from "../createElement/index.js"

const sortElement = document.querySelector("[data-js=sort]");
const sort = new Sort();
const sortNode = createElement(sort);
window.sort = sort;
sortElement.parentNode.replaceChild(sortNode, sortElement);
