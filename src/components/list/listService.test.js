import * as listService from "./listService.js";

describe("Channel list component function", () => {
  test("it should parse integer number to US/British notation", () => {
    expect(listService.formatIntegerValue(1000000)).toBe("1,000,000");
    expect(listService.formatIntegerValue(1000)).toBe("1,000");
    expect(listService.formatIntegerValue(100)).toBe("100");
    expect(listService.formatIntegerValue(0)).toBe("0");
  });
});