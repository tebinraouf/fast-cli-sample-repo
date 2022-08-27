import { expect, test } from "@playwright/test";
import { fixtureURL } from "../../utils/index.js";

test.describe("progress-ring", () => {
    const fixture = fixtureURL("progress-ring");
    test.beforeEach(async ({ page }) => {
        await page.goto(fixture);
    });
    test("should load the fixture URL", async ({ page }) => {
        const pageUrl = page.url();
        expect(pageUrl).toBe(`http://localhost:3000/${fixture}`);
    });
    test("should contain the component in the URL", async ({ page }) => {
        const element = page.locator("progress-ring");
        await expect(element).not.toBeNull();
    });
});
