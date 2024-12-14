import { $, browser } from "@wdio/globals";

describe("", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/selectable/");
  });
  it("", async () => {
    const switchframe = await $(".demo-frame");
    await browser.switchFrame(switchframe);

    const one = await $("li:nth-child(1)");
    const two = await $("li:nth-child(1)");
    const three = await $("li:nth-child(2)");

    await one.isEqual(two);
    await one.isEqual(three);
  });
});
