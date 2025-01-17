import { test, expect } from '@playwright/test';
import { PlaywrightLoginAdmin } from './admin/login-admin';
import { PlaywrightAddSkill } from './admin/skill/add-skill';
import { PlaywrightEditSkill } from './admin/skill/edit-skill';
import { PlaywrightLandingPage } from './landing-page';

test.describe('Test', () => {

  let storeSkillPage: PlaywrightAddSkill;
  let updateSkillPage: PlaywrightEditSkill;
  let loginAdminPage: PlaywrightLoginAdmin;
  let landingPage: PlaywrightLandingPage;

  test.beforeEach(async ({ page }) => {
    storeSkillPage = new PlaywrightAddSkill(page);
    updateSkillPage = new PlaywrightEditSkill(page);
    loginAdminPage = new PlaywrightLoginAdmin(page);
    landingPage = new PlaywrightLandingPage(page);
    await page.goto('http://localhost:8000/');
    await landingPage.navbarLandingPage();
    await loginAdminPage.landingpageGoToLogin();
    await loginAdminPage.registerAdmin('tes admin', 'admin@gmail.com', 'admin123');
    await loginAdminPage.loginAdmin('admin@gmail.com', 'admin123');
  });

  test('store skill', async ({ page }) => {
    await page.goto('http://localhost:8000/admin/skill');
    await storeSkillPage.addSkill('tes');
  });

  test('update skill', async ({ page }) => {
    await page.goto('http://localhost:8000/admin/skill');
    await updateSkillPage.editSkill('edit tes');
  });

});