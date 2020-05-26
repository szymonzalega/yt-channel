export function filterChannels(channelsList, filterValue) {
  if (!filterValue) return channelsList;
  return channelsList.filter((channel) => {
    return channel.title.toLowerCase().includes(filterValue.toLowerCase());
  });
}

export function debounce(callback, time) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), time);
  };
}

export function clearFilter() {
  const filterInputElement = document.querySelector("#filter-input");
  filterInputElement.value = "";
}
