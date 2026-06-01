import { test, expect } from '../fixtures/app';

const cases = [
  { option: 'name,asc', order: 'asc' },
  { option: 'name,desc', order: 'desc' }
] as const;

test.describe('Sorting by name @regression', () => {

  for (const testCases of cases) {
    test(`Verify sorting ${testCases.order}`, async ({ page, app }) => {
     
      await app.homePage.open();

      // обрати сортування
      await app.homePage.sortBy(testCases.option);

      // отримати назви
      const names = await app.homePage.getProductNames();

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