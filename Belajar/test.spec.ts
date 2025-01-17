import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
    await page.goto('http://127.0.0.1:8000');
  
    await page.getByRole('navigation').getByRole('link', { name: 'Login' }).click();

    await page.getByRole('heading', { name: 'orLog in' }).click();
  
    await page.getByPlaceholder('Email login').fill('admin@gmail.com');

    await page.getByPlaceholder('Password login').fill('admin123');
  
    await page.getByRole('button', { name: 'Log in' }).click();

    await page.goto('http://127.0.0.1:8000/admin/home');

    await page.locator('li').filter({ hasText: 'Dark Mode' }).locator('div').nth(1).click();
});