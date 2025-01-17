import { test, expect } from '@playwright/test';
import { PlaywrightLoginAdmin } from './admin/login-admin';
import { PlaywrightGoToSkill } from './admin/skill/skill';
import { PlaywrightAddSkill } from './admin/skill/add-skill';
import { PlaywrightEditSkill } from './admin/skill/edit-skill';
import { PlaywrightDeleteSkill } from './admin/skill/delete-skill';
import { PlaywrightLandingPage } from './landing-page';

test.describe('Test', () => {

  let showSkillPage: PlaywrightGoToSkill;
  let storeSkillPage: PlaywrightAddSkill;
  let updateSkillPage: PlaywrightEditSkill;
  let destroySkillPage: PlaywrightDeleteSkill;
  let loginAdminPage: PlaywrightLoginAdmin;
  let landingPage: PlaywrightLandingPage;

  test.beforeEach(async ({ page }) => {
    showSkillPage = new PlaywrightGoToSkill(page);
    storeSkillPage = new PlaywrightAddSkill(page);
    updateSkillPage = new PlaywrightEditSkill(page);
    destroySkillPage = new PlaywrightDeleteSkill(page);
    loginAdminPage = new PlaywrightLoginAdmin(page);
    landingPage = new PlaywrightLandingPage(page);

    await page.goto('http://localhost:8000/');
    await landingPage.navbarLandingPage();
    await loginAdminPage.landingpageGoToLogin();
    await loginAdminPage.registerAdmin('tes admin', 'admin@gmail.com', 'admin123');
    await loginAdminPage.loginAdmin('admin@gmail.com', 'admin123');
  });

  test('store skill', async () => {
    await showSkillPage.goToSkill();
    await storeSkillPage.addSkill('tes');
  });

  test('update skill', async () => {
    await showSkillPage.goToSkill();
    await updateSkillPage.editSkill('edit tes');
  });

  test('destroy skill', async () => {
    await showSkillPage.goToSkill();
    await destroySkillPage.deleteSkill();
  });
});