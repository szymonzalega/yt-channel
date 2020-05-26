import * as filterService from "./filterService.js";

const channels = [
  {
    title: "freeCodeCamp.org",
  },
  {
    title: "meet.js",
  },
  {
    title: "JSConf",
  },
  {
    title: "Coding Tech",
  },
  {
    title: "Allegro Tech",
  },
];

describe("Filter function", () => {
  test("it should filter channel list by title (case-insensitive)", () => {
    const output = [
      {
        title: "freeCodeCamp.org",
      },
      {
        title: "JSConf",
      },
      {
        title: "Coding Tech",
      },
    ];

    expect(filterService.filterChannels(channels, "co")).toEqual(output);
    expect(filterService.filterChannels(channels, "CO")).toEqual(output);
  });

  test("it should return all item", () => {
    expect(filterService.filterChannels(channels, "")).toEqual(channels);
  });

  test("it should clear filter input", () => {
    document.body.innerHTML = `
            <input id="filter-input" value="filterByMe" />
        `;

    const filterElem = document.querySelector("#filter-input");

    filterService.clearFilter();

    expect(filterElem.value).toBe("");
  });
});

describe("Debounce function", () => {
  jest.useFakeTimers();

  test("it should call callback only only time", () => {
    const callback = jest.fn();

    let run = filterService.debounce(callback, 200);
    run();

    expect(callback).not.toBeCalled();

    for (let i = 0; i <= 5; i++) {
      run();
    }

    jest.runAllTimers();

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
