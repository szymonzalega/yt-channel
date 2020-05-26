import Filter from "./Filter.js";
import createElement from "../createElement/index.js";

const filterElement = document.querySelector("[data-js=filter]");
const filter = new Filter();
const filterNode = createElement(filter);
window.filter = filter;
filterElement.parentNode.replaceChild(filterNode, filterElement);
