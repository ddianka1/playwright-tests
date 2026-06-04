import { test, expect } from '../fixtures/app';

const cases = [
  { option: 'price,asc', order: 'asc' },
  { option: 'price,desc', order: 'desc' }
] as const;

test.describe('Sorting by price @regression', () => {
  for (const c of cases) {
    test(`Verify sorting price ${c.order}`, async ({ page, app }) => {
      

      await app.homePage.open();

      await app.homePage.sortBy(c.option);

      const prices = await app.homePage.getProductPrices();

      const sorted = [...prices].sort((a, b) => a - b);

      if (c.order === 'desc') {
        sorted.reverse();
      }

      expect(prices).toEqual(sorted);
    });
  }
});

