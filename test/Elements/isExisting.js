import { $, browser } from "@wdio/globals";

describe("", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/");
  });
  it("", async () => {
    const search = await $("a[href='https://jqueryui.com/demos/']");
    const label = await search.isExisting();
    console.log("This is label :", label);
  });
});
