import { test, expect } from '@playwright/test';

test('Verify mocked products', async ({ page }) => {
  const mockedProducts: {
    id: number;
    name: string;
    price: number;
  }[] = [];


  for (let i = 1; i <= 20; i++) {
    mockedProducts.push({
      id: i,
      name: `Mock Product ${i}`,
      price: i * 10,
    });
  }

  await page.route(
    'https://api.practicesoftwaretesting.com/products*',
    async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          data: mockedProducts,
          current_page: 1,
          from: 1,
          last_page: 1,
          per_page: 20,
          to: 20,
          total: 20,
        }),
      });
    }
  );

  await page.goto('https://practicesoftwaretesting.com/');

  await expect(page.getByTestId('product-name')).toHaveCount(20);
});