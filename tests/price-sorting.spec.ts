import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

const cases = [
  { option: 'price,asc', order: 'asc' },
  { option: 'price,desc', order: 'desc' }
];

test.describe('Sorting by price', () => {
  for (const c of cases) {
    test(`Verify sorting price ${c.order}`, async ({ page }) => {
      const homePage = new HomePage(page);

      await homePage.open();

      await homePage.sortBy(c.option);

      const prices = await homePage.getProductPrices();

      const sorted = [...prices].sort((a, b) => a - b);

      if (c.order === 'desc') {
        sorted.reverse();
      }

      expect(prices).toEqual(sorted);
    });
  }
});

