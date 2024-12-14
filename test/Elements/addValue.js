import LoginPage from "../pageobjects/login.page";
import { $, browser } from "@wdio/globals";

describe("Actions", () => {
  before(async () => {
    await LoginPage.open();
    await LoginPage.login("admin@srmtech.com", "SRM@1234");
  });
  it("Actions handling", async () => {
    await browser.pause(2000);
    await $("input[placeholder='Search for anything here...']").addValue(
      "Naveen"
    );
    await $("input[placeholder='Search for anything here...']").addValue(
      "Lachuuu"
    );
    await browser.pause(2000);
  });
});
