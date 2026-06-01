import { APIRequestContext, Page, expect } from '@playwright/test';
//import { authData } from '../utils/test-data'

type LoginResponse = {
  access_token: string;
};
export async function loginByApi(
  request: APIRequestContext,
  page: Page
): Promise<void> {
   const response = await request.post(
  process.env.API_LOGIN_URL as string,
  {
    data: {
      email: process.env.USER_EMAIL as string,
      password: process.env.USER_PASSWORD as string,
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