import LoginPage from "../pageobjects/login.page";
import { $, browser } from "@wdio/globals";

describe("Actions", () => {
  before(async () => {
    // Open the login page and log in
    await LoginPage.open();
    await LoginPage.login("admin@srmtech.com", "SRM@1234");
  });

  it("Actions handling", async () => {
    await browser.pause(3000);
    // Wait until the element is displayed
    const dashboard = await $(
      ".MuiButtonBase-root.MuiListItemButton-root.MuiListItemButton-gutters.MuiListItemButton-root.MuiListItemButton-gutters.css-go61nc"
    );
    // Click the element
    const getValue = await dashboard.getText();
    console.log("This is value :", getValue);

    await dashboard.click();
  });
});
