import { $, browser } from "@wdio/globals";

describe("", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/checkboxradio/");
  });
  it("", async () => {
    const switchframe = await $(".demo-frame");
    await browser.switchFrame(switchframe);

    const search = await $("label[for='radio-2']");
    const label = await search.isSelected();
    console.log("This is label :", label);
  });
});
