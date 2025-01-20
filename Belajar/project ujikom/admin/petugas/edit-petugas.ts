import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch'; 

export class PlaywrightEditPetugas {
  readonly page: Page;
  readonly buttonEditPetugas: Locator;
  readonly namaPetugas: Locator;
  readonly emailPetugas: Locator;
  readonly telpPetugas: Locator;
  readonly fotoPetugas: Locator;
  readonly checkModalEdit: Locator;
  readonly simpanEdit: Locator;
  readonly back: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonEditPetugas = page.getByRole('row').getByRole('link').last();
    this.namaPetugas = page.getByRole('dialog', { name: 'Edit Profil Petugas' }).locator('#nama_petugas');
    this.emailPetugas = page.getByRole('dialog', { name: 'Edit Profil Petugas' }).locator('#email');
    this.telpPetugas = page.getByRole('dialog', { name: 'Edit Profil Petugas' }).locator('#telp');
    this.fotoPetugas = page.getByRole('dialog', { name: 'Edit Profil Petugas' }).locator('#foto_profil');
    this.checkModalEdit = page.getByRole('heading', { name: 'Edit Profil Petugas' });
    this.simpanEdit = page.getByRole('button', { name: 'Simpan' });
    this.back = page.getByText('List Petugas');
  }

  async downloadImage(url: string, filePath: string) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFileSync(filePath, buffer);
  }

  async editPetugas() {
    await this.buttonEditPetugas.click();
    const username = faker.internet.userName();
    const email = faker.internet.exampleEmail();
    const telp = faker.phone.number({ style: 'human' });

    const avatarUrl = faker.image.avatar();
    const filePath = path.resolve(__dirname, 'temp_avatar.jpg'); 
    await this.downloadImage(avatarUrl, filePath);

    await expect(this.checkModalEdit).toBeVisible();
    await this.namaPetugas.fill(username);
    await this.fotoPetugas.setInputFiles(filePath); 
    await this.telpPetugas.fill(telp);
    await this.emailPetugas.fill(email);
    await this.simpanEdit.click();
    await expect(this.back).toBeVisible();

    fs.unlinkSync(filePath);
  }
}
