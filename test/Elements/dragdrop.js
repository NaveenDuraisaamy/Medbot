import { $, browser } from "@wdio/globals";

describe("Double click", () => {
  before(async () => {
    await browser.url("https://jqueryui.com/droppable/");
  });
  it("Double click", async () => {
    await browser.pause(2000);
    const switchframe = await $(".demo-frame");
    await browser.switchFrame(switchframe);

    await browser.pause(1000);
    const drag = await $("#draggable");
    const drop = await $("#droppable");

    await drag.dragAndDrop(drop);

    await browser.pause(1000);
  });
});
