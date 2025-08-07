import { test, expect } from "@playwright/test";

test.describe("Count Up Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/count-up");
  });

  test("Count Up", async ({ page }) => {
    const count = await page.locator("[data-testid=\"current-count\"]");
    await expect(count).toHaveText("0");
    const incrementButton = page.getByRole("button", { name: "Increment" });
    const resetButton = page.getByRole("button", { name: "Reset" });
    await incrementButton.click();
    await expect(count).toHaveText("1");
    await incrementButton.click();
    await expect(count).toHaveText("2");
    await resetButton.click();
    await expect(count).toHaveText("0");
  });
});
