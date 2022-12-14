import { expect, test } from "@playwright/test";
import { fixtureURL } from "../../utils";

test.describe("modal", () => {
    const fixture = fixtureURL("modal");
    test.beforeEach(async ({ page }) => {
        await page.goto(fixture);
    });
    test("should load the fixture URL", async ({ page }) => {
        const pageUrl = page.url();
        expect(pageUrl).toBe(`http://localhost:3000/${fixture}`);
    });
    test("should contain the component in the URL", async ({ page }) => {
        const element = page.locator("modal");
        await expect(element).not.toBeNull();
    });
});
