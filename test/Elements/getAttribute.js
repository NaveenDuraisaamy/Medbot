import { $, browser } from "@wdio/globals";

describe("Get Attribute", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/droppable/");
  });
  it("Get Attribute", async () => {
    await browser.pause(2000);
    const form = await $("#sidebar");
    const attr = await form.getAttribute("class");
    console.log(await "This is Attribute", attr);
  });
});
