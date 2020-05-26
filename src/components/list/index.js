import ChannelsList from "./ChannelsList.js";
import createElement from "../createElement/index.js";
import channelsListReducer from "../../store/channelsList/listReducer.js";
import { store } from "../../store/index.js";
import initState from "../../store/channelsList/initState.js";

store.setReducer("channelsList", channelsListReducer, initState);

const channelsListElements = document.querySelector("[data-js=channels-list]");
const channelsList = new ChannelsList();
const channelsListNode = createElement(channelsList);
window.channelsList = channelsList;
channelsListElements.parentNode.replaceChild(
  channelsListNode,
  channelsListElements
);
