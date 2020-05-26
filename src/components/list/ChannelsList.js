import Component from "../Component.js";
import createElement from "../createElement/index.js";
import Channel from "./Channel.js";
import {
  SET_FILTER_VALUE,
  SET_SORTED_CHANNELS,
  CLEAR_SORT_AND_FILTER,
} from "../../store/channelsList/listEvents.js";
import { filterChannels } from "../filter/filterService.js";

import { getChannels } from "../../api/channelService.js";
import {
  SetChannels,
  SetOriginalChannels,
} from "../../store/channelsList/listActions.js";
import ErrorMessage from "../errorMessage/ErrorMessage.js";

export default class ChannelsList extends Component {
  constructor(props) {
    super(props);
    this.onEvent = this.onEvent.bind(this);
    this.setSubscriber("channelsList", this.onEvent);
    this.getData();
  }

  async getData() {
    try {
      const channelsList = await getChannels();
      this.dispatch(SetOriginalChannels([...channelsList]));
      this.dispatch(SetChannels(channelsList));
      this.rerenderChannelComponent(this.getStoreState().channelsList.channels);
    } catch (error) {
      console.error(error);
      this.renderErrorMessage();
    }
  }

  onEvent(state, action) {
    if (action.type === SET_FILTER_VALUE) {
      this.rerenderChannelComponent(
        filterChannels(state.channelsList.channels, action.value)
      );
    }
    if (action.type === SET_SORTED_CHANNELS) {
      if (state.channelsList.filterValue) {
        this.rerenderChannelComponent(
          filterChannels(
            state.channelsList.channels,
            state.channelsList.filterValue
          )
        );
      } else {
        this.rerenderChannelComponent(state.channelsList.channels);
      }
    }

    if (action.type === CLEAR_SORT_AND_FILTER) {
      this.rerenderChannelComponent(state.channelsList.channels);
    }
  }

  removeChildNodes() {
    Array.from(this.refs.channelsList.childNodes).forEach((node) =>
      node.remove()
    );
  }

  renderErrorMessage() {
    this.removeChildNodes();
    const child = createElement(
      new ErrorMessage({ msg: "There are some error occurred" })
    );
    this.refs.channelsList.appendChild(child);
  }

  rerenderChannelComponent(channelsList) {
    this.removeChildNodes();
    channelsList.forEach((channel) => {
      const child = createElement(new Channel({ channel }));
      this.refs.channelsList.appendChild(child);
    });
  }

  render() {
    return `<main class="wrapper__main js-content" data-ref="channelsList">
      Loading...
      </main>`;
  }
}
