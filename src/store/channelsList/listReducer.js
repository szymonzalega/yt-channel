import {
  SET_FILTER_VALUE,
  SET_SORTED_CHANNELS,
  CLEAR_SORT_AND_FILTER,
  SET_SORT_VALUE,
  SET_ORIGINAL_CHANNELS,
  SET_CHANNELS,
} from "./listEvents.js";

export default (state, action) => {
  switch (action.type) {
    case SET_ORIGINAL_CHANNELS:
      return {
        ...state,
        originalChannels: action.value,
      };

    case SET_CHANNELS:
      return {
        ...state,
        channels: action.value,
      };
    case CLEAR_SORT_AND_FILTER:
      return {
        ...state,
        channels: [...state.originalChannels],
        sortValue: "",
        filterValue: "",
      };
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.value,
      };
    case SET_SORTED_CHANNELS:
      return {
        ...state,
        channels: action.value,
      };
    case SET_SORT_VALUE:
      return {
        ...state,
        sortValue: action.value,
      };

    default:
      return state;
  }
};
