import { expect, test } from "@playwright/test";
import { fixtureURL } from "/Users/tebinraouf/Desktop/design-system/random/spike/fast-cli-spike-3/fast-cli/packages/fast-cli/dist/esm/utilities/playwright.js";

test.describe("avatar", () => {
    const fixture = fixtureURL("avatar");

    test.beforeEach(async ({ page }) => {
        await page.goto(fixture);
    });

    test("should load the fixture URL", async ({ page }) => {
        const pageUrl = page.url();

        expect(pageUrl).toBe(`http://localhost:3000/${fixture}`);
    });
    test("should contain the component in the URL", async ({ page }) => {
        const element = page.locator("avatar");

        await expect(element).not.toBeNull();
    });
});
