import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { Category } from '../utils/enums';

test('Verify filter by Sander', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await homePage.selectSubCategory('Sander');
  await expect(page.getByTestId('product-name').first())
    .toContainText('Sander');

  const names = await homePage.getProductNames();

  for (const name of names) {
    expect(name).toContain('Sander');
  }
});