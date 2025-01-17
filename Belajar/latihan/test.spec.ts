import { test, expect } from '@playwright/test';
import { PlaywrightLoginAdmin } from './admin/login-admin';

test.describe('Test', () => {
  test.beforeEach(async ({ page }) => {
    const loginAdminPage = new PlaywrightLoginAdmin(page);
    await loginAdminPage.goto();
    await loginAdminPage.loginAdmin('admin@gmail.com', 'admin123');
  });
});