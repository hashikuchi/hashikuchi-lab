import { test, expect} from "@playwright/test";

test.describe("Home Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5174");    
  });

  test("Has title", async ({ page }) => {
    await expect(page).toHaveTitle("Hashikuchi's Lab");
  });
});
