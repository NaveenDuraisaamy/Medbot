import { $, browser } from "@wdio/globals";

describe("", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/droppable/");
  });
  it("", async () => {
    await browser.pause(2000);
    const search = await $("(//input[@placeholder='Search'])[1]");
    const label = await search.getLocation();
    console.log("This is label :", label);
  });
});
