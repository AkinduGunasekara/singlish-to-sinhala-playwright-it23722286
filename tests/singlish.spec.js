import { test, expect } from '@playwright/test';

/* COMMON SETUP */
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

/* POSITIVE FUNCTIONAL TEST CASES */

/* Pos_Fun_01 */
test('Pos_Fun_01 – simple personal question', async ({ page }) => {
  await page.fill('textarea', 'obage name eka mokadhdha');
  await expect(page.locator('textarea')).toHaveValue('obage name eka mokadhdha');
  await expect(page.getByText('Sinhala', { exact: true }).nth(1)).toBeVisible();
});

/* Pos_Fun_02 */
test('Pos_Fun_02 – food request', async ({ page }) => {
  await page.fill('textarea', 'mata bath kanna oona');
  await expect(page.locator('textarea')).toHaveValue('mata bath kanna oona');
  await expect(page.getByText('Sinhala', { exact: true }).nth(1)).toBeVisible();
});

/* Pos_Fun_03  */
test('Pos_Fun_03 – informal greeting', async ({ page }) => {
  await page.fill('textarea', 'yaluwane kohoma dha');
  await expect(page.locator('textarea')).toHaveValue('yaluwane kohoma dha');
  await expect(page.getByText('Sinhala', { exact: true }).nth(1)).toBeVisible();
});

/* Pos_Fun_04 */
test('Pos_Fun_04 – mixed English term', async ({ page }) => {
  await page.fill('textarea', 'mama email ekak evannam');
  await expect(page.locator('textarea')).toHaveValue('mama email ekak evannam');
  await expect(page.getByText('Sinhala', { exact: true }).nth(1)).toBeVisible();
});

/* Pos_Fun_05 */
test('Pos_Fun_05 – future tense usage', async ({ page }) => {
  await page.fill('textarea', 'api heta gedhara yamu');
  await expect(page.locator('textarea')).toHaveValue('api heta gedhara yamu');
  await expect(page.getByText('Sinhala', { exact: true }).nth(1)).toBeVisible();
});

/* Pos_Fun_06  */
test('Pos_Fun_06 – plural pronoun', async ({ page }) => {
  await page.fill('textarea', 'api okkoma yamu');
  await expect(page.locator('textarea')).toHaveValue('api okkoma yamu');
  await expect(page.getByText('Sinhala', { exact: true }).nth(1)).toBeVisible();
});

/* NEGATIVE FUNCTIONAL TEST CASES */

/* Neg_Fun_01  */
test('Neg_Fun_01 – typo input', async ({ page }) => {
  await page.fill('textarea', 'gagee paninawa');
  await expect(page.locator('textarea')).toHaveValue('gagee paninawa');
  await expect(page.getByText('Sinhala', { exact: true }).nth(1)).toBeVisible();
});

/* Neg_Fun_02 */
test('Neg_Fun_02 – joined words', async ({ page }) => {
  await page.fill('textarea', 'mamagedharayanavaa');
  await expect(page.locator('textarea')).toHaveValue('mamagedharayanavaa');
  await expect(page.getByText('Sinhala', { exact: true }).nth(1)).toBeVisible();
});

/* Neg_Fun_03 */
test('Neg_Fun_03 – symbols in input', async ({ page }) => {
  await page.fill('textarea', 'm@ma g#dhara y@navaa');
  await expect(page.locator('textarea')).toHaveValue('m@ma g#dhara y@navaa');
  await expect(page.getByText('Sinhala', { exact: true }).nth(1)).toBeVisible();
});

/* UI TEST CASE */

/* Pos_UI_01  */
test('Pos_UI_01 – real-time output update', async ({ page }) => {
  const input = page.locator('textarea');
  await input.type('man gedhara yanavaa');
  await expect(page.getByText('Sinhala', { exact: true }).nth(1)).toBeVisible();
});
