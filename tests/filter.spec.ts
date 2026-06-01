import { test, expect } from '../fixtures/app';

test('Verify filter by Sander @regression', async ({ page, app }) => {
  

  await app.homePage.open();

  await app.homePage.selectSubCategory('Sander');
  await expect(page.getByTestId('product-name').first())
    .toContainText('Sander');

  const names = await app.homePage.getProductNames();

  for (const name of names) {
    expect(name).toContain('Sander');
  }
});