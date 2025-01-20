import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightAddPetugas {
  readonly page: Page;
  readonly buttonTambahPetugas: Locator;
  readonly namaPetugas: Locator;
  readonly emailPetugas: Locator;
  readonly telpPetugas: Locator;
  readonly passwordPetugas: Locator;
  readonly checkModalAdd: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonTambahPetugas = page.getByRole('button', { name: 'Tambah Petugas' });
    this.namaPetugas = page.getByLabel('Tambah Petugas').locator('#nama_petugas');
    this.telpPetugas = page.getByLabel('Tambah Petugas').locator('#telp');
    this.emailPetugas = page.getByLabel('Tambah Petugas').locator('#email');
    this.passwordPetugas = page.getByLabel('Tambah Petugas').locator('#password');
    this.checkModalAdd = page.getByRole('heading', { name: 'Tambah Petugas' });
  }

  async addPetugas(nama : string, email : string, telp : string, password : string){
    await this.buttonTambahPetugas.click();
    await expect(this.checkModalAdd).toBeVisible();
    await this.namaPetugas.fill(nama);
    await this.telpPetugas.fill(telp);
    await this.emailPetugas.fill(email);
    await this.passwordPetugas.fill(password);
  }
}