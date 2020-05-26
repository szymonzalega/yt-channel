export function sortChannels(listToSort, sortValue) {
  const sortBy = (field) => {
    const key = (channel) => {
      if (field === "title") return channel[field];
      return parseInt(channel.statistics[field]);
    };

    return (a, b) =>
      typeof key(a) == "string"
        ? key(a).localeCompare(key(b))
        : key(a) - key(b);
  };

  return listToSort.sort(sortBy(sortValue));
}

export function clearSortInput() {
  const checkedRadioElement = document.querySelector(
    'input[name="sort"]:checked'
  );
  if (checkedRadioElement) {
    checkedRadioElement.checked = false;
  }
}
