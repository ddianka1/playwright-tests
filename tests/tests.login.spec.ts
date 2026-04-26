import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';


test('Verify login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const accountPage = new AccountPage(page);

  await loginPage.open();

  await loginPage.performLogin(
    'customer@practicesoftwaretesting.com',
    'welcome01'
  );

  await accountPage.verifyAccountPage();
});