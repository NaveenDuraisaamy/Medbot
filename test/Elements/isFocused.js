import { $, browser } from "@wdio/globals";

describe("", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/");
  });
  it("", async () => {
    const search = await $("input[placeholder='Search']");
    const label = await search.isFocused();
    console.log("This is label :", label);
  });
});
