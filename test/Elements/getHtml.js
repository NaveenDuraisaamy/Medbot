import { $, browser } from "@wdio/globals";

describe("", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/droppable/");
  });
  it("", async () => {
    await browser.pause(2000);
    const search = await $("nav[id='main'] li:nth-child(2)");
    const label = await search.getHTML({ includeSelectorTag: false });
    console.log("This is label :", label);
  });
});
