import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightAddMasyarakat {
  readonly page: Page;
  readonly buttonTambahMasyarakat: Locator;
  readonly namaMasyarakat: Locator;
  readonly nikMasyarakat: Locator;
  readonly emailMasyarakat: Locator;
  readonly telpMasyarakat: Locator;
  readonly passwordMasyarakat: Locator;
  readonly checkModalAdd: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonTambahMasyarakat = page.getByRole('button', { name: 'Tambah Masyarakat' });
    this.namaMasyarakat = page.getByLabel('Tambah Masyarakat').locator('#nama_masyarakat');
    this.nikMasyarakat = page.getByLabel('Tambah Masyarakat').locator('#nik');
    this.emailMasyarakat = page.getByLabel('Tambah Masyarakat').locator('#email');
    this.telpMasyarakat = page.getByLabel('Tambah Masyarakat').locator('#telp');
    this.passwordMasyarakat = page.getByLabel('Tambah Masyarakat').locator('#password');
    this.checkModalAdd = page.getByRole('heading', { name: 'Tambah Masyarakat' });
  }

  async addMasyarakat(nama : string, nik : string, email : string, telp : string, password : string){
    await this.buttonTambahMasyarakat.click();
    await expect(this.checkModalAdd).toBeVisible();
    await this.namaMasyarakat.fill(nama);
    await this.nikMasyarakat.fill(nik);
    await this.emailMasyarakat.fill(email);
    await this.telpMasyarakat.fill(telp);
    await this.passwordMasyarakat.fill(password);
  }
}