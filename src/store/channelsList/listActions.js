import {
  SET_FILTER_VALUE,
  SET_SORTED_CHANNELS,
  CLEAR_SORT_AND_FILTER,
  SET_SORT_VALUE,
  SET_ORIGINAL_CHANNELS,
  SET_CHANNELS,
} from "./listEvents.js";

export const SetOriginalChannels = (value) => {
  return {
    type: SET_ORIGINAL_CHANNELS,
    value,
  };
};

export const SetChannels = (value) => {
  return {
    type: SET_CHANNELS,
    value,
  };
};

export const SetFilterValue = (value) => {
  return {
    type: SET_FILTER_VALUE,
    value,
  };
};

export const SetSortedChannels = (value) => {
  return {
    type: SET_SORTED_CHANNELS,
    value,
  };
};

export const SetSortValue = (value) => {
  return {
    type: SET_SORT_VALUE,
    value,
  };
};

export const ClearSortAndFilter = () => {
  return {
    type: CLEAR_SORT_AND_FILTER,
  };
};
