import { test as base, expect } from './app';
import { App } from '../pages/App';

type LoggedInAppFixture = {
  loggedInApp: App;
};

const test = base.extend<LoggedInAppFixture>({
  loggedInApp: async ({ app }, use) => {
    await app.loginPage.open();

    await app.loginPage.performLogin(
      'customer2@practicesoftwaretesting.com',
      'welcome01'
    );

    await app.accountPage.verifyAccountPage();

    await use(app);
  },
});

export { test, expect };
