import * as sortService from "./sortService";

const channels = [
  {
    title: "meet.js",
    statistics: {
      viewCount: "28565",
      subscriberCount: "504",
      videoCount: "69",
    },
  },
  {
    title: "JSConf",
    statistics: {
      viewCount: "6747555",
      subscriberCount: "106248",
      videoCount: "1281",
    },
  },
  {
    title: "Allegro Tech",
    statistics: {
      viewCount: "38100",
      subscriberCount: "577",
      videoCount: "96",
    },
  },
];

describe("Sort function", () => {
  test("it should sort channel list by title in ascending order", () => {
    const output = [
      {
        title: "Allegro Tech",
        statistics: {
          viewCount: "38100",
          subscriberCount: "577",
          videoCount: "96",
        },
      },
      {
        title: "JSConf",
        statistics: {
          viewCount: "6747555",
          subscriberCount: "106248",
          videoCount: "1281",
        },
      },
      {
        title: "meet.js",
        statistics: {
          viewCount: "28565",
          subscriberCount: "504",
          videoCount: "69",
        },
      },
    ];

    expect(sortService.sortChannels(channels, "title")).toEqual(output);
  });
  test("it should sort channel list by videosCount in ascending order", () => {
    const output = [
      {
        title: "meet.js",
        statistics: {
          viewCount: "28565",
          subscriberCount: "504",
          videoCount: "69",
        },
      },
      {
        title: "Allegro Tech",
        statistics: {
          viewCount: "38100",
          subscriberCount: "577",
          videoCount: "96",
        },
      },
      {
        title: "JSConf",
        statistics: {
          viewCount: "6747555",
          subscriberCount: "106248",
          videoCount: "1281",
        },
      },
    ];

    expect(sortService.sortChannels(channels, "videoCount")).toEqual(output);
  });
  test("it should unchecked radio", () => {
    document.body.innerHTML = `
        <input type="radio" id="sort-title" name="sort" value="title" checked />
        `;

    sortService.clearSortInput();

    const radioElem = document.querySelectorAll("input[type=radio]:checked");

    expect(radioElem.length).toBe(0);
  });
});
