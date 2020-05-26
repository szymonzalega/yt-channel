import createElement from "./index.js";
import Filter from "../filter/Filter.js";

describe("Create element function", () => {
  test("it should create filter element using Filter Component)", () => {
    const output = `<div class="filter">
                        <input id="filter-input" oninput="filter.onInputEventHandler(event)" class="filter__input" type="text" placeholder="filter channels...">
                    </div>`;

    const filterNode = createElement(new Filter());

    expect(filterNode.innerHTML.replace(/\s/g, "")).toBe(
      output.replace(/\s/g, "")
    );
  });
});
