import { test, expect } from '@playwright/test';
test('Verify login with valid credentials', async ({ page }) => {
    await page.goto('/auth/login');
 const emailInput = page.locator('[data-test="email"]');
  const passwordInput = page.locator('[data-test="password"]');
  const loginButton = page.locator('[data-test="login-submit"]');

  await emailInput.fill('customer@practicesoftwaretesting.com');
  await passwordInput.fill('welcome01');
  await loginButton.click();

  await expect(page).toHaveURL('/account');
  const myAccount = page.locator('[data-test="page-title"]');
  await expect(myAccount).toHaveText('My account');

  const userName = page.locator('text=Jane Doe');
  await expect(userName).toBeVisible();

});