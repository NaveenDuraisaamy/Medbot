import { $, browser } from "@wdio/globals";

describe("", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/button/");
  });
  it("", async () => {
    const frame = await $("//iframe[@class='demo-frame']");
    await browser.switchFrame(frame);
    const search = await $("button[class='ui-button ui-corner-all ui-widget']");
    const label = await search.isEnabled();
    console.log("This is label :", label);
  });
});
