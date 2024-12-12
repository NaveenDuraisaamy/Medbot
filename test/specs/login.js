import LoginPage from "../pageobjects/login.page.js";
import { browser, expect } from "@wdio/globals";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    // Open the login page
    await LoginPage.open();

    // Perform login
    await LoginPage.login("admin@srmtech.com", "SRM@1234");

    // Wait for the success alert (toast message) to be displayed
    const successTextElement = await $("div[role='alert']");
    await successTextElement.waitForDisplayed({ timeout: 5000 });

    // Validate the text directly on the element
    await expect(successTextElement).toHaveText("Login Successful");

    // Log the text for debugging
    const text = await successTextElement.getText();
    await console.log("Hello:", text);

    await expect(browser).toHaveUrl("http://65.1.18.83:5173/");

    await browser.pause(2000);
  });
});
