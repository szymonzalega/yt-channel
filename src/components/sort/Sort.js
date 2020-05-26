import Component from "../Component.js";
import {
  SetSortedChannels,
  ClearSortAndFilter,
  SetSortValue,
} from "../../store/channelsList/listActions.js";
import * as sortService from "./sortService.js";

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.onChangeValueEventHandler = this.onChangeValueEventHandler.bind(this);
    this.onClearButtonClickEventHandler = this.onClearButtonClickEventHandler.bind(
      this
    );
  }

  onChangeValueEventHandler(e) {
    const listToSort = this.getStoreState().channelsList.channels;
    this.dispatch(
      SetSortedChannels(sortService.sortChannels(listToSort, e.target.value))
    );
    this.dispatch(SetSortValue(e.target.value));
  }

  onClearButtonClickEventHandler(e) {
    if (
      this.getStoreState().channelsList.filterValue ||
      this.getStoreState().channelsList.sortValue
    ) {
      sortService.clearSortInput();
      this.dispatch(ClearSortAndFilter());
    }
  }

  render() {
    return `<aside class="wrapper__aside" data-js="sort">
    <div class="sort">
      <h3 class="sort__header">Sort channels by:</h3>
      <ul class="sort__options">
        <li>
          <input
            class="choice choice--radio"
            name="sort"
            type="radio"
            value="title"
            onChange="sort.onChangeValueEventHandler(event)"
            id="sort-title"
          />
          <label class="choice__label" for="sort-title">title</label>
        </li>
        <li>
          <input
            class="choice choice--radio"
            name="sort"
            type="radio"
            value="subscriberCount"
            onChange="sort.onChangeValueEventHandler(event)"
            id="sort-subscribers"
          />
          <label class="choice__label" for="sort-subscribers"
            >subscribers</label
          >
        </li>
        <li>
          <input
            class="choice choice--radio"
            name="sort"
            type="radio"
            value="videoCount"
            onChange="sort.onChangeValueEventHandler(event)"
            id="sort-videos"
          />
          <label class="choice__label" for="sort-videos">videos</label>
        </li>
        <li>
          <input
            class="choice choice--radio"
            name="sort"
            type="radio"
            value="viewCount"
            onChange="sort.onChangeValueEventHandler(event)"
            id="sort-views"
          />
          <label class="choice__label" for="sort-views">views</label>
        </li>
      </ul>
      <button onclick="sort.onClearButtonClickEventHandler(event)" id="clear-btn" class="button">Clear</button>
    </div>
  </aside>`;
  }
}
