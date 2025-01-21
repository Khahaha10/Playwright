import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';

export class PlaywrightAddMasyarakat {
  readonly page: Page;
  readonly buttonTambahMasyarakat: Locator;
  readonly namaMasyarakat: Locator;
  readonly nikMasyarakat: Locator;
  readonly emailMasyarakat: Locator;
  readonly telpMasyarakat: Locator;
  readonly passwordMasyarakat: Locator;
  readonly checkModalAdd: Locator;
  readonly simpanMasyarakat: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonTambahMasyarakat = page.getByRole('button', { name: 'Tambah Masyarakat' });
    this.namaMasyarakat = page.getByLabel('Tambah Masyarakat').locator('#nama_masyarakat');
    this.nikMasyarakat = page.getByLabel('Tambah Masyarakat').locator('#nik');
    this.emailMasyarakat = page.getByLabel('Tambah Masyarakat').locator('#email');
    this.telpMasyarakat = page.getByLabel('Tambah Masyarakat').locator('#telp');
    this.passwordMasyarakat = page.getByLabel('Tambah Masyarakat').locator('#password');
    this.checkModalAdd = page.getByRole('heading', { name: 'Tambah Masyarakat' });
    this.simpanMasyarakat = page.getByRole('button', { name: 'Simpan' });
    this.dashboardHeader = page.locator('h4', {hasText: 'List Masyarakat'});
  }

  async addMasyarakat(){
    const username = faker.internet.userName();
    const telp = faker.phone.number({ style: 'human' });
    const email = faker.internet.exampleEmail();
    const password = faker.internet.password();
    const nik = faker.string.numeric(12)

    await this.buttonTambahMasyarakat.click();
    await expect(this.checkModalAdd).toBeVisible();
    await this.namaMasyarakat.fill(username);
    await this.nikMasyarakat.fill(nik);
    await this.emailMasyarakat.fill(email);
    await this.telpMasyarakat.fill(telp);
    await this.passwordMasyarakat.fill(password);
    await this.simpanMasyarakat.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}