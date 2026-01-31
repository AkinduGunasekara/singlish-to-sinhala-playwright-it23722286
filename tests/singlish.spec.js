import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

test('Pos_Fun_01 – simple name question', async ({ page }) => {
  await page.fill('textarea', 'obage name eka mokadhdha');
  await expect(page.locator('body')).toContainText('ඔබ');
});

test('Pos_Fun_02 – food request', async ({ page }) => {
  await page.fill('textarea', 'mata bath kanna oona');
  await expect(page.locator('body')).toContainText('බත්');
});

test('Neg_Fun_01 – typo input', async ({ page }) => {
  await page.fill('textarea', 'gagee paninawa');
  await expect(page.locator('body')).not.toContainText('ගඟේ');
});

test('Pos_UI_01 – real time update', async ({ page }) => {
  const input = page.locator('textarea');
  await input.type('mama akidhu');
  await expect(page.locator('body')).toBeVisible();
});
