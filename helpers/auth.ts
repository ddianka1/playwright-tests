import { APIRequestContext, Page, expect } from '@playwright/test';

type LoginResponse = {
  access_token: string;
};
export async function loginByApi(
  request: APIRequestContext,
  page: Page
): Promise<void> {
  const response = await request.post(
    'https://api.practicesoftwaretesting.com/users/login',
    {
      data: {
        email: 'customer2@practicesoftwaretesting.com',
        password: 'welcome01',
      },
    }
  );

  expect(response.ok()).toBeTruthy();

  const jsonData = await response.json() as LoginResponse;
  const token = jsonData.access_token;

  await page.goto('/');

  await page.evaluate((authToken) => {
    localStorage.setItem('auth-token', authToken);
  }, token);

  await page.reload();
}