import LoginPage from "../pageobjects/login.page";
import { $, browser } from "@wdio/globals";

describe("Actions", () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.login("admin@srmtech.com", "SRM@1234");
  });
  it("Actions handling", async () => {
    await browser.pause(2000);
    const text = $("input[placeholder='Search for anything here...']");
    await text.addValue("Naveen");
    await text.addValue("lachuuu");
    await browser.pause(2000);
    await text.clearValue();
    await browser.pause(2000);
  });
});
