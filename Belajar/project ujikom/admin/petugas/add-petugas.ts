import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';

export class PlaywrightAddPetugas {
  readonly page: Page;
  readonly buttonTambahPetugas: Locator;
  readonly namaPetugas: Locator;
  readonly emailPetugas: Locator;
  readonly telpPetugas: Locator;
  readonly passwordPetugas: Locator;
  readonly checkModalAdd: Locator;
  readonly checkHeading: Locator;
  readonly simpanAdd: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonTambahPetugas = page.getByRole('button', { name: 'Tambah Petugas' });
    this.namaPetugas = page.getByLabel('Tambah Petugas').locator('#nama_petugas');
    this.telpPetugas = page.getByLabel('Tambah Petugas').locator('#telp');
    this.emailPetugas = page.getByLabel('Tambah Petugas').locator('#email');
    this.passwordPetugas = page.getByLabel('Tambah Petugas').locator('#password');
    this.checkModalAdd = page.getByRole('heading', { name: 'Tambah Petugas' });
    this.simpanAdd = page.getByRole('button', { name: 'Simpan' });
    this.checkHeading = page.getByRole('heading', { name: 'List Petugas' });
  }

  async addPetugas(){
    const username = faker.internet.username();
    const password = faker.internet.password();
    const email = faker.internet.exampleEmail();
    const telp = faker.phone.number({ style: 'human' });

    await this.buttonTambahPetugas.click();
    await expect(this.checkModalAdd).toBeVisible();
    await this.namaPetugas.fill(username);
    await this.telpPetugas.fill(telp);
    await this.emailPetugas.fill(email);
    await this.passwordPetugas.fill(password);
    await this.simpanAdd.click();
    await expect(this.checkHeading).toBeVisible();
  }
}