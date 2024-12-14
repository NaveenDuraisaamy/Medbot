import { $, browser } from "@wdio/globals";

describe("Get Attribute", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/droppable/");
  });
  it("Get Attribute", async () => {
    await browser.pause(2000);
    const form = await $("#sidebar");
    const color = await form.getCSSProperty("color");
    const font = await form.getCSSProperty("font-family");
    const width = await form.getCSSProperty("width");
    const height = await form.getCSSProperty("height");
    console.log(await "This is CssProperty", color, font, width, height);
  });
});
