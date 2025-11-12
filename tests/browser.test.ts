import { test } from "@playwright/test";

test("test browser", async ({ page }) => {
    // NOTE ブラウザが起動した時に表示されるページ 適宜URLを書き換えること
    await page.goto("https://example.com");

    await page.pause();
});