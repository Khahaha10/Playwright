import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';

export class PlaywrightAddForum {
  readonly page: Page;
  readonly buttonAddForum: Locator;
  readonly checkModalDelete: Locator;
  readonly judulForum: Locator;
  readonly isiForum: Locator;
  readonly buttonSubmit: Locator;
  readonly dashboardHeader: Locator

  constructor(page: Page) {
    this.page = page;
    this.buttonAddForum = page.getByRole('button', { name: ' Buat Forum Topik Baru' });
    this.checkModalDelete = page.getByRole('heading', { name: 'Buat Forum Topik Baru' })
    this.judulForum = page.getByLabel('Buat Forum Topik Baru').locator('#judul');
    this.isiForum = page.getByLabel('Buat Forum Topik Baru').locator('#isi_forum');
    this.buttonSubmit = page. getByRole('button', { name: 'Submit' });
    this.dashboardHeader = page.getByRole('heading', { name: 'Forum Diskusi'});
  }

  async addForum(){
    const judul = faker.lorem.words(4);
    const isi = faker.lorem.sentences(3);


    await this.buttonAddForum.click();
    await expect(this.checkModalDelete).toBeVisible();
    await this.judulForum.fill(judul);
    await this.isiForum.fill(isi);
    await this.buttonSubmit.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}
