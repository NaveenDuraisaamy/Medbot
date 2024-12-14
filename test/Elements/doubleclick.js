import LoginPage from "../pageobjects/login.page";
import { $, browser } from "@wdio/globals";

describe("Double click", () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.login("admin@srmtech.com", "SRM@1234");
  });
  it("Double click", async () => {
    await browser.pause(2000);
    await $("button[aria-label='account of current user']").doubleClick();
    await browser.pause(2000);
  });
});
