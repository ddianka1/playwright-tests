import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

const cases = [
  { option: 'name,asc', order: 'asc' },
  { option: 'name,desc', order: 'desc' }
] as const;

test.describe('Sorting by name', () => {

  for (const testCases of cases) {
    test(`Verify sorting ${testCases.order}`, async ({ page }) => {
      const homePage = new HomePage(page);

      await homePage.open();

      // обрати сортування
      await homePage.sortBy(testCases.option);

      // отримати назви
      const names = await homePage.getProductNames();

      // створити копію і відсортувати
      const sorted = [...names].sort((a, b) => a.localeCompare(b));

      if (testCases.order === 'desc') {
        sorted.reverse();
      }

      // перевірка
      expect(names).toEqual(sorted);
    });
  }

});