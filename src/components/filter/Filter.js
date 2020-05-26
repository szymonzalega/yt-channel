import Component from "../Component.js";
import { CLEAR_SORT_AND_FILTER } from "../../store/channelsList/listEvents.js";
import { SetFilterValue } from "../../store/channelsList/listActions.js";
import * as filterService from "./filterService.js";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.onEvent = this.onEvent.bind(this);
    this.setSubscriber("filter", this.onEvent);
    this.onInputEventHandler = this.onInputEventHandler.bind(this);
    this.debounce = filterService.debounce(
      this.debounceCallback.bind(this),
      400
    );
  }

  debounceCallback(e) {
    this.dispatch(SetFilterValue(e.target.value));
  }

  onInputEventHandler(e) {
    this.debounce(e);
  }

  onEvent(state, action) {
    if (action.type === CLEAR_SORT_AND_FILTER) {
      filterService.clearFilter();
    }
  }

  render() {
    return `<div class="wrapper__filter">
      <div class="filter">
        <input
          id="filter-input"
          oninput="filter.onInputEventHandler(event)"
          class="filter__input"
          type="text"
          placeholder="filter channels..."
        />
      </div>
    </div>`;
  }
}
