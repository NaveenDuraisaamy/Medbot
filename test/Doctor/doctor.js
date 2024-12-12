import LoginPage from "../pageobjects/login.page.js";
import { $, browser } from "@wdio/globals";

describe("Doctor Dashboard Tests", () => {
  before(async () => {
    // Open the login page and perform login
    await LoginPage.open();
    await LoginPage.login("admin@srmtech.com", "SRM@1234");
  });

  it("Should Verify Doctor Dashboard Statistics", async () => {
    await browser.pause(2000);

    // Click on the Doctors dashboard
    await $(
      "//span[text()='Doctors']/ancestor::div[contains(@class, 'css-pvj0vt')]"
    ).click();

    // Approved count
    const approved = await $(
      "button[class='MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-1bwq7cm'] div[class='MuiBox-root css-10egq61']"
    );
    const totalApproved = await approved.getText();
    console.log("This is Approved count:", totalApproved);

    // Pending count
    const pending = await $(
      "div[class='MuiTabs-root css-1jky768'] button:nth-child(2)"
    );
    const totalPending = await pending.getText();
    console.log("This is Pending count:", totalPending);

    // Hold count
    const hold = await $(
      "div[class='MuiTabs-root css-1jky768'] button:nth-child(3)"
    );
    const totalHold = await hold.getText();
    console.log("This is Hold count:", totalHold);

    // Declined count
    const declined = await $(
      "div[class='MuiTabs-root css-1jky768'] button:nth-child(4)"
    );
    const totalDeclined = await declined.getText();
    console.log("This is Declined count:", totalDeclined);

    // Unregistered count
    const unregistered = await $(
      "div[class='MuiTabs-root css-1jky768'] button:nth-child(5)"
    );
    const totalUnregistered = await unregistered.getText();
    console.log("This is Unregistered count:", totalUnregistered);
  });

  it("Active and Inactive Count", async () => {
    // Active count
    const active = await $(
      "div[class='MuiBox-root css-6lzzp6'] p[class='MuiTypography-root MuiTypography-body2 css-1k2624n']"
    );
    const activeCount = await active.getText();
    console.log("This is Active Count:", activeCount);

    // Inactive count
    const inactive = await $(
      ".MuiTypography-root.MuiTypography-body2.css-ypyt6u"
    );
    const inactiveCount = await inactive.getText();
    console.log("This is Inactive Count:", inactiveCount);
  });

  it("Search the Doctors", async () => {
    // Search by name
    const searchKeyword = "Thomas";
    const searchInput = await $("input[placeholder='Search']");
    await searchInput.setValue(searchKeyword);
    // await browser.keys("Enter");
    await browser.pause(1000);

    // Clear search and search by email
    await searchInput.setValue("thomas@mailinator.com");
    await browser.pause(1000);

    // Clear search and search by phone number
    await searchInput.setValue("9879879875");
    await browser.pause(1000);

    await searchInput.setValue(searchKeyword);
    const searchresult = await $(
      ".MuiTypography-root.MuiTypography-subtitle2.css-1c3smbu"
    );
    const match = await searchresult.getText();
    console.log(await "Thi is SearchKeyword :", match);
    if (match === "Dr. Thomas Shelby") {
      console.log(await "Result : Pass");
    } else {
      console.log(await "Result : Fail");
    }
    //Clear the search
    await $(
      ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall.css-9qtxpj"
    ).click();
  });
  it("Filter the Doctors", async () => {
    //Click on Filter
    const filter = await $("//button[normalize-space()='Filters']");
    await filter.click();
    //Experience Filter
    const exp = await $("//div[text()='Experience']");
    await exp.click();
    //Select the year
    const year = await $("//span[text()='10+ years']");
    await year.click();
    //Apply button
    const apply = await $("//button[text()='Apply']");
    await apply.click();
    await browser.pause(2000);

    //Get the filtered doctor list
    const listDoctor = await $$(".MuiBox-root.css-r1f7r1");

    for (const doc of listDoctor) {
      const listofDoctor = await doc.getText();
      console.log("Doctors Name :", listofDoctor);

      if (listofDoctor.includes("Dr. Thomas Shelby")) {
        await doc.click();
        break;
      }
    }
    await browser.pause(1000);
    //Scrolldown
    await browser.execute(() => {
      window.scrollBy(0, 3000);
    });
    await browser.pause(2000);
    //Scrollup
    await browser.execute(() => {
      window.scrollBy(0, -3000);
    });
    await browser.pause(2000);

    await browser.back();
    await browser.pause(2000);
  });
});
