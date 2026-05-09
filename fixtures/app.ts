import { test as base, expect } from '@playwright/test';
import { App } from '../pages/App';

type AppFixture = {
  app: App;
};

const test = base.extend<AppFixture>({
  app: async ({ page }, use) => {
    const app = new App(page);
    await use(app);
  },
});

export { test, expect };