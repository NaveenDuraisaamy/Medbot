import { $, browser } from "@wdio/globals";

describe("Get Attribute", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/droppable/");
  });
  it("Get Attribute", async () => {
    await browser.pause(2000);
    const search = await $("(//input[@placeholder='Search'])[1]");
    const label = await search.getComputedLabel();
    console.log("This is label :", label);
  });
});
