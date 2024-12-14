import LoginPage from "../pageobjects/login.page";
import { $, $$, browser } from "@wdio/globals";

describe("Specialities", async () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.login("admin@srmtech.com", "SRM@1234");
  });
  it("Adding new specialities", async () => {
    await browser.pause(2000);
    await browser.saveScreenshot("./Screenshots/Screenshots.png");
  });
});
