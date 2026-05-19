import { test as base, expect } from './app';
import { App } from '../pages/App';
import { loginByApi } from '../helpers/auth';

type LoggedInAppFixture = {
  loggedInApp: App;
};

const test = base.extend<LoggedInAppFixture>({
 loggedInApp: async ({ app, request, page }, use) => {
    await loginByApi(request, page);

    await use(app);
  },
});

export { test, expect };