import { $, browser } from "@wdio/globals";

describe("", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/droppable/");
  });
  it("", async () => {
    await browser.pause(2000);
    const search = await $("a[href='https://jqueryui.com/draggable/']");
    const label = await search.isClickable();
    console.log("This is label :", label);
  });
});
