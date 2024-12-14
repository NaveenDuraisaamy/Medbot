import { $, browser } from "@wdio/globals";

describe("", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/droppable/");
  });
  it("", async () => {
    await browser.pause(2000);
    const search = await $("input[placeholder='Search']");
    await search.setValue("Hi");
    await browser.pause(1000);
    const label = await search.getValue();
    console.log("This is label :", label);
  });
});
